import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import { useRouter } from "next/router";
import { IPatient } from "@/utils/models/Patient";
import Link from "next/link";

interface Patient extends IPatient {
  _id: string;
}

export default function PatientDetails() {
  const [patients, setPatients] = useState<Patient[]>([]);
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

  return (
    <>
      <Head>
        <title>Patient Details - Shadhin Aid</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-r from-blue-100 to-indigo-100">
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
                className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
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
                <p className="text-gray-600">প্রয়োজনীয় ফান্ড: {patient.total_fund_needed}৳</p>
                <p className="text-gray-600">সংগ্রহিত ফান্ড: {patient.total_fund_collected}৳</p>
                <Link href={`/patients/${patient._id}`} className="w-fit block mt-4 bg-primary text-white py-2 px-4 rounded hover:bg-green-700">
                  Donate Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
