import { NextApiRequest, NextApiResponse } from "next";
import { getProfile } from "../auth";
import { IUser } from "../models/User";


export const checkAdmin = async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) { res.status(401).json({ error: 'Unauthorized' }); return null; }
    const payload = await getProfile(token);
    if ((payload as any).role !== 'admin') { res.status(403).json({ error: 'Forbidden' }); return null; }

    return payload as IUser;
}