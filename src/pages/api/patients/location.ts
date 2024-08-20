import type { NextApiRequest, NextApiResponse } from "next";
import { dbConnect } from "@/utils/mongodb";
import { findPatientsNearby } from "@/utils/queries/patient";

const GET = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { limit, page, lat, lng, radius } = req.query;
      if(!lat || !lng || isNaN(+lat) || isNaN(+lng)) return res.status(400).json({ error: "Invalid coordinates" });
    
      const limitNum = (limit && !isNaN(+limit)) ? +limit : 50;
      const pagetNum = (page && !isNaN(+page)) ? +page : 1;
      const radiusNum = (radius && !isNaN(+radius)) ? +radius : 2000;
      await dbConnect();
      const patients = await findPatientsNearby(+lat, +lng, radiusNum, pagetNum, limitNum);

      res.status(200).json(patients);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: (error as Error).message });
    }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") return GET(req, res);
  
    res.status(404).json({ error: "Invalid Method" });
  }
  