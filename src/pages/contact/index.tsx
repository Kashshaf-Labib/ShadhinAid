const ContactPage = () => {
  return (
    <section className='bg-gradient-to-b from-blue-50 to-white' id='contact'>
      <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24'>
        <div className='mb-8'>
          <div className='mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12'>
            <p className='text-base font-semibold uppercase tracking-wide text-blue-600'>
              Contact Us
            </p>
            <h2 className='font-heading mb-4 font-bold tracking-tight text-gray-900 text-4xl sm:text-5xl'>
              Get in Touch
            </h2>
            <p className='mx-auto mt-4 max-w-3xl text-xl text-gray-600'>
              We&apos;re here to help and answer any question you might have
            </p>
          </div>
        </div>
        <div className='flex items-stretch justify-center'>
          <div className='grid md:grid-cols-2 gap-8'>
            <div className='h-full pr-6'>
              <p className='mt-3 mb-12 text-lg text-gray-600'>
                Feel free to reach out to us using the contact information below
                or by filling out the form. We look forward to hearing from you!
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
                      Our Address
                    </h3>
                    <p className='text-gray-600'>
                      1230 Maecenas Street Donec Road
                    </p>
                    <p className='text-gray-600'>New York, NY 10001</p>
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
                      Contact
                    </h3>
                    <p className='text-gray-600'>Mobile: +1 (123) 456-7890</p>
                    <p className='text-gray-600'>Mail: contact@example.com</p>
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
                      Working hours
                    </h3>
                    <p className='text-gray-600'>
                      Monday - Friday: 08:00 - 17:00
                    </p>
                    <p className='text-gray-600'>
                      Saturday & Sunday: 08:00 - 12:00
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
                Ready to Get Started?
              </h2>
              <form id='contactForm'>
                <div className='space-y-6'>
                  <div>
                    <label
                      htmlFor='name'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Your Name
                    </label>
                    <input
                      type='text'
                      id='name'
                      autoComplete='given-name'
                      placeholder='John Doe'
                      className='p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500'
                      name='name'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Email Address
                    </label>
                    <input
                      type='email'
                      id='email'
                      autoComplete='email'
                      placeholder='you@example.com'
                      className='p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500'
                      name='email'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='message'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Your Message
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      rows={4}
                      placeholder='How can we help you?'
                      className='p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500'
                    ></textarea>
                  </div>
                </div>
                <div className='mt-8'>
                  <button
                    type='submit'
                    className='w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1'
                  >
                    Send Message
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
