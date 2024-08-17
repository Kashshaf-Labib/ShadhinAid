const ContactPage = () => {
  return (
    <section className='bg-gradient-to-b from-blue-50 to-white' id='contact'>
      <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24'>
        <div className='mb-8'>
          <div className='mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12'>
            <p className='text-base font-semibold uppercase tracking-wide text-blue-600'>
              যোগাযোগ করুন
            </p>
            <h2 className='font-heading mb-4 font-bold tracking-tight text-gray-900 text-4xl sm:text-5xl'>
              আমাদের সাথে যোগাযোগ করুন
            </h2>
            <p className='mx-auto mt-4 max-w-3xl text-xl text-gray-600'>
              আমরা আপনার যেকোনো প্রশ্নের উত্তর দিতে এখানে আছি
            </p>
          </div>
        </div>
        <div className='flex items-stretch justify-center'>
          <div className='grid md:grid-cols-2 gap-8'>
            <div className='h-full pr-6'>
              <p className='mt-3 mb-12 text-lg text-gray-600'>
                নিচের যোগাযোগের তথ্য ব্যবহার করে বা ফর্মটি পূরণ করে আমাদের সাথে
                যোগাযোগ করতে দ্বিধা করবেন না। আপনার থেকে শোনার জন্য আমরা অপেক্ষা
                করছি!
              </p>
              <ul className='space-y-8'>
                <li className='flex items-start'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='h-6 w-6'
                    >
                      <path d='M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0'></path>
                      <path d='M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z'></path>
                    </svg>
                  </div>
                  <div className='ml-4'>
                    <h3 className='mb-2 text-lg font-medium leading-6 text-gray-900'>
                      আমাদের ঠিকানা
                    </h3>
                    <p className='text-gray-600'>
                      ১২৩০ ম্যাসেনাস স্ট্রিট ডোনেক রোড
                    </p>
                    <p className='text-gray-600'>নিউ ইয়র্ক, এনওয়াই ১০০০১</p>
                  </div>
                </li>
                <li className='flex items-start'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='h-6 w-6'
                    >
                      <path d='M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2'></path>
                      <path d='M15 7a2 2 0 0 1 2 2'></path>
                      <path d='M15 3a6 6 0 0 1 6 6'></path>
                    </svg>
                  </div>
                  <div className='ml-4'>
                    <h3 className='mb-2 text-lg font-medium leading-6 text-gray-900'>
                      যোগাযোগ
                    </h3>
                    <p className='text-gray-600'>মোবাইল: +১ (১২৩) ৪৫৬-৭৮৯০</p>
                    <p className='text-gray-600'>মেইল: contact@example.com</p>
                  </div>
                </li>
                <li className='flex items-start'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='h-6 w-6'
                    >
                      <path d='M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0'></path>
                      <path d='M12 7v5l3 3'></path>
                    </svg>
                  </div>
                  <div className='ml-4'>
                    <h3 className='mb-2 text-lg font-medium leading-6 text-gray-900'>
                      কাজের সময়
                    </h3>
                    <p className='text-gray-600'>
                      সোমবার - শুক্রবার: ০৮:০০ - ১৭:০০
                    </p>
                    <p className='text-gray-600'>
                      শনিবার ও রবিবার: ০৮:০০ - ১২:০০
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div
              className='card h-fit max-w-6xl p-8 bg-white rounded-lg shadow-lg'
              id='form'
            >
              <h2 className='mb-6 text-3xl font-bold text-gray-900'>
                শুরু করতে প্রস্তুত?
              </h2>
              <form id='contactForm'>
                <div className='space-y-6'>
                  <div>
                    <label
                      htmlFor='name'
                      className='block text-sm font-medium text-gray-700'
                    >
                      আপনার নাম
                    </label>
                    <input
                      type='text'
                      id='name'
                      autoComplete='given-name'
                      placeholder='জন ডো'
                      className='p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500'
                      name='name'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-gray-700'
                    >
                      ইমেইল ঠিকানা
                    </label>
                    <input
                      type='email'
                      id='email'
                      autoComplete='email'
                      placeholder='আপনি@উদাহরণ.কম'
                      className='p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500'
                      name='email'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='message'
                      className='block text-sm font-medium text-gray-700'
                    >
                      আপনার বার্তা
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      rows={4}
                      placeholder='আমরা কীভাবে আপনাকে সাহায্য করতে পারি?'
                      className='p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500'
                    ></textarea>
                  </div>
                </div>
                <div className='mt-8'>
                  <button
                    type='submit'
                    className='w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1'
                  >
                    বার্তা পাঠান
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
