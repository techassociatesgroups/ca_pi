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
          <div
            className="bg-blue-600 rounded-lg text-white p-8 flex flex-col items-center justify-center h-48 bg-contain bg-center"
            style={{
              backgroundImage:
                "url('/assets/trade-license.png')",
            }}
          ></div>
          <div className="mt-6">
            <h3 className="font-semibold text-lg">Documents Required</h3>
            <ul className="mt-2 space-y-2 text-gray-600">
              <li className="p-3 border rounded-md">PAN Card</li>
              <li className="p-3 border rounded-md">Aadhar Card</li>
              <li className="p-3 border rounded-md">Rental agreement</li>
            </ul>
            <button className="text-blue-600 font-semibold mt-2">
              Load More
            </button>
          </div>
        </div>

        <div className="lg:col-span-8">
          <h1 className="text-3xl font-bold">Trade License</h1>
          <div className="flex items-center mt-2">
            <div className="flex text-yellow-400">
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
            </div>
            <span className="ml-2 text-blue-600 font-semibold">(158)</span>
          </div>
          <p className="mt-4 text-gray-600">
            Trade license is mandatory for businesses operating in a commercial
            property. Easily apply for Trade License online using IndiaFilings.
          </p>
          <div className="mt-6">
            <Select defaultValue="chennai">
              <SelectTrigger className="w-full md:w-1/2">
                <SelectValue placeholder="Select City" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="chennai">Chennai</SelectItem>
                <SelectItem value="telangana">Telangana</SelectItem>
                <SelectItem value="mumbai">Mumbai</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Chennai Card */}
            <div className="rounded-xl border border-green-200 bg-green-50/50 p-6" style={{borderLeft: '4px solid #22c55e'}}>
              <div className="text-green-700 font-semibold mb-2">3 Exclusive Offers</div>
              <h3 className="font-bold text-lg mb-2">Chennai</h3>
              <ul className="mb-6 space-y-2 text-gray-700">
                <li className="flex items-center"><span className="text-green-500 mr-2">✔️</span> Application Preparation</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✔️</span> Application Filing</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✔️</span> Trade License Number</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✔️</span> 1 Year Trade License</li>
              </ul>
              <a href="https://forms.gle/rh7pCaqQSELtPwJz6" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-[#ede9fe] text-[#3730a3] font-semibold hover:bg-[#c7d2fe]">Send Request</Button>
              </a>
            </div>
            {/* Telangana Card */}
            <div className="rounded-xl border border-yellow-200 bg-yellow-50/50 p-6" style={{borderLeft: '4px solid #eab308'}}>
              <div className="text-yellow-700 font-semibold mb-2">2 Exclusive Offers</div>
              <h3 className="font-bold text-lg mb-2">Telangana</h3>
              <ul className="mb-6 space-y-2 text-gray-700">
                <li className="flex items-center"><span className="text-green-500 mr-2">✔️</span> Application Preparation</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✔️</span> Application Filing</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✔️</span> Trade License Number</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✔️</span> 1 Year Trade License</li>
              </ul>
              <a href="https://forms.gle/rh7pCaqQSELtPwJz6" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-[#ede9fe] text-[#3730a3] font-semibold hover:bg-[#c7d2fe]">Send Request</Button>
              </a>
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
