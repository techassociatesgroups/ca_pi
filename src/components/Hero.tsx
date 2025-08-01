import {
  ChevronLeft,
  ChevronRight,
  Download,
  FileText,
  Users,
  Award,
} from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "TDS Filing & Form 16 Issuance",
      subtitle: "Simplify with CA PI",
      description:
        "Complete TDS filing and Form 16 generation service with expert guidance and timely compliance.",
    },
    {
      title: "Business Incorporation Services",
      subtitle: "Start your company effortlessly",
      description:
        "We handle all legal formalities and documentation to register your business swiftly.",
    },
    {
      title: "Trademark Registration",
      subtitle: "Protect your brand identity",
      description:
        "Get expert help in registering your trademark to secure your intellectual property.",
    },
    {
      title: "GST Filing and Returns",
      subtitle: "Stay tax compliant always",
      description:
        "We ensure timely GST filing with complete accuracy for your business.",
    },
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Hero Carousel */}
        <div className="relative bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg mx-4 my-6 overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between p-4 md:p-8 lg:p-12 gap-6 lg:gap-0">
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-[#0033cc]/20 hover:bg-[#0033cc]/40 text-white p-2 rounded-full transition-colors z-10"
            >
              <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
            </button>

            {/* Content */}
            <div className="flex-1 order-2 lg:order-1">
              <div className="bg-[#0033cc]/90 text-white p-4 md:p-6 lg:p-8 rounded-lg max-w-full lg:max-w-md transition-all duration-300">
                <h1 className="text-lg md:text-xl lg:text-3xl font-bold mb-2">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-base md:text-lg text-blue-100 mb-4">
                  {slides[currentSlide].subtitle}
                </p>
                <p className="text-xs md:text-sm text-blue-200">
                  {slides[currentSlide].description}
                </p>
              </div>
            </div>

            {/* Right side visual design */}
            <div className="flex-1 flex justify-center lg:justify-end items-center order-1 lg:order-2">
              <div className="relative w-full max-w-sm lg:max-w-md">
                {/* Modern card design instead of image */}
                <div className="bg-white rounded-xl shadow-2xl p-4 md:p-6 lg:p-8 w-full">
                  <div className="text-center mb-4 md:mb-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-[#0033cc] to-blue-600 rounded-full mx-auto mb-3 md:mb-4 flex items-center justify-center">
                      <FileText className="h-6 w-6 md:h-8 md:w-8 text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">
                      Professional Services
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm">
                      Trusted by businesses nationwide
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-2 md:gap-4 mb-4 md:mb-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1 md:mb-2">
                        <Users className="h-4 w-4 md:h-5 md:w-5 text-[#0033cc] mr-1" />
                        <span className="text-base md:text-lg font-bold text-gray-900">
                          10L+
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">Happy Clients</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1 md:mb-2">
                        <Award className="h-4 w-4 md:h-5 md:w-5 text-[#0033cc] mr-1" />
                        <span className="text-base md:text-lg font-bold text-gray-900">
                          99%
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">Success Rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-[#0033cc]/20 hover:bg-[#0033cc]/40 text-white p-2 rounded-full transition-colors z-10"
            >
              <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
            </button>
          </div>
        </div>

        {/* Service Categories */}
        <div className="px-4 pb-8">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Explore our digital services stack
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-4xl mx-auto px-2">
              Grow your business and remain compliant by partnering with
              CA PI for a range of high quality, business services from
              incorporation to payroll delivered through a seamless online
              platform.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-3">
                <div className="w-6 h-6 md:w-8 md:h-8 z-10 rounded">
                  <img src="assets/incorporation_logo.png" alt="Incorporation" className="w-full h-full object-cover rounded" />
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 text-xs md:text-sm">Incorporation</h3>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-3">
                <div className="w-6 h-6 md:w-8 md:h-8  rounded">
                  <img src="assets/trademark.png" alt="Trademark" className="w-full h-full object-cover rounded" />
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 text-xs md:text-sm">Trademark</h3>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-3">
                <div className="w-6 h-6 md:w-8 md:h-8  rounded">
                  <img src="assets/accounting.png" alt="Accounting" className="w-full h-full object-cover rounded" />
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 text-xs md:text-sm">Accounting</h3>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-3">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded">
                  <img src="assets/tax.png" alt="Income Tax" className="w-full h-full object-cover rounded" />
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 text-xs md:text-sm">Income Tax</h3>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-3">
                <div className="w-6 h-6 md:w-8 md:h-8 ">
                  <img src="assets/gst.png" alt="GST Services" className="w-full h-full object-cover rounded" />
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 text-xs md:text-sm">GST Services</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
