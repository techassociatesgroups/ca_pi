
import { Card, CardContent} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="space-y-6 sticky top-8">
        <Card>
            <CardContent className="pt-6">
                <div className="text-center">
                    <Phone className="mx-auto h-12 w-12 text-gray-400 mb-3" />
                    <h3 className="text-xl font-bold text-center">Reach us now</h3>
                    <p className="text-center text-sm text-gray-600 mt-2 mb-6">
                        Fill out the form below and we'll contact you immediately.
                    </p>
                </div>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <div className="flex">
                            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                                +91
                            </span>
                            <Input id="phone" type="tel" placeholder="Enter your phone number" className="rounded-l-none" />
                        </div>
                    </div>
                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 font-bold text-base">
                        Contact Us
                    </Button>
                </form>
            </CardContent>
        </Card>
      
    </aside>
  );
};

export default Sidebar;
