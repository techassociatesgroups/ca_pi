import { Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

const HeroSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-4">
          <div className="bg-blue-600 rounded-lg text-white overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold">OPC REGISTRATION</h2>
              <div className="bg-white text-blue-600 text-center py-2 rounded mt-4">
                OPC Registration Name Entry Register Online
              </div>
            </div>
            <img
              src="assets/one-person-company.jpg"
              alt="OPC Registration"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-sm">
              <p>PAN Card</p>
              <p>Passport</p>
              <p>Voters Identity Card</p>
              <a href="#" className="font-semibold mt-2 inline-block">
                Load More
              </a>
            </div>
          </div>
        </div>
        <div className="md:col-span-8">
          <h1 className="text-2xl font-bold text-gray-800">OPC Registration</h1>
          <div className="flex items-center my-2">
            <div className="flex text-yellow-500">
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
            </div>
            <span className="text-gray-600 ml-2">(2141)</span>
          </div>
          <p className="text-gray-600 mb-4">
            Instant Name Application for Company.
          </p>

          <Select defaultValue="mca_approval">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="MCA Name Approval" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mca_approval">MCA Name Approval</SelectItem>
              <SelectItem value="andaman">
                Andaman and Nicobar Islands
              </SelectItem>
            </SelectContent>
          </Select>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {/* MCA Name Approval Card */}
            <div className="border border-green-300 rounded-lg bg-green-50">
              <div className="p-4">
                <div className="text-xs font-bold text-green-600 mb-2">3 Exclusive Offers</div>
                <h3 className="font-bold mb-2 text-green-900">Name Approval</h3>
                <ul className="space-y-2 text-sm text-gray-700 mb-4">
                  <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">✔️</span> Name Application Fee</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">✔️</span> Instant Filing</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">✔️</span> 4 Name Choice</li>
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
            {/* Andaman and Nicobar Islands Card */}
            <div className="border border-yellow-300 rounded-lg bg-yellow-50">
              <div className="p-4">
                <div className="text-xs font-bold text-yellow-700 mb-2">2 Exclusive Offers</div>
                <h3 className="font-bold mb-2 text-yellow-900">Andaman and Nicobar Islands</h3>
                <ul className="space-y-2 text-sm text-gray-700 mb-4">
                  <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">✔️</span> MCA Name Approval</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">✔️</span> Company Incorporation</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">✔️</span> PAN & TAN Registration</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">✔️</span> Government Fee & Stamp Duty</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">✔️</span> 2 DSCs (Hyper Tokens)</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">✔️</span> DSC Downloading & Shipping Support</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">✔️</span> Bank Account Opening Assistance</li>
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
          <div className="flex justify-between items-center mt-4 text-sm">
            <a href="#" className="text-blue-600 hover:underline">
              Terms and conditions
            </a>
            <a href="#" className="text-blue-600 hover:underline">
              Refer a Friend
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
