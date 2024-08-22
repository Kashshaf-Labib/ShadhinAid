import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { IPatient } from "@/utils/models/Patient";
import PatientCard from "@/components/patient-card";
import Image from "next/image";
import Link from "next/link";
import ReactPaginate from "react-paginate";
import Spinner from "@/components/Spinner";
import LocationSearch from "@/components/LocationSearch";

interface Patient extends IPatient {
  _id: string;
}

const Home: NextPage = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch(`/api/patients?type=short&approval=approved&limit=20&page=${page}`);
        const data = await response.json();
        console.log(data);
        setPatients(data.contents);
        setTotalPage(data.totalPages);
      } catch (error) {
        console.error("Failed to fetch patient data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPatients();
  }, [page]);

  function onPageChange(selectedItem: { selected: number }) {
    setPage(selectedItem.selected);
  }

  return (
    <div className="bg-[#c5ffc4]">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="font-heading mb-4 font-bold tracking-tight text-gray-900 text-4xl sm:text-5xl">
              স্বাস্থ্যসেবা সহজ করুন
            </h1>
            <p className="mt-4 max-w-3xl text-lg sm:text-xl text-gray-700 mx-auto md:mx-0">
              আপনার রোগীদের তথ্য সহজে ব্যবস্থাপনা করুন এবং সর্বোত্তম সেবা প্রদান
              করুন
            </p>
            <div className="mt-8">
              <Link href="/patientform">
                <button className="bg-[#ff5555] hover:bg-[#d43636] text-white font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1">
                  রোগীর তথ্য জমা দিন
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <Image
              height={400}
              width={400}
              src="/donate.jpg"
              alt="Healthcare professionals"
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Patient List Section */}
      <section className="bg-white mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 rounded-t-3xl">
        <div className="mb-8 text-center">
          <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 text-2xl sm:text-3xl">
            সাম্প্রতিক রোগীর তালিকা
          </h2>
          {/* Search Bar */}
          <LocationSearch page={page} setLoading={setLoading} setPatients={setPatients} setTotalPage={setTotalPage} />
        </div>
        {/* Patient Card Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 relative">
          {loading && (
            <div className="absolute inset-0 bg-white bg-opacity-50 flex justify-center items-center z-10">
              <Spinner/>
            </div>
          )}
          {patients.map((patient, index) => (
            <PatientCard key={patient._id + index} patient={patient} />
          ))}
        </div>
        
        <div className="pt-8">
              <ReactPaginate
                className="flex justify-center items-center gap-4 flex-wrap"
                pageLinkClassName={
                  "px-4 py-2 rounded-md shadow outline-none bg-primary text-white text-sm hover:bg-green-700 hover:text-white"
                }
                pageCount={totalPages}
                breakLabel="..."
                nextLabel=">"
                previousLinkClassName="px-4 py-2 rounded-md outline-none hover:bg-green-700 hover:text-white"
                nextLinkClassName="px-4 py-2 rounded-md outline-none hover:bg-green-700 hover:text-white"
                pageRangeDisplayed={5}
                previousLabel="<"
                renderOnZeroPageCount={null}
                activeLinkClassName="!bg-green-700 !text-white"
                initialPage={page}
                onPageChange={onPageChange}
              />
            </div>
      </section>
    </div>
  );
};

export default Home;
