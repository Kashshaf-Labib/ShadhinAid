import { model, models, Schema } from 'mongoose';

export interface IDonation {
    patientId: string,
    paymentID: string,
    trxID: string,
    date: string,
    amount: number,
    created_at: Date
}

const DonationSchema = new Schema<IDonation>({
    patientId: { type: String, required: true },
    paymentID: { type: String, required: true },
    trxID: { type: String, required: true },
    date: { type: String, required: true },
    amount: { type: Number, required: true },
    created_at: { type: Date, default: Date.now },
});

export const Donation = models?.donation || model('donation', DonationSchema);
