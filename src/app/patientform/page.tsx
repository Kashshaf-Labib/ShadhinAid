export default function PatientForm() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-indigo-100 p-8 flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-8 text-center text-blue-900">
          Submit Patient Details
        </h1>
        <form>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              নাম
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="নাম লিখুন"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              মেডিকেল আইডি
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="মেডিকেল আইডি লিখুন"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              রোগীর পেশা
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="পেশা লিখুন"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              রোগীর নাম্বার
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="নাম্বার লিখুন"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              ঘটনার বিবরণী
            </label>
            <textarea
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="বিস্তারিত লিখুন"
            ></textarea>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              অভিভাবকের নাম
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="নাম লিখুন"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              অভিভাবকের পেশা
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="পেশা লিখুন"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              অভিভাবকের নাম্বার
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="নাম্বার লিখুন"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              হাসপাতালের নাম (যদি রোগী এখনও ভর্তি থাকে)
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="হাসপাতালের নাম লিখুন"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
