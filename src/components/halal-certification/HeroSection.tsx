
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1 bg-blue-800 text-white p-6 rounded-lg flex flex-col items-center justify-center text-center h-full">
            <div className="border-4 border-white rounded-full p-4 mb-4">
              <p className="text-4xl font-bold">حلال</p>
              <p className="text-lg tracking-widest">HALAL</p>
            </div>
            <h2 className="text-2xl font-bold">HALAL CERTIFICATE</h2>
            <p className="mt-2 text-sm">Grow your Business - Get Halal Certification</p>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h1 className="text-3xl font-bold">Halal License & Certification</h1>
            <div className="flex items-center space-x-2 text-yellow-500">
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
              <a href="#" className="text-blue-600 hover:underline text-sm">(1)</a>
            </div>
            <p className="text-gray-600">
              Obtaining Halal license and certification is an important step for all food businesses looking to serve quality food that caters to a large audience in over 120 countries.
            </p>
            <div className="border rounded-md p-3 flex justify-between items-center">
              <span>Halal Consultation</span>
              <ChevronDown className="w-5 h-5" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <Card className="border-dashed border-green-500">
                <CardContent className="p-4 space-y-3">
                  <div className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 rounded-full inline-block">2 Exclusive Offers</div>
                  <h3 className="font-bold">Halal Consultation</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-1 text-green-500" />Consult Expert</li>
                    <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-1 text-green-500" />Personalised Session</li>
                    <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-1 text-green-500" />Process & Pricing</li>
                  </ul>
                  <Button variant="outline" className="w-full border-green-500 text-green-500 hover:bg-green-50 hover:text-green-600">ADD</Button>
                </CardContent>
              </Card>
              <Card className="border-dashed border-green-500">
                <CardContent className="p-4 space-y-3">
                  <div className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 rounded-full inline-block">2 Exclusive Offers</div>
                  <h3 className="font-bold">License Support</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-1 text-green-500" />Halal Application Filing</li>
                    <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-1 text-green-500" />Halal Audit</li>
                    <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-1 text-green-500" />Halal Certification</li>
                  </ul>
                  <Button variant="outline" className="w-full border-green-500 text-green-500 hover:bg-green-50 hover:text-green-600">ADD</Button>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-between text-sm text-blue-600 mt-4">
              <a href="#" className="hover:underline">Terms and conditions</a>
              <a href="#" className="hover:underline">Refer a Friend</a>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HeroSection;
