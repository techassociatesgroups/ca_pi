
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <Card className="overflow-hidden">
      <div className="grid md:grid-cols-12 gap-0">
        <div className="md:col-span-5 lg:col-span-4 flex items-center justify-center p-8 bg-black">
           <img src="/lovable-uploads/5a7b6925-47f5-41d0-b8ff-537662135555.png" alt="RCMC Registration" className="object-contain rounded-lg max-h-[450px]" />
        </div>
        <div className="md:col-span-7 lg:col-span-8 p-8">
          <h1 className="text-3xl font-bold">RCMC Registration</h1>
          <div className="flex items-center my-2">
            {[...Array(4)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            ))}
            <Star className="h-5 w-5 text-yellow-400" />
            <span className="ml-2 text-sm text-gray-600">(67)</span>
          </div>
          <p className="text-gray-600 mb-4">
            Registration-Cum-Membership Certificate (RCMC) is a certificate that validates an exporter dealing with products registered with an agency/organization that the Indian Government authorizes.
          </p>
          <Select defaultValue="handloom">
            <SelectTrigger className="w-full md:w-2/3">
              <SelectValue placeholder="Select Council" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="handloom">Handloom Export Promotion Council</SelectItem>
              <SelectItem value="carpet">Carpet Export Promotion Council</SelectItem>
            </SelectContent>
          </Select>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <Card className="border-green-200">
              <CardContent className="p-4">
                <div className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full inline-block mb-2">2 Exclusive Offers</div>
                <h3 className="font-bold mb-2">Handloom Export Promotion Council</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><ChevronRight className="h-4 w-4 mr-1 text-green-500" />Application Preparation</li>
                  <li className="flex items-center"><ChevronRight className="h-4 w-4 mr-1 text-green-500" />Application Filing</li>
                  <li className="flex items-center"><ChevronRight className="h-4 w-4 mr-1 text-green-500" />RCMC Number</li>
                  <li className="flex items-center"><ChevronRight className="h-4 w-4 mr-1 text-green-500" />RCMC Certificate</li>
                </ul>
                <Button className="w-full mt-4 bg-white text-green-600 border border-green-600 hover:bg-green-50">ADD</Button>
              </CardContent>
            </Card>
            <Card className="border-green-200">
              <CardContent className="p-4">
                <div className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full inline-block mb-2">2 Exclusive Offers</div>
                <h3 className="font-bold mb-2">Carpet Export Promotion Council</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><ChevronRight className="h-4 w-4 mr-1 text-green-500" />Application Preparation</li>
                  <li className="flex items-center"><ChevronRight className="h-4 w-4 mr-1 text-green-500" />Application Filing</li>
                  <li className="flex items-center"><ChevronRight className="h-4 w-4 mr-1 text-green-500" />RCMC Number</li>
                  <li className="flex items-center"><ChevronRight className="h-4 w-4 mr-1 text-green-500" />RCMC Certificate</li>
                </ul>
                <Button className="w-full mt-4 bg-white text-green-600 border border-green-600 hover:bg-green-50">ADD</Button>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-between items-center mt-6 text-sm">
            <a href="#" className="text-blue-600 hover:underline">Terms and conditions</a>
            <a href="#" className="text-blue-600 hover:underline">Refer a Friend</a>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default HeroSection;
