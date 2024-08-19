import Image from "next/image"

interface PatientCardProps {
  patient: any
}

const PatientCard: React.FC<PatientCardProps> = ({ patient }) => {
  return (
    <div className='bg-white border rounded-lg shadow-lg overflow-hidden'>
      <div className='relative w-full' style={{ aspectRatio: "16/9" }}>
        <Image
          src={patient.imageUrl}
          alt={patient.name}
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className='p-6'>
        <h3 className='font-bold text-xl mb-2'>{patient.name}</h3>
        <p className='text-gray-600'>বয়স: {patient.age}</p>
        <p className='text-gray-600'>রোগ: {patient.condition}</p>
        <p className='text-gray-600'>শেষ পরীক্ষা: {patient.lastCheckup}</p>
        <div className='mt-4'>
          <button className='bg-primary hover:brightness-200 text-white font-bold py-2 px-4 rounded-full text-sm transition duration-300 ease-in-out transform hover:-translate-y-1'>
            বিস্তারিত দেখুন
          </button>
        </div>
      </div>
    </div>
  )
}

export default PatientCard
