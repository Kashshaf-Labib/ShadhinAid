import type { NextPage } from "next"
import { Patient } from "@/types/index"
import PatientCard from "@/components/patient-card"
import Image from "next/image"
import Link from "next/link"

const Home: NextPage = () => {
  const patients: any[] = [
    {
      _id: '1',
      name: "জন ডো",
      age: 45,
      condition: "উচ্চ রক্তচাপ",
      lastCheckup: "১০/০৮/২০২৪",
      imageUrl: "https://via.assets.so/img.jpg?w=400&h=400&tc=black&bg=#cecece",
    },
    {
      _id: '2',
      name: "জেন স্মিথ",
      age: 32,
      condition: "ডায়াবেটিস",
      lastCheckup: "১৫/০৮/২০২৪",
      imageUrl: "https://via.assets.so/img.jpg?w=400&h=400&tc=black&bg=#cecece",
    },
  ]

  return (
    <div className='bg-[#c5ffc4]'>
      {/* Hero Section */}
      <section className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-24'>
        <div className='flex flex-col md:flex-row items-center justify-between'>
          <div className='w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0'>
            <h1 className='font-heading mb-4 font-bold tracking-tight text-gray-900 text-4xl sm:text-5xl'>
              স্বাস্থ্যসেবা সহজ করুন
            </h1>
            <p className='mt-4 max-w-3xl text-lg sm:text-xl text-gray-700 mx-auto md:mx-0'>
              আপনার রোগীদের তথ্য সহজে ব্যবস্থাপনা করুন এবং সর্বোত্তম সেবা প্রদান
              করুন
            </p>
            <div className='mt-8'>
              <Link href='/patientform'>
                <button className='bg-[#FF6B6B] hover:bg-[#FF4F4F] text-white font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1'>
                  রোগীর তথ্য জমা দিন
                </button>
              </Link>
            </div>
          </div>
          <div className='w-full md:w-1/2 mt-8 md:mt-0'>
            <Image
              height={400}
              width={400}
              src='/donate.jpg'
              alt='Healthcare professionals'
              className='rounded-lg shadow-lg mx-auto'
            />
          </div>
        </div>
      </section>

      {/* Patient List Section */}
      <section className='bg-white mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 rounded-t-3xl'>
        <div className='mb-8 text-center'>
          <h2 className='font-heading mb-4 font-bold tracking-tight text-gray-900 text-2xl sm:text-3xl'>
            সাম্প্রতিক রোগীর তালিকা
          </h2>
          {/* Search Bar */}
          <div className='mb-6 max-w-md mx-auto'>
            <input
              type='text'
              placeholder='রোগী খুঁজুন...'
              className='p-2 w-full rounded-md border border-gray-300 shadow-sm focus:border-primary focus:ring-primary'
            />
          </div>
        </div>
        {/* Patient Card Grid */}
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {patients.map((patient) => (
            <PatientCard key={patient._id} patient={patient} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
