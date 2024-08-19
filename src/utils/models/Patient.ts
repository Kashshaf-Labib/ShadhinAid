import { model, models, Schema } from 'mongoose';

export interface IPatient {
    name: string,
    medical_id: string,
    profession: string,
    phone: string,
    description: string,
    guardian_name: string,
    guardian_profession: string,
    guardian_phone: string,
    hospital_name: string,
    approval: string,
    imageUrl: string,
    total_fund_needed?: number,
    total_fund_collected?: number,
    location_name: string,
    location: {
        type: string,
        coordinates: number[],
    },
    created_at: Date
}

const PatientSchema = new Schema<IPatient>({
    name: { type: String, required: true },
    medical_id: { type: String, required: true },
    profession: { type: String, required: true },
    phone: { type: String, required: true },
    description: { type: String, required: true },
    guardian_name: { type: String, required: true },
    guardian_profession: { type: String, required: true },
    guardian_phone: { type: String, required: true },
    hospital_name: { type: String },
    approval: { type: String, default: 'pending' },
    imageUrl: { type: String },
    total_fund_needed: { type: Number, default: 0 },
    total_fund_collected: { type: Number, default: 0 },
    location_name: { type: String, required: true },
    location: {
        type: { type: String, enum: ['Point'], required: true, default: 'Point' }, // 'location.type' must be 'Point'
        coordinates: { type: [Number], required: true, },
      },
    created_at: { type: Date, default: Date.now },
});
PatientSchema.index({ location: '2dsphere' });

const Patient = models?.patient || model('patient', PatientSchema);

export default Patient;


