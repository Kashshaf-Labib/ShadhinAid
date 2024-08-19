import { NextApiRequest, NextApiResponse } from "next";
import { dbConnect } from "@/utils/mongodb";
import multer from "multer";
import { UPLOAD_FOLDER } from "@/utils/const";
import { generate_uuid } from "@/lib/utils";
import { Stream } from "stream";
import { drive } from "@/utils/drive";

const upload = multer({ storage: multer.memoryStorage() });


export const config = {
    api: {
        bodyParser: false, // Disable body parsing, multer will handle it
    },
}

interface NextApiRequestWithFile extends NextApiRequest {
    file: any;

}

const POST = async (req: NextApiRequestWithFile, res: NextApiResponse) => {
    try {
        await dbConnect();
        return upload.single('file')(req as any, res as any, async (err: any) => {
            if (err) return res.status(400).json({ error: err.message });
            const file = req.file;
            // console.log(file);
            // // Convert base64 data to buffer
            const fileMetadata = {
                name: generate_uuid(),
                parents: [UPLOAD_FOLDER || ""],
            };
            const media = {
                mimeType: file.mimetype,
                body: new Stream.PassThrough().end(req.file?.buffer),
            };
            const uploadedFile = await drive.files.create({
                requestBody: fileMetadata,
                media,
                fields: "webContentLink, webViewLink, thumbnailLink",
            });
            
            return res.status(200).json({
                error: false, message: `File uploaded successfully`, webViewLink: getThumbnail(uploadedFile.data.thumbnailLink as string),
            });
            // return res.status(200).json({ error: false, message: 'File uploaded successfully' });
        });
    } catch (error) {
        console.log(error);
        res.status(403).json({ error: (error as Error).message });
    }
}

export default function handler(req: NextApiRequestWithFile, res: NextApiResponse) {
    if (req.method === 'POST')
        return POST(req, res);

    res.status(404).json({ error: 'Invalid Method' });
}


function getThumbnail(thumbnailLink:string, newSize=400) {
    return thumbnailLink.replace(/=s\d+/, `=s${newSize}`);
  }