import type { NextApiRequest, NextApiResponse } from "next";
import { dbConnect } from "@/utils/mongodb";
import { getPatients, searchPatientsByHospital } from "@/utils/queries/patient";


const GET = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { limit, page, hospital_name } = req.query;
        await dbConnect();
        if (!hospital_name) {
          const data = await getPatients(page ? +page : 1, limit ? +limit : 50);
          res.status(200).json(data);
        } else {
          const data = await searchPatientsByHospital(hospital_name as string, page ? +page : 1, limit ? +limit : 50);
          res.status(200).json(data);
        }
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: (error as Error).message });
      }
}

const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, medical_id, profession, phone, description, guardian_name, guardian_profession, guardian_phone, hospital_name } = req.body;

  await dbConnect();
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') return GET(req, res);
  res.status(404).json({error: 'Invalid Method'}); 
}
