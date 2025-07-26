import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Star, ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <Card className="p-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4">
          <div className="rounded-lg overflow-hidden">
            <img
              src="assets/fssai-registration.jpg"
              alt="FSSAI Registration"
              className="w-full h-auto"
            />
          </div>
          <div className="mt-6">
            <ul className="mt-2 space-y-2 text-gray-600">
              <li className="p-3 border rounded-md">PAN Card</li>
              <li className="p-3 border rounded-md">Aadhaar Card</li>
              <li className="p-3 border rounded-md">Electricity Bill</li>
            </ul>
            <button className="text-blue-600 font-semibold mt-2">
              Load More
            </button>
          </div>
        </div>

        <div className="lg:col-span-8">
          <h1 className="text-3xl font-bold">FSSAI Registration</h1>
          <div className="flex items-center mt-2">
            <div className="flex text-yellow-400">
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
            </div>
            <span className="ml-2 text-blue-600 font-semibold">(1627)</span>
          </div>
          <p className="mt-4 text-gray-600">
            FSSAI registration application preparation and filing for small food
            businesses, petty retailers, juice shops and hawkers by FSSAI
            consultant.
          </p>
          <div className="mt-6">
            <Select defaultValue="1-year">
              <SelectTrigger className="w-full md:w-1/2">
                <SelectValue placeholder="Select Duration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-year">
                  FSSAI Registration - 1 Year
                </SelectItem>
                <SelectItem value="3-years">
                  FSSAI Registration - 3 Years
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* FSSAI Registration - 1 Year Card */}
            <div className="border border-green-300 rounded-lg bg-green-50">
              <div className="bg-green-50 text-green-700 text-xs font-bold inline-block px-3 py-1 rounded-full mb-4 mt-4 ml-4">2 Exclusive Offers</div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-green-900">FSSAI Registration - 1 Year</h3>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">&#10003;</span> Application Preparation</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">&#10003;</span> Application Filing</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">&#10003;</span> 1 Year Registration</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">&#10003;</span> LEDGERS Platform</li>
                </ul>
                <button
                  className="w-full mt-2 flex items-center justify-center gap-2 bg-purple-100 text-purple-900 font-semibold py-2 rounded-md border border-purple-200 hover:bg-purple-200"
                  onClick={() => window.open('https://forms.gle/rh7pCaqQSELtPwJz6', '_blank')}
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  Send Request
                </button>
              </div>
            </div>
            {/* FSSAI Registration - 3 Years Card */}
            <div className="border border-green-300 rounded-lg bg-green-50">
              <div className="bg-green-50 text-green-700 text-xs font-bold inline-block px-3 py-1 rounded-full mb-4 mt-4 ml-4">2 Exclusive Offers</div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-green-900">FSSAI Registration - 3 Years</h3>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">&#10003;</span> Application Preparation</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">&#10003;</span> Application Filing</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">&#10003;</span> 3 Years Registration</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">&#10003;</span> LEDGERS Platform</li>
                </ul>
                <button
                  className="w-full mt-2 flex items-center justify-center gap-2 bg-purple-100 text-purple-900 font-semibold py-2 rounded-md border border-purple-200 hover:bg-purple-200"
                  onClick={() => window.open('https://forms.gle/rh7pCaqQSELtPwJz6', '_blank')}
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  Send Request
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-6 text-sm">
            <a href="#" className="text-blue-600 hover:underline">
              Terms and conditions
            </a>
            <a href="#" className="text-blue-600 hover:underline">
              Refer a Friend
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default HeroSection;
