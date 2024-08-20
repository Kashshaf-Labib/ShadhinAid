import { generate_uuid } from "@/lib/utils";
import { bkash_create_payment_url, serverUrl } from "@/utils/const";
import { bkash_headers } from "@/utils/middlewares/bkash_auth";
import axios, { AxiosError } from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const POST = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { amount, patientId, patientName } = req.body;
        const { data } = await axios.post(bkash_create_payment_url, {
            mode: "0011",
            amount: amount,
            currency: "BDT",
            intent: 'sale',
            merchantInvoiceNumber: 'Inv' + Math.random().toString(36).slice(2, 7),
            callbackUrl: `${serverUrl}/api/donate/callback`,
        }, {
            headers: await bkash_headers()
        })
        return res.status(200).json({ bkashURL: data.bkashURL })
    } catch (error) {
        console.log(error);
        return res.status((error as AxiosError).status || 400).json((error as AxiosError).toJSON());
    }
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") return POST(req, res);
    return res.status(404).json({ error: "Invalid Method" });
}
