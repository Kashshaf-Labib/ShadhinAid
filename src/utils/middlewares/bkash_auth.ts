import { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';
import { bkash_api_key, bkash_grant_token_url, bkash_password, bkash_secret_key, bkash_username } from "../const";

export const getBkashIdToken = async () => {
    try {
        const {data} = await axios.post(bkash_grant_token_url, {
            app_key: bkash_api_key,
            app_secret: bkash_secret_key
        }, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                username: bkash_username,
                password: bkash_password,
            }
        });
        return data.id_token || null;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const bkash_headers = async () => {
    return {
        "Content-Type": "application/json",
        Accept: "application/json",
        authorization: await getBkashIdToken(),
        'x-app-key': process.env.bkash_api_key,
    }
}