import { Star, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-4">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Proprietorship"
              className="rounded-lg w-full h-auto object-cover"
            />
            <div className="absolute top-0 left-0 bg-blue-900 bg-opacity-70 text-white p-4 rounded-tl-lg w-full">
              <h3 className="font-bold text-lg leading-tight">
                PROPRIETORSHIP REGISTRATION
              </h3>
              <p className="text-xs mt-1">
                From Start to Finish, We Help You Launch your business with CA
                PI
              </p>
            </div>
          </div>
          <div className="mt-4 text-sm">
            <p className="font-medium">PAN Card</p>
            <p className="font-medium mt-1">Aadhaar Card</p>
            <a
              href="#"
              className="text-blue-600 hover:underline mt-1 inline-block"
            >
              Load More
            </a>
          </div>
        </div>
        <div className="md:col-span-8">
          <h1 className="text-3xl font-bold text-gray-800">Proprietorship</h1>
          <div className="flex items-center mt-2">
            <div className="flex text-yellow-400">
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
              <Star className="w-5 h-5 text-gray-300" />
            </div>
            <span className="ml-2 text-sm text-gray-600">(13147)</span>
          </div>
          <p className="mt-4 text-gray-600">
            Assistance for GST registration with 1 year LEDGERS Accounting
            software license for invoicing, GST E-invoicing and GST filing
            through LEDGERS.
          </p>

          <div className="mt-4">
            <Select defaultValue="gst-software-registration">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gst-software-registration">
                  GST Software & Registration
                </SelectItem>
                <SelectItem value="gst-filing-registration">
                  GST Filing & Registration - 6 Months
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <Card className="border border-gray-200 bg-green-50">
              <CardContent className="p-6">
                <div className="text-sm font-bold text-green-700 mb-4">
                  3 Exclusive Offers
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">GST Software & Registration</h4>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                    <span className="text-gray-700">GST Registration Application</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                    <span className="text-gray-700">DIY GST Clarification</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                    <span className="text-gray-700">LEDGERS GST Software - 1 Year License</span>
                  </li>
                </ul>
                <Button
                  className="w-full bg-purple-400 hover:bg-purple-500 text-white font-medium py-3 rounded-lg"
                  onClick={() => window.open('https://forms.gle/rh7pCaqQSELtPwJz6', '_blank')}
                >
                  ✏️ Send Request
                </Button>
              </CardContent>
            </Card>
            <Card className="border border-gray-200 bg-orange-50">
              <CardContent className="p-6">
                <div className="text-sm font-bold text-orange-600 mb-4">
                  2 Exclusive Offers
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">
                  GST Filing & Registration - 6 Months
                </h4>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                    <span className="text-gray-700">GST Registration Application</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                    <span className="text-gray-700">GST Filing by Accountant 6 Months</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                    <span className="text-gray-700">GST Filing Training & Setup</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                    <span className="text-gray-700">Government Fee & Stamp Duty</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                    <span className="text-gray-700">DSC Downloading & Shipping Support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                    <span className="text-gray-700">LEDGERS GST Software - 1 Year License</span>
                  </li>
                </ul>
                <Button
                  className="w-full bg-purple-400 hover:bg-purple-500 text-white font-medium py-3 rounded-lg"
                  onClick={() => window.open('https://forms.gle/rh7pCaqQSELtPwJz6', '_blank')}
                >
                  ✏️ Send Request
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-between mt-4 text-sm">
            <Link to="#" className="text-blue-600 hover:underline">
              Terms and conditions
            </Link>
            <Link to="#" className="text-blue-600 hover:underline">
              Refer a Friend
            </Link>
          </div>


        </div>
      </div>
    </div>
  );
};

export default HeroSection;
