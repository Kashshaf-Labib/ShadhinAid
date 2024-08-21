import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Patient } from "@/types";
import Image from "next/image";

export default function PatientDetailPage() {
  const [patient, setPatient] = useState<Patient | null>(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const fetchPatient = async () => {
        try {
          const response = await fetch(`/api/patients/${id}`);
          const data = await response.json();
          setPatient(data);
        } catch (error) {
          console.error("Failed to fetch patient data:", error);
        }
      };
      fetchPatient();
    }
  }, [id]);

  if (!patient) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <>
      <Head>
        <title>{patient.name} - Shadhin Aid</title>
      </Head>
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-200">
          <div className="container mx-auto p-4 pt-20">
            <div className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl mx-auto">
              <div className="md:flex">
                <div className="md:flex-shrink-0"></div>
                <div className="p-8">
                  <h1 className="text-4xl font-bold mb-4 text-gray-900">
                    {patient.name}
                  </h1>
                  <div className="relative py-12">
                    <Image
                      src={patient.imageUrl}
                      alt={patient.name}
                      width={500}
                      height={500}
                      className="rounded-lg"
                    />
                  </div>
                  <p className="text-lg text-gray-700 mb-4">
                    <span className="font-semibold">রোগীর পেশা: </span>
                    {patient.profession}
                  </p>
                  <div className="text-lg text-gray-700 mb-4">
                    <span className="font-semibold">বিবরণ: </span>
                    <p className="whitespace-pre-wrap">
                      {patient.description}
                    </p>
                  </div>
                  <p className="text-lg text-gray-700 mb-4">
                    <span className="font-semibold">ফোন: </span> {patient.phone}
                  </p>
                  <p className="text-lg text-gray-700 mb-4">
                    <span className="font-semibold">অভিভাবকের নাম: </span>
                    {patient.guardian_name}
                  </p>
                  <p className="text-lg text-gray-700 mb-4">
                    <span className="font-semibold">অভিভাবকের পেশা: </span>
                    {patient.guardian_profession}
                  </p>
                  <p className="text-lg text-gray-700 mb-4">
                    <span className="font-semibold">অভিভাবকের নাম্বার: </span>
                    {patient.guardian_phone}
                  </p>
                  <p className="text-lg text-gray-700 mb-4">
                    <span className="font-semibold">হাসপাতালের নাম: </span>
                    {patient.hospital_name}
                  </p>
                  <p className="text-lg text-gray-700 mb-4">
                    <span className="font-semibold">ঠিকানা: </span>
                    {patient.location_name}
                  </p>
                  <p className="text-lg text-gray-700 mb-4">
                    <span className="font-semibold">প্রয়োজনীয় ফান্ড: </span> {patient.total_fund_needed}৳
                  </p>
                  <p className="text-lg text-gray-700 mb-4">
                    <span className="font-semibold">সংগ্রহিত ফান্ড: </span>  {patient.total_fund_collected}৳
                  </p>
                  <div className="mt-8 flex justify-between">
                    <button className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300">
                      Donate Now
                    </button>
                    <button
                      onClick={() => router.back()}
                      className="bg-gray-600 text-white py-3 px-6 rounded-lg hover:bg-gray-700 transition duration-300"
                    >
                      Back
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
