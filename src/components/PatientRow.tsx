import { Address, formatDateToDDMMYYYYHHMM } from "@/lib/utils";
import { IPatient } from "@/utils/models/Patient";
import { ChangeEvent, MouseEvent, useRef, useState } from "react";
import AutoCompleteInput from "./AutoCompleteInput";
import toast from "react-hot-toast";
import { TfiNewWindow } from "react-icons/tfi";

interface Patient extends IPatient {
  _id: string;
}

export default function PatientRow({
  patient,
  index,
}: {
  index: number;
  patient: Patient;
}) {
  const [isModified, setIsModified] = useState(false);
  const [patientData, setPatientData] = useState(patient);
  const [address, setAddress] = useState({
    name: patient.location_name,
    location: {
      lat: patient.location.coordinates[1],
      lng: patient.location.coordinates[0],
    },
  } as Address);

  const onAddressChange = (address: Address) => {
    setAddress(address);
    setIsModified(true);
  };

  const onChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const name = target.name;
    const value = target.value;
    setPatientData((prev) => ({ ...prev, [name]: value }));

    setIsModified(true);
  };

  const onSave = (e: MouseEvent) => {
    console.log(patientData);
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(patientData),
    };
    (e.target as HTMLButtonElement).disabled = true;
    (e.target as HTMLButtonElement).textContent = "...";
    fetch(`/api/patients/${patient._id}`, options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.error) {
          return toast.error("Failed to upload patient details");
        }
        toast.success("Patient details updated successfully");
        })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to update patient details");
      })
      .finally(() => {
        setIsModified(false);
        (e.target as HTMLButtonElement).disabled = false;
        (e.target as HTMLButtonElement).textContent = "✅️";
      });
  };
  return (
    <>
      <tr className="table-row text-sm text-gray-700 even:bg-green-100">
        <td className="px-6 py-4 border sticky left-0 bg-gray-100">
          <div className="flex gap-1 items-center justify-between">
            <span>{index + 1}</span>
            <button
              onClick={onSave}
              className={`${!isModified ? "-z-10 scale-0" : ""}`}
            >
              ✅️
            </button>
          </div>
        </td>
        <td className="px-6 py-4 border">
          {formatDateToDDMMYYYYHHMM(patient.created_at)}
        </td>
        <td className="px-6 py-4 border">
          <input
            onChange={onChange}
            name="name"
            className="outline-none border-none block bg-transparent"
            defaultValue={patient.name}
          />
        </td>
        <td className="px-6 py-4 border text-center w-full">
          <select
            name="approval"
            className="outline-none border-none bg-transparent text-xs"
            defaultValue={patient.approval}
            onChange={onChange}
          >
            <option value="pending">Pending ❓</option>
            <option value="approved">Approve ✅</option>
          </select>
        </td>
        <td className="px-6 py-4 border">
          <input
            onChange={onChange}
            name="total_fund_needed"
            className="outline-none border-none block bg-transparent"
            defaultValue={patient.total_fund_needed}
          />
        </td>
        <td className="px-6 py-4 border text-center">{patient.total_fund_collected}</td>
        <td className="px-6 py-4 border text-center w-full">
          <input
            onChange={onChange}
            name="phone"
            className="outline-none border-none block bg-transparent"
            defaultValue={patient.phone}
          />
        </td>
        <td className="px-6 py-4 border text-center">
          <input
            onChange={onChange}
            name="medical_id"
            className="outline-none border-none block bg-transparent"
            defaultValue={patient.medical_id}
          />
        </td>
        <td className="px-6 py-4 border text-center">
          <input
            onChange={onChange}
            name="profession"
            className="outline-none border-none block text-center bg-transparent"
            defaultValue={patient.profession}
          />
        </td>
        <td className="px-3 pt-4 border w-full overflow-hidden">
          <textarea
            onChange={onChange}
            name="description"
            className=" w-full outline-none border-none h-full max-h-48 min-h-14 min-w-72 bg-transparent"
            defaultValue={patient.description}
          />
        </td>
        <td className="px-6 py-4 border">
          <input
            onChange={onChange}
            name="guardian_name"
            className="outline-none border-none block text-center bg-transparent"
            defaultValue={patient.guardian_name}
          />
        </td>
        <td className="px-6 py-4 border">
          <input
            onChange={onChange}
            name="guardian_profession"
            className="outline-none border-none block text-center bg-transparent"
            defaultValue={patient.guardian_profession}
          />
        </td>
        <td className="px-6 py-4 border">
          <input
            onChange={onChange}
            name="guardian_phone"
            className="outline-none border-none block bg-transparent"
            defaultValue={patient.guardian_phone}
          />
        </td>
        <td className="px-6 py-4 border">
          <input
            onChange={onChange}
            name="hospital_name"
            className="outline-none border-none block text-center bg-transparent"
            defaultValue={patient.hospital_name}
          />
        </td>
        <td className="px-6 py-4 border overflow-x-hidden text-ellipsis">
          <AutoCompleteInput
            as={"row"}
            value={patient.location_name}
            address={address}
            setAddress={onAddressChange}
          />
        </td>

        <td className="px-6 py-4 border text-xs">
          Lat:{address.location.lat}, Long:{address.location.lng}
        </td>
        <td className="px-6 py-4 border text-xs mx-auto text-center">
          <a href={patient.imageUrl} target="_blank" className="block w-full mx-auto"><TfiNewWindow size={22} /></a>
        </td>
      </tr>
    </>
  );
}