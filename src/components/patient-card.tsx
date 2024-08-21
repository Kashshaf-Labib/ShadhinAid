import Image from "next/image";
import Link from "next/link";

interface PatientCardProps {
  patient: {
    _id: string;
    name: string;
    profession: string;
    total_fund_needed?: number;
    total_fund_collected?: number;
    imageUrl: string;
    approval: string;
  };
}

const PatientCard: React.FC<PatientCardProps> = ({ patient }) => {
  if (patient.approval !== "approved") {
    return null; // Don't render if not approved
  }

  return (
    <div className="relative bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition transform hover:scale-[1.01] hover:shadow-2xl duration-300 ease-in-out">
      <div className="relative w-full h-56">
        <Image
          src={patient.imageUrl}
          alt={patient.name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-6 bg-gradient-to-br from-blue-50 to-white">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">
          {patient.name}
        </h3>
        <p className="text-sm text-gray-600">{patient.profession}</p>
        <p className="text-sm text-gray-600">
          প্রয়োজনীয় ফান্ড: {patient.total_fund_needed}৳
        </p>
        <p className="text-sm text-gray-600">
          সংগ্রহিত ফান্ড: {patient.total_fund_collected}৳
        </p>
        <Link href={`/patients/${patient._id}`}>
          <span className="mt-4 inline-block px-4 py-2 bg-[#0F1B1A] text-white text-sm font-medium rounded cursor-pointer">
            বিস্তারিত দেখুন
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PatientCard;
