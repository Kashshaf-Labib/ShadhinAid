import { checkAdmin } from "@/utils/middlewares/admin";
import { deletePatient, updatePatient } from "@/utils/queries/patient";
import { NextApiRequest, NextApiResponse } from "next";

const PUT = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const isAdmin = await checkAdmin(req, res);
      if (!isAdmin) return;
   
      const patient = await updatePatient(req.query.id as string, req.body);
  
      res.status(200).json({ message: 'Updated', patient });
  
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Failed to update patient" });
    }
  }


  const DELETE = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const isAdmin = await checkAdmin(req, res);
      if (!isAdmin) return;
  
      const patient = await deletePatient(req.query.id as string);
  
      res.status(200).json({ message: 'Deleted', patient });
  
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Failed to delete patient information" });
    }
  }

  
  export default function handler(
      req: NextApiRequest,
      res: NextApiResponse,
    ) {
        
    if (req.method === 'PUT') return PUT(req, res);
    if (req.method === 'DELETE') return DELETE(req, res);

    res.status(404).json({ error: 'Invalid Method' });
  }
  