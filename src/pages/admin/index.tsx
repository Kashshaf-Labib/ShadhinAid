import { MapProvider } from "@/components/MapProvider";
import PatientRow from "@/components/PatientRow";
import Spinner from "@/components/Spinner";
import { useUser, userUserLoaded } from "@/hooks/user";
import { IPatient } from "@/utils/models/Patient";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Patient extends IPatient {
  _id: string;
}

const AdminDashboard = () => {
  const [user, setUser] = useUser();
  const [userLoaded, setUserLoaded] = userUserLoaded();
  const router = useRouter();
  const [patients, setPatients] = useState([] as Patient[]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    fetch("/api/user", options)
      .then((response) => response.json())
      .then((response) => {
        if (response.error) throw new Error(response.error);
        setUser(response.user);
      })
      .catch((err) => console.error(err))
      .finally(() => setUserLoaded(true));
  }, []);

  useEffect(() => {
    if (!userLoaded) return;
    if (!user) {
      router.push("/admin/login");
      return;
    }

    fetch("/api/patients")
      .then((response) => response.json())
      .then((response) => {
        setPatients(response.contents);
      })
      .catch((err) => console.error(err));
  }, [user, userLoaded]);

  if (!userLoaded) return <Spinner />;

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50 pt-16 pb-8">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
          Admin Dashboard
        </h1>

        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Patients</h2>
            <MapProvider>
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      No.
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      Timestamp
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ">
                      Approval
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ">
                      Fund Needed
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ">
                      Phone
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ">
                      Medical ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ">
                      Profession
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ">
                      Description
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ">
                      Guardian's Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ">
                      Guardian's Profession
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ">
                      Guardian's Phone
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ">
                      Hospital
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ">
                      Location's Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      Location's Coordinates
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {patients.map((patient, index) => (
                    <PatientRow
                      patient={patient}
                      index={index}
                      key={patient._id}
                    />
                  ))}
                </tbody>
              </table>
            </MapProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;


