
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const HeroSection = () => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="grid md:grid-cols-12 gap-0">
          <div className="md:col-span-4">
            <img src="/lovable-uploads/6c61289a-5fac-4b42-8e54-dd6ad4218e44.png" alt="Barcode Registration" className="h-full w-full object-cover" />
          </div>
          <div className="md:col-span-8 p-6 md:p-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Barcode Registration</h1>
            <div className="flex items-center mt-2">
              <div className="flex text-yellow-400">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <span className="ml-2 text-gray-600">(13)</span>
            </div>
            <p className="mt-4 text-gray-600">
              100 Barcodes with a validity of 1 year having a turnover of up to 5 crores.
            </p>
            <div className="mt-4">
              <Select defaultValue="basic">
                <SelectTrigger className="w-full md:w-1/2">
                  <SelectValue placeholder="Select a plan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="basic">Basic</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="border rounded-lg p-4 relative border-dashed border-green-500">
                <div className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full absolute top-2 right-2">2 Exclusive Offers</div>
                <h3 className="font-bold text-lg">Basic</h3>
                <ul className="mt-2 space-y-2 text-sm text-gray-600">
                  <li className="flex items-start"><span className="text-green-500 mr-2 font-bold">&gt;</span> Application Preparation</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2 font-bold">&gt;</span> Application Filing</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2 font-bold">&gt;</span> Barcode Allotment Number</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2 font-bold">&gt;</span> Barcode Login credentials</li>
                </ul>
                <Button 
                  className="mt-4 w-full"
                  style={{ backgroundColor: '#C5BAFF', borderColor: '#C5BAFF', color: '#000' }}
                  onClick={() => window.open('https://forms.gle/rh7pCaqQSELtPwJz6', '_blank')}
                  aria-label="Apply Now (opens Google Form in new tab)"
                >
                  <svg className="inline-block mr-2 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  Apply Now
                </Button>
              </div>
              <div className="border rounded-lg p-4 relative border-dashed border-green-500">
                <div className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full absolute top-2 right-2">2 Exclusive Offers</div>
                <h3 className="font-bold text-lg">Standard</h3>
                <ul className="mt-2 space-y-2 text-sm text-gray-600">
                  <li className="flex items-start"><span className="text-green-500 mr-2 font-bold">&gt;</span> Application Preparation</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2 font-bold">&gt;</span> Application Filing</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2 font-bold">&gt;</span> Barcode Allotment Number</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2 font-bold">&gt;</span> Barcode Login credentials</li>
                </ul>
                <Button 
                  className="mt-4 w-full"
                  style={{ backgroundColor: '#C5BAFF', borderColor: '#C5BAFF', color: '#000' }}
                  onClick={() => window.open('https://forms.gle/rh7pCaqQSELtPwJz6', '_blank')}
                  aria-label="Apply Now (opens Google Form in new tab)"
                >
                  <svg className="inline-block mr-2 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  Apply Now
                </Button>
              </div>
            </div>
            <div className="flex justify-between mt-6 text-sm">
                <a href="#" className="text-blue-600 hover:underline">Terms and conditions</a>
                <a href="#" className="text-blue-600 hover:underline">Refer a Friend</a>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HeroSection;

