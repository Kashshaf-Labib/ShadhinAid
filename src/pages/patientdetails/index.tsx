// import { useEffect, useState } from "react";
// import Navbar from "@/components/Navbar";
// import Head from "next/head";

// interface IPatient {
//   _id: string;
//   name: string;
//   profession: string;
//   description: string;
//   phone: string;
//   guardian_name: string;
//   guardian_profession: string;
//   guardian_phone: string;
//   hospital_name: string;
//   is_approved: boolean;
//   location: {
//     type: string;
//     coordinates: number[];
//   };
//   created_at: string;
// }

// export default function PatientDetails() {
//   const [patients, setPatients] = useState<IPatient[]>([]);
//   const [selectedPatient, setSelectedPatient] = useState<IPatient | null>(null);

//   useEffect(() => {
//     const fetchPatients = async () => {
//       try {
//         const response = await fetch("/api/patients");
//         const data = await response.json();
//         setPatients(data.contents);
//       } catch (error) {
//         console.error("Failed to fetch patient data:", error);
//       }
//     };
//     fetchPatients();
//   }, []);

//   const handleCardClick = (patient: IPatient) => {
//     setSelectedPatient(patient);
//   };

//   const handleCloseModal = () => {
//     setSelectedPatient(null);
//   };

//   return (
//     <>
//       <Head>
//         <title>Patient Details - Shadhin Aid</title>
//       </Head>
//       <div className="min-h-screen bg-gradient-to-r from-blue-100 to-indigo-100">
//         <Navbar />
//         <div className="container mx-auto p-4 pt-20">
//           <h1
//             className="text-4xl font-bold mb-8"
//             style={{ color: "rgb(17, 24, 39)" }}
//           >
//             রোগীর বিবরণ
//           </h1>
//           <div className="grid md:grid-cols-3 gap-8">
//             {patients.map((patient) => (
//               <div
//                 key={patient._id}
//                 className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition-shadow"
//                 onClick={() => handleCardClick(patient)}
//               >
//                 <h2
//                   className="text-xl font-bold mb-2"
//                   style={{ color: "rgb(17, 24, 39)" }}
//                 >
//                   {patient.name}
//                 </h2>
//                 <p className="text-gray-600">
//                   রোগীর পেশা: {patient.profession}
//                 </p>
//                 <p className="text-gray-600">প্রয়োজনীয় ফান্ড: 0৳</p>
//                 <p className="text-gray-600">সংগ্রহিত ফান্ড: 0৳</p>
//                 <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
//                   Donate Now
//                 </button>
//               </div>
//             ))}
//           </div>

//           {selectedPatient && (
//             <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//               <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
//                 <h2
//                   className="text-2xl font-bold mb-4"
//                   style={{ color: "rgb(17, 24, 39)" }}
//                 >
//                   {selectedPatient.name}
//                 </h2>
//                 <p className="text-gray-600">
//                   রোগীর পেশা: {selectedPatient.profession}
//                 </p>
//                 <p className="text-gray-600">
//                   বিবরণ: {selectedPatient.description}
//                 </p>
//                 <p className="text-gray-600">ফোন: {selectedPatient.phone}</p>
//                 <p className="text-gray-600">
//                   অভিভাবকের নাম: {selectedPatient.guardian_name}
//                 </p>
//                 <p className="text-gray-600">
//                   অভিভাবকের পেশা: {selectedPatient.guardian_profession}
//                 </p>
//                 <p className="text-gray-600">
//                   অভিভাবকের নাম্বার: {selectedPatient.guardian_phone}
//                 </p>
//                 <p className="text-gray-600">
//                   হাসপাতালের নাম: {selectedPatient.hospital_name}
//                 </p>
//                 <p className="text-gray-600">প্রয়োজনীয় ফান্ড: 0৳</p>
//                 <p className="text-gray-600">সংগ্রহিত ফান্ড: 0৳</p>
//                 <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
//                   Donate Now
//                 </button>
//                 <button
//                   onClick={handleCloseModal}
//                   className="mt-4 ml-4 bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700"
//                 >
//                   Back
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import { useRouter } from "next/router";

interface IPatient {
  _id: string;
  name: string;
  profession: string;
  description: string;
  phone: string;
  guardian_name: string;
  guardian_profession: string;
  guardian_phone: string;
  hospital_name: string;
  is_approved: boolean;
  location: {
    type: string;
    coordinates: number[];
  };
  created_at: string;
}

export default function PatientDetails() {
  const [patients, setPatients] = useState<IPatient[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch("/api/patients");
        const data = await response.json();
        setPatients(data.contents);
      } catch (error) {
        console.error("Failed to fetch patient data:", error);
      }
    };
    fetchPatients();
  }, []);

  const handleCardClick = (patientId: string) => {
    router.push(`/patients/${patientId}`);
  };

  return (
    <>
      <Head>
        <title>Patient Details - Shadhin Aid</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-r from-blue-100 to-indigo-100">
        <Navbar />
        <div className="container mx-auto p-4 pt-20">
          <h1
            className="text-4xl font-bold mb-8"
            style={{ color: "rgb(17, 24, 39)" }}
          >
            রোগীর বিবরণ
          </h1>
          <div className="grid md:grid-cols-3 gap-8">
            {patients.map((patient) => (
              <div
                key={patient._id}
                className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition-shadow"
                onClick={() => handleCardClick(patient._id)}
              >
                <h2
                  className="text-xl font-bold mb-2"
                  style={{ color: "rgb(17, 24, 39)" }}
                >
                  {patient.name}
                </h2>
                <p className="text-gray-600">
                  রোগীর পেশা: {patient.profession}
                </p>
                <p className="text-gray-600">প্রয়োজনীয় ফান্ড: 0৳</p>
                <p className="text-gray-600">সংগ্রহিত ফান্ড: 0৳</p>
                <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
                  Donate Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
