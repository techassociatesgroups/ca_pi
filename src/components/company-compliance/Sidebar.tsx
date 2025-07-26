
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="bg-gray-50 p-6 rounded-lg shadow-sm sticky top-8">
      <div className="text-center">
        <Phone className="mx-auto h-12 w-12 text-gray-400 mb-3" />
        <h3 className="text-xl font-bold text-center">Reach us now</h3>
        <p className="text-center text-sm text-gray-600 mt-2 mb-6">
          Fill out the form below and we'll contact you immediately.
        </p>
      </div>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="name"
            placeholder="Enter your name"
            className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            placeholder="Enter your email"
            className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
          <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
              +91
            </span>
            <input
              type="tel"
              name="phone"
              id="phone"
              autoComplete="tel"
              placeholder="Enter your phone number"
              className="block w-full rounded-md border-0 py-2 rounded-l-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm"
            />
          </div>
        </div>
        <div className="flex items-center">
          <input
            id="gst-credit"
            name="gst-credit"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600"
          />
          <label htmlFor="gst-credit" className="ml-2 block text-sm text-gray-900">Enter GSTIN to get 18% GST Credit</label>
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Contact Us
        </button>
      </form>
    </aside>
  );
};

export default Sidebar;
