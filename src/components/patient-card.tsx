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
  };
}

const PatientCard: React.FC<PatientCardProps> = ({ patient }) => {
  return (
    <div className="relative bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
      <div className="relative w-full h-56">
        <Image
          src={patient.imageUrl}
          alt={patient.name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50">
        <h3 className="font-bold text-xl text-gray-800 mb-2">{patient.name}</h3>
        <p className="text-gray-700 mb-1">
          <span className="font-medium text-gray-900">রোগীর পেশা: </span>
          {patient.profession}
        </p>
        <p className="text-gray-700 mb-1">
          <span className="font-medium text-gray-900">প্রয়োজনীয় ফান্ড: </span>
          {patient.total_fund_needed}৳
        </p>
        <p className="text-gray-700 mb-4">
          <span className="font-medium text-gray-900">সংগ্রহিত ফান্ড: </span>
          {patient.total_fund_collected}৳
        </p>
        <Link
          href={`/patients/${patient._id}`}
          className="inline-block text-center w-full bg-[#0F1B1A] text-white font-bold py-2 px-3 rounded-md text-sm hover:bg-opacity-90 transition duration-300 ease-in-out transform hover:-translate-y-1"
        >
          বিস্তারিত দেখুন
        </Link>
      </div>
    </div>
  );
};

export default PatientCard;
