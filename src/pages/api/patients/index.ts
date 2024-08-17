import type { NextApiRequest, NextApiResponse } from "next";
import { dbConnect } from "@/utils/mongodb";
import {
  createPatient,
  getPatients,
  searchPatientsByHospital,
  updatePatient,
} from "@/utils/queries/patient";
import { checkAdmin } from "@/utils/middlewares/admin";

const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { limit, page, hospital_name, type } = req.query;
    await dbConnect();
    if (!hospital_name) {
      const data = await getPatients(
        type as string,
        page ? +page : 1,
        limit ? +limit : 50
      );
      res.status(200).json(data);
    } else {
      const data = await searchPatientsByHospital(
        hospital_name as string,
        page ? +page : 1,
        limit ? +limit : 50
      );
      res.status(200).json(data);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: (error as Error).message });
  }
};

const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  try {

    const { name, medical_id, profession, phone, description, guardian_name, guardian_profession, guardian_phone, hospital_name, lat, lng } = req.body;

    await dbConnect();
    const data = await createPatient({
      name,
      medical_id,
      profession,
      phone,
      description,
      guardian_name,
      guardian_profession,
      guardian_phone,
      hospital_name,
      is_approved: false,
      location: {
        type: 'Point',
        coordinates: [lng, lat]

      }
    });
    res.status(201).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to create patient" });
  }
}


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.method);
  if (req.method === "GET") return GET(req, res);
  if (req.method === "POST") return POST(req, res);
  res.status(404).json({ error: "Invalid Method" });
}
