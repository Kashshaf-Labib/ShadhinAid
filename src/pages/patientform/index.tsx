import { FormEvent, useState } from "react";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import toast from "react-hot-toast";

export default function PatientForm() {
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    setLoading(true);
    // Handle API request here
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, lat: 23.8103, lng: 90.4125 }), // Apatoto random value
    };

    fetch("/api/patients", options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.error) {
          setLoading(false);
          return toast.error("Failed to upload patient details");
        }
        toast.success("Patient details submitted successfully");
        (e.target as HTMLFormElement).reset();
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        toast.error("Failed to upload patient details");
      });
  };

  return (
    <>
      <Head>
        <title>Submit Patient Details - Shadhin Aid</title>
      </Head>
      <Navbar />
      <div className="min-h-screen pt-24 en bg-gradient-to-r from-blue-100 to-indigo-100 p-8 flex items-center justify-center">
        <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-7xl">
          <h1 className="text-3xl font-bold mb-8 text-center text-blue-900">
            Submit Patient Details
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700">
                    নাম
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    name="name"
                    placeholder="নাম লিখুন"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700">
                    মেডিকেল আইডি
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    name="medical_id"
                    placeholder="মেডিকেল আইডি লিখুন"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700">
                    রোগীর পেশা
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    name="profession"
                    placeholder="পেশা লিখুন"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700">
                    রোগীর নাম্বার
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    name="phone"
                    placeholder="নাম্বার লিখুন"
                    required
                  />
                </div>
              </div>

              <div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700">
                    হাসপাতালের নাম (যদি রোগী এখনও ভর্তি থাকে)
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    name="hospital_name"
                    placeholder="হাসপাতালের নাম লিখুন"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700">
                    অভিভাবকের নাম
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    name="guardian_name"
                    placeholder="নাম লিখুন"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700">
                    অভিভাবকের পেশা
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    name="guardian_profession"
                    placeholder="পেশা লিখুন"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700">
                    অভিভাবকের নাম্বার
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    name="guardian_phone"
                    placeholder="নাম্বার লিখুন"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">
                ঘটনার বিবরণী
              </label>
              <textarea
                className="min-h-36 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                name="description"
                placeholder="বিস্তারিত লিখুন"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold text-lg"
            >
              {loading ? "Please wait" : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
