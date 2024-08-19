import { CLIENT_EMAIL, PRIVATE_KEY } from "./const";
import { google } from "googleapis";

const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/drive"],
  });
  
  // Create a Google Drive client
export const drive = google.drive({ version: "v3", auth });
  