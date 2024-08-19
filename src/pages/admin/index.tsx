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
        console.log(response);
        setPatients(response.contents);
      })
      .catch((err) => console.error(err));
  }, [user, userLoaded]);

  if (!userLoaded) return <Spinner />;

  return (
    <div className="min-h-screen pt-24 bg-gray-100">
      <div className="bg-white py-8 px-4 rounded shadow-md w-full max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>

        <div className="pt-8">
          <h2 className="text-2xl pb-4 font-semibold">Patients</h2>
          <MapProvider>
          <div className="relative overflow-x-auto w-full">
            <table className="min-w-[100vw] w-full text-xs">
              <thead className="text-white uppercase bg-primary">
                <tr>
                  <th scope="col" className="px-6 py-3 border">
                    No.
                  </th>
                  <th scope="col" className="px-6 py-3 border">
                    Timestamp
                  </th>
                  <th scope="col" className="px-6 py-3 border min-w-40">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 border text-center">
                    Approval
                  </th>
                  <th scope="col" className="px-6 py-3 border text-center text-wrap">
                    Fund Collected
                  </th>
                  <th scope="col" className="px-6 py-3 border text-center text-nowrap">
                    Phone
                  </th>
                  <th scope="col" className="px-6 py-3 border text-center text-nowrap">
                    Medical ID
                  </th>
                  <th scope="col" className="px-6 py-3 border text-center text-nowrap">
                    Profession
                  </th>
                  <th scope="col" className="px-6 py-3 border text-center text-nowrap">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-3 border text-center text-nowrap">
                    Guardian's Name
                  </th>
                  <th scope="col" className="px-6 py-3 border text-center text-nowrap">
                    Guardian's Profession
                  </th>
                  <th scope="col" className="px-6 py-3 border text-center text-nowrap">
                    Guardian's Phone
                  </th>
                  <th scope="col" className="px-6 py-3 border text-center text-nowrap">
                    Hospital
                  </th>
                  <th scope="col" className="px-6 py-3 border text-center text-nowrap">
                    Location's Name
                  </th>
                  <th scope="col" className="px-6 py-3 border text-nowrap">
                    Location's Coordinates
                  </th>
                </tr>
              </thead>
              <tbody>
                {patients.map((patient, index) => (  
                    <PatientRow patient={patient} index={index} key={patient._id + index}/>
                ))}
              </tbody>
            </table>
          </div>
          </MapProvider>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
