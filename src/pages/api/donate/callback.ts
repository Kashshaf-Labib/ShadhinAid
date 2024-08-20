import { bkash_execute_payment_url } from "@/utils/const";
import { bkash_headers } from "@/utils/middlewares/bkash_auth";
import { Donation } from "@/utils/models/Donation";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const GET = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { paymentID, status, patientId } = req.query;
        if (status === 'cancel' || status === 'failure') return res.redirect(307, `/donation/status?status=${status}`)
        if (status === 'success') {
            const { data } = await axios.post(bkash_execute_payment_url, { paymentID }, {
                headers: await bkash_headers()
            })
            if (data && data.statusCode === '0000') {
                await Donation.create({
                    patientId: patientId as string,
                    paymentID: data.paymentID,
                    trxID: data.trxID,
                    date: data.paymentTime,
                    amount: data.amount
                });
                return res.redirect(307, `/donation/status?status=success`);
            }else{
                return res.redirect(307, `/donation/status?status=${data.statusMessage}`);
            }
        }

    } catch (error) {
        console.log(error);
        return res.status(401).json({ error: (error as Error).message });
    }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") return GET(req, res);
    return res.status(404).json({ error: "Invalid Method" });
}
