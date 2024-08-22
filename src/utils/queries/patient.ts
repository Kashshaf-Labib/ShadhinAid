import Patient, { IPatient } from "@/utils/models/Patient";

export const findPatient = async (id: string) => {
  return await Patient.findById(id);
};

export const createPatient = async (data: Omit<IPatient, 'created_at'>) => {
  return await Patient.create(data);
}


export const updatePatient = async (id: string, data: IPatient) => {
  return await Patient.findByIdAndUpdate(id, data, { new: true });
};

export const deletePatient = async (id: string) => {
  return await Patient.findByIdAndDelete(id);
};

export const getPatients = async (type = "full", approval:string|null, page = 1, limit = 50) => {
  let contents;

  let query = {};
  if (approval) query = { approval };

  page = Math.max(1, page);
  limit = Math.max(1, limit);
  // Calculate the number of items to skip
  const skip = (page - 1) * limit;
  if (type == "short")
    contents = await Patient.find(query)
      .skip(skip)
      .limit(limit)
      .sort({ created_at: 1 })
      .select("name medical_id phone hospital_name imageUrl");
  else
    contents = await Patient.find()
      .skip(skip)
      .limit(limit)
      .sort({ created_at: 1 });

  const totalItems = await Patient.countDocuments();
  return {
    contents,
    totalItems,
    totalPages: Math.ceil(totalItems / limit),
    currentPage: page,
  };
};

export const searchPatientsByHospital = async (
  keyword: string,
  approval: string | null,
  page = 1,
  limit = 50
) => {
  page = Math.max(1, page);
  limit = Math.max(1, limit);

  // Calculate the number of items to skip
  const skip = (page - 1) * limit;
  // Create a query object to search for the keyword
  let query:any = { hospital_name: { $regex: keyword, $options: "i" } };
  if (approval) query = { ...query, approval };

  const contents = await Patient.find(query)
    .skip(skip)
    .limit(limit)
    .sort({ hospital_name: 1 });
  const totalItems = await Patient.countDocuments(query);

  return {
    contents,
    totalItems,
    totalPages: Math.ceil(totalItems / limit),
    currentPage: page,
  };
};

export const findPatientsNearby = async (lat: number, lng: number, radius = 2000, page = 1, limit = 50) => {
  const query = {
    location: {
      $geoWithin: {
        $centerSphere: [[lng, lat], radius/6378100],
      },
    },
  };

  const contents = await Patient.find(query)
    .skip((page - 1) * limit)
    .limit(limit);
    
  const totalItems = await Patient.countDocuments(query);
  return {
    contents,
    totalItems,
    totalPages: Math.ceil(totalItems / limit),
    currentPage: page,
  };
}