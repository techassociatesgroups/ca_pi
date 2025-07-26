import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Usb } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const HeroSection = () => {
  return (
    <Card className="overflow-hidden">
      <div className="grid md:grid-cols-12 gap-4">
        <div className="md:col-span-4 p-4">
          <div className="bg-blue-600 text-white rounded-lg p-6 flex flex-col items-center text-center">
            <img
              src="/assets/digital-signature-banner.jpg"
              alt="Digital Signature"
              className="mb-4 rounded-lg w-full h-48 object-cover"
            />
            <h2 className="text-2xl font-bold">DIGITAL SIGNATURE</h2>
            <p className="text-xs mt-2">
              Shipping Across India • DSC Token • DSC Support Service
            </p>
            <Usb className="h-48 w-48 my-6 text-blue-300" />
          </div>
          <div className="mt-4 text-gray-600 text-sm">
            <p className="py-2 border-b">PAN Card Copy</p>
            <p className="py-2 border-b">Passport Copy</p>
            <p className="py-2 border-b">Aadhar Card</p>
            <button className="text-blue-600 hover:underline mt-2">
              Load More
            </button>
          </div>
        </div>
        <div className="md:col-span-8 p-8">
          <h1 className="text-3xl font-bold">Digital Signature</h1>
          <div className="flex items-center my-2">
            <div className="flex text-yellow-400">
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
            </div>
            <span className="ml-2 text-sm text-gray-600">(9046)</span>
          </div>
          <p className="text-gray-600 mb-4 text-sm">
            CA PI offers DSC token, DSC, DSC shipping and DSC support services.
            Additional cost applicable for certificate payable directly to
            Certifying Authority.
          </p>

          <Select defaultValue="individual">
            <SelectTrigger className="w-full md:w-[280px]">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="individual">Individual</SelectItem>
              <SelectItem value="company">Company</SelectItem>
            </SelectContent>
          </Select>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Individual Card */}
            <div className="border border-green-300 rounded-lg bg-green-50">
              <div className="bg-green-50 text-green-700 text-xs font-bold inline-block px-3 py-1 rounded-full mb-4 mt-4 ml-4">2 Exclusive Offers</div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-green-900">Individual</h3>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">&#10003;</span> DSC Crypto Token</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">&#10003;</span> DSC Downloading</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">&#10003;</span> Shipping & Handling</li>
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
            {/* Company Card */}
            <div className="border border-green-300 rounded-lg bg-green-50">
              <div className="bg-green-50 text-green-700 text-xs font-bold inline-block px-3 py-1 rounded-full mb-4 mt-4 ml-4">2 Exclusive Offers</div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-green-900">Company</h3>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">&#10003;</span> DSC Crypto Token</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">&#10003;</span> DSC Downloading</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">&#10003;</span> Shipping & Handling</li>
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

          <div className="flex justify-between items-center mt-6 text-sm">
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
