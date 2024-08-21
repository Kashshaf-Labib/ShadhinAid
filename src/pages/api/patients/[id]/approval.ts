import type { NextApiRequest, NextApiResponse } from "next";
import { dbConnect } from "@/utils/mongodb";
import Patient from "@/utils/models/Patient";
import { checkAdmin } from "@/utils/middlewares/admin";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();
  if (req.method === "PUT") {
    try {
      const { id } = req.query;
      const { approval } = req.body;

      if (!["approved", "pending"].includes(approval)) {
        return res.status(400).json({ error: "Invalid approval status" });
      }

      const patient = await Patient.findByIdAndUpdate(
        id,
        { approval },
        { new: true }
      );

      if (!patient) {
        return res.status(404).json({ error: "Patient not found" });
      }

      res.status(200).json({ patient });
    } catch (error) {
      console.error("Error updating approval status:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.setHeader("Allow", ["PUT"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
