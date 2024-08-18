import { NextApiRequest, NextApiResponse } from "next";

const POST = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Failed to donation money" });
    }
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST")  return POST(req, res);
    return res.status(404).json({ error: "Invalid Method" });
}
