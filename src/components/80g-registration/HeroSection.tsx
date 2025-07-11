import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <Card className="overflow-hidden">
      <div className="grid md:grid-cols-12">
        <div className="md:col-span-5 flex items-center justify-center p-4">
          <img
            src="/lovable-uploads/b85cd1a7-529b-417e-9d8e-156a3b53bbd3.png"
            alt="80G Registration"
            className="object-contain rounded-lg max-h-[450px]"
          />
        </div>
        <div className="md:col-span-7 p-8">
          <h1 className="text-3xl font-bold">80G Registration</h1>
          <div className="flex items-center my-2">
            <div className="flex text-yellow-400">
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
            </div>
            <span className="ml-2 text-sm text-gray-600">(96)</span>
          </div>
          <p className="text-gray-600 mb-4">
            Get 80G registration for your charitable organization with CA PI and
            allow donors to claim tax deductions.
          </p>

          <Card className="border-green-200 mt-6">
            <CardContent className="p-4">
              <div className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full inline-block mb-2">
                2 Exclusive Offers
              </div>
              <h3 className="font-bold mb-2">Basic</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1 text-green-500" />
                  Application Preparation
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1 text-green-500" />
                  Application Filing
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1 text-green-500" />
                  80G Registration Number
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1 text-green-500" />
                  80G Certificate
                </li>
              </ul>
              <Button 
                className="w-full mt-4"
                style={{ backgroundColor: '#C5BAFF', borderColor: '#C5BAFF', color: '#000' }}
                onClick={() => window.open('https://forms.gle/rh7pCaqQSELtPwJz6', '_blank')}
              >
                Enquire Now
              </Button>
            </CardContent>
          </Card>

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
