import Patient, { IPatient } from "@/utils/models/Patient";

export const findPatient = async (id: string) => {
    return await Patient.findById(id);
}

export const createPatient = async (data: Omit<IPatient, 'created_at'>) => {
    return await Patient.create(data);
}

export const updatePatient = async (id: string, data: IPatient) => {
    return await Patient.findByIdAndUpdate(id, data, { new: true });
}

export const deletePatient = async (id: string) => {
    return await Patient.findByIdAndDelete(id);
}

export const getPatients = async (type="full", page = 1, limit = 50) => {
    let contents;
    
    page = Math.max(1, page);
    limit = Math.max(1, limit);

    // Calculate the number of items to skip
    const skip = (page - 1) * limit;

    if(type == "short") 
        contents = await Patient.find().skip(skip).limit(limit).sort({ created_at: 1 }).select('name medical_id phone hospital_name');
    else
        contents = await Patient.find().skip(skip).limit(limit).sort({ created_at: 1 });
    
    const totalItems = await Patient.countDocuments();
    return {
        contents,
        totalItems,
        totalPages: Math.ceil(totalItems / limit),
        currentPage: page
    };
}


export const searchPatientsByHospital = async (keyword: string, page = 1, limit = 50) => {
    page = Math.max(1, page);
    limit = Math.max(1, limit);

    // Calculate the number of items to skip
    const skip = (page - 1) * limit;
    const query = { hospital_name: { $regex: keyword, $options: 'i' } };
    const contents = await Patient.find(query).skip(skip).limit(limit).sort({ hospital_name: 1 });
    const totalItems = await Patient.countDocuments(query);

    return {
        contents,
        totalItems,
        totalPages: Math.ceil(totalItems / limit),
        currentPage: page
    };
}