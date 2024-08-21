import { Patient } from "@/types";
import { useState } from "react";
import { MapProvider } from "./MapProvider";
import AutoCompleteInput from "./AutoCompleteInput";
import { Address } from "@/lib/utils";
import { BiSearch } from "react-icons/bi";
import toast from "react-hot-toast";

interface LocationSearchProps {
  page: number;
  setTotalPage: (totalPage: number) => void;
  setLoading: (loading: boolean) => void;
  setPatients: (patients: Patient[]) => void;
}

function LocationSearch({
  page,
  setTotalPage,
  setLoading,
  setPatients,
}: LocationSearchProps) {
  const [address, setAddress] = useState({} as Address);

  function onSearch() {
    if (!address.location || !address.location.lat || !address.location.lng)
      return;
    console.log(address);
    setLoading(true);
    fetch(
      `/api/patients/location?page=${page + 1}&lat=${
        address.location.lat
      }&lng=${address.location.lng}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.error("Failed to fetch patient data");
          console.error("Failed to fetch patient data:", data.error);
          return;
        }
        console.log(data);
        setPatients(data.contents);
        setTotalPage(data.totalPages);
      })
      .catch((error) => {
        console.error("Failed to fetch patient data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const onSetAddress = (address: Address) => {
    console.log(address);
    setAddress(address);
  };

  return (
    <MapProvider>
      <div className="mb-6 max-w-lg mx-auto flex gap-4 justify-center items-center">
        <AutoCompleteInput
          as="row"
          className="mt-1 block w-full px-3 py-2 border bg-slate-100 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="এলাকা, শহর, জায়গার নাম সার্চ করে সিলেক্ট করুন"
          setAddress={onSetAddress}
          address={address}
        />
        <button
          onClick={onSearch}
          className="bg-green-600 text-white py-2 px-2 rounded"
        >
          <BiSearch size={20} />
        </button>
      </div>
    </MapProvider>
  );
}

export default LocationSearch;
