
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle, Phone } from "lucide-react";
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const Sidebar = () => {
  const { addToCart } = useCart();

  const handleGetStarted = () => {
    addToCart({
      id: 'income-tax-e-filing-new',
      name: 'Income Tax E-Filing Service',
      price: 1499
    });
    toast.success('Income Tax E-Filing Service added to cart!');
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border">
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
            <div className="flex gap-2">
              <Select>
                <SelectTrigger className="w-20">
                  <SelectValue placeholder="+91" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="+91">+91</SelectItem>
                </SelectContent>
              </Select>
              <Input id="phone" placeholder="Enter your phone number" className="flex-1" />
            </div>
          </div>
          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 font-bold text-base">
            Contact Us
          </Button>
        </form>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="font-semibold mb-3">Related Guides</h3>
        <div className="space-y-2">
          <a href="#" className="block text-blue-600 hover:underline text-sm">Old vs New Tax Regime: Which is better for YOU?</a>
          <a href="#" className="block text-blue-600 hover:underline text-sm">What is CPC in Income Tax?</a>
          <a href="#" className="block text-blue-600 hover:underline text-sm">ITR-8 Form: Income Tax Return</a>
          <a href="#" className="block text-blue-600 hover:underline text-sm">Charitable Trusts Taxability</a>
          <a href="#" className="block text-blue-600 hover:underline text-sm">F&O Trading Income Tax</a>
        </div>
      </div>

      <div className="bg-green-500 text-white p-4 rounded-lg flex items-center space-x-3">
        <MessageCircle className="w-6 h-6" />
        <span className="text-sm font-medium">Live Chat with Experts</span>
      </div>
    </div>
  );
};

export default Sidebar;
