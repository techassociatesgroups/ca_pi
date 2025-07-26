import { Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Image Placeholder */}
        <div className="lg:col-span-4">
          <div
            className="bg-blue-600 rounded-lg text-white p-8 flex flex-col items-center justify-center h-40 bg-contain bg-center"
            style={{
              backgroundImage:
                "url('/assets/patent-registration.jpg')",
            }}
          ></div>
          <div className="mt-6">
            <h3 className="font-semibold text-lg">Documents Required</h3>
            <ul className="mt-2 space-y-2 text-gray-600">
              <li className="p-3 border rounded-md">Patent Specification</li>
              <li className="p-3 border rounded-md">Abstract</li>
              <li className="p-3 border rounded-md">Claims</li>
            </ul>
            <button className="text-blue-600 font-semibold mt-2">
              Load More
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Patent Registration: Protect Your Innovations
          </h1>
          <div className="flex items-center mt-4">
            <div className="flex text-yellow-400">
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
            </div>
            <span className="ml-2 text-gray-600">(150+)</span>
          </div>
          <p className="mt-4 text-gray-600">
            Patents are pivotal in protecting the intellectual property rights of
            fresh innovations, be they products, services, or processes. In India,
            to ensure these rights are recognized and upheld, one must adhere to
            the Indian Patent Act of 1970 for patent registration.
          </p>
          <p className="mt-2 text-gray-600">
            At CA PI, we understand the intricacies of the landscape of patent
            filing in India. With our experts and streamlined processes, we guide
            you step-by-step, ensuring your invention stands out and receives the
            protection for your Patent India it rightfully deserves. Ready to
            safeguard your innovation? Let CA PI lead the way to a hassle-free
            patent registration online process.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
