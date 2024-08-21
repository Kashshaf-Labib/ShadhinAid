import { useState } from "react";
import { IPatient } from "@/utils/models/Patient";

interface PatientRowProps {
  patient: IPatient & { _id: string };
  index: number;
}

const PatientRow: React.FC<PatientRowProps> = ({ patient, index }) => {
  const [approvalStatus, setApprovalStatus] = useState(patient.approval);

  const handleApproval = async (status: string) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`/api/patients/${patient._id}/approval`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ approval: status }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to update approval status");
      }

      setApprovalStatus(status);
    } catch (error) {
      console.error("Error updating approval status:", error);
    }
  };

  return (
    <tr>
      <td className="px-6 py-3 border">{index + 1}</td>
      <td className="px-6 py-3 border">
        {new Date(patient.created_at).toLocaleString()}
      </td>
      <td className="px-6 py-3 border">{patient.name}</td>
      <td className="px-6 py-3 border text-center">{approvalStatus}</td>
      <td className="px-6 py-3 border text-center">
        {patient.total_fund_needed}৳
      </td>
      <td className="px-6 py-3 border text-center">{patient.phone}</td>
      <td className="px-6 py-3 border text-center">{patient.medical_id}</td>
      <td className="px-6 py-3 border text-center">{patient.profession}</td>
      <td className="px-6 py-3 border text-center">{patient.description}</td>
      <td className="px-6 py-3 border text-center">{patient.guardian_name}</td>
      <td className="px-6 py-3 border text-center">
        {patient.guardian_profession}
      </td>
      <td className="px-6 py-3 border text-center">{patient.guardian_phone}</td>
      <td className="px-6 py-3 border text-center">{patient.hospital_name}</td>
      <td className="px-6 py-3 border text-center">{patient.location_name}</td>
      <td className="px-6 py-3 border text-center">
        {patient.location.coordinates.join(", ")}
      </td>
      <td className="px-6 py-3 border text-center">
        <button
          className={`mr-2 px-4 py-2 rounded ${
            approvalStatus === "approved" ? "bg-green-500" : "bg-gray-500"
          } text-white`}
          onClick={() => handleApproval("approved")}
          disabled={approvalStatus === "approved"}
        >
          Accept
        </button>
        <button
          className={`px-4 py-2 rounded ${
            approvalStatus === "pending" ? "bg-red-500" : "bg-gray-500"
          } text-white`}
          onClick={() => handleApproval("pending")}
          disabled={approvalStatus === "pending"}
        >
          Pending
        </button>
      </td>
    </tr>
  );
};

export default PatientRow;
