import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import { useRouter } from "next/router";
import { IPatient } from "@/utils/models/Patient";
import Link from "next/link";
import PatientCard from "@/components/patient-card";
import ReactPaginate from "react-paginate";
import { Patient } from "@/types";
import LocationSearch from "@/components/LocationSearch";
import Spinner from "@/components/Spinner";

export default function PatientDetails() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch(`/api/patients?page=${page}`);
        const data = await response.json();
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
    <>
      <Head>
        <title>Patient - Shadhin Aid</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-200">
        <div className=" max-w-7xl mx-auto p-4 pt-20">
          <h1
            className="text-4xl font-bold mb-8"
            style={{ color: "rgb(17, 24, 39)" }}
          >
            রোগীর বিবরণ
          </h1>
          <LocationSearch
            page={page}
            setLoading={setLoading}
            setPatients={setPatients}
            setTotalPage={setTotalPage}
          />
          <div className="grid md:grid-cols-3 gap-8 relative">
            {loading && (
              <div className="absolute inset-0 bg-white bg-opacity-50 flex justify-center items-center z-10">
                <Spinner />
              </div>
            )}
            {
              patients.length === 0 && !loading && (
                <div className="col-span-3 text-center text-gray-500">
                  <p>কোনো রোগীর তথ্য পাওয়া যায়নি</p>
                </div>
              )
            }
            {patients.map((patient) => (
              <PatientCard key={patient._id} patient={patient} />
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
        </div>
      </div>
    </>
  );
}
