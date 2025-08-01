
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronRight } from "lucide-react";
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
      <div className="grid md:grid-cols-12">
        <div className="md:col-span-4">
            <div className="h-full min-h-[300px] bg-gray-200">
                <img src="/assets/shop-and-establishment-act.png" alt="Shop and Establishment Registration" className="w-full h-full object-contain" />
            </div>
        </div>
        <div className="md:col-span-8 p-8">
          <h1 className="text-3xl font-bold">Shop and Establishment Act</h1>
          <div className="flex items-center my-2">
            <div className="flex text-yellow-400">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
            </div>
            <span className="ml-2 text-sm text-gray-600">(265)</span>
          </div>
          <p className="text-gray-600 mb-4 text-sm">
            The Telangana Shops And Establishments Act of 1988 prescribes the applicable labour laws for those who wish to run a business in the state. The act has regulated working hours, wages and working conditions in all charitable trusts, educational institutions, printing establishments, as well as commercial establishments.
          </p>

          <Select defaultValue="andhra">
            <SelectTrigger className="w-full md:w-[280px]">
                <SelectValue placeholder="Select state" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="andhra">Andhra Pradesh</SelectItem>
                <SelectItem value="delhi">Delhi</SelectItem>
            </SelectContent>
          </Select>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                <div className="text-green-600 text-sm font-medium mb-1">3 Exclusive Offers</div>
                <h3 className="font-bold text-lg mb-4">Andhra Pradesh</h3>
                <ul className="space-y-2 text-sm text-gray-700 mb-6">
                    <li className="flex items-center"><div className="w-4 h-4 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>Application Preparation</li>
                    <li className="flex items-center"><div className="w-4 h-4 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>Shop And Establishment Act Certificate</li>
                    <li className="flex items-center"><div className="w-4 h-4 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>Valid for 1 calendar year</li>
                    <li className="flex items-center"><div className="w-4 h-4 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>LEDGERS Platform</li>
                    <li className="flex items-center"><div className="w-4 h-4 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>100% Refund Guarantee</li>
                </ul>
                <Button 
                    className="w-full bg-purple-400 hover:bg-purple-500 text-white rounded-lg flex items-center justify-center"
                    onClick={() => window.open('https://forms.gle/rh7pCaqQSELtPwJz6', '_blank')}
                >
                    <span>Send Request</span>
                    <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                </CardContent>
            </Card>
            <Card className="bg-yellow-50 border-yellow-200">
                <CardContent className="p-6">
                <div className="text-orange-600 text-sm font-medium mb-1">2 Exclusive Offers</div>
                <h3 className="font-bold text-lg mb-4">Delhi</h3>
                <ul className="space-y-2 text-sm text-gray-700 mb-6">
                    <li className="flex items-center"><div className="w-4 h-4 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>Application Preparation</li>
                    <li className="flex items-center"><div className="w-4 h-4 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>Shop And Establishment Act Certificate</li>
                    <li className="flex items-center"><div className="w-4 h-4 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>Valid for 1 calendar year</li>
                    <li className="flex items-center"><div className="w-4 h-4 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>LEDGERS Platform</li>
                    <li className="flex items-center"><div className="w-4 h-4 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>100% Refund Guarantee</li>
                </ul>
                <Button 
                    className="w-full bg-purple-400 hover:bg-purple-500 text-white rounded-lg flex items-center justify-center"
                    onClick={() => window.open('https://forms.gle/rh7pCaqQSELtPwJz6', '_blank')}
                >
                    <span>Send Request</span>
                    <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
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
