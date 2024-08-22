import type { NextApiRequest, NextApiResponse } from "next";
import { dbConnect } from "@/utils/mongodb";
import {
  createPatient,
  getPatients,
  searchPatientsByHospital,
} from "@/utils/queries/patient";

const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { limit, page, hospital_name, type, approval } = req.query;
    await dbConnect();
    if (!hospital_name) {
      const data = await getPatients(
        type as string,
        approval ? approval as string : null,
        page ? +page : 1,
        limit ? +limit : 50
      );
      res.status(200).json(data);
    } else {
      const data = await searchPatientsByHospital(
        hospital_name as string,
        approval ? approval as string : null,
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

    const { name, medical_id, profession, phone, description, guardian_name, guardian_profession, guardian_phone, imageUrl, hospital_name, location_name, total_fund_needed, lat, lng } = req.body;

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
      imageUrl,
      total_fund_needed,
      approval: 'pending',
      location: {
        type: 'Point',
        coordinates: [lng, lat]
      },
      location_name,
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
