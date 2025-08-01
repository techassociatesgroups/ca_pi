import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const Sidebar = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 sticky top-24">
      <Phone className="mx-auto h-12 w-12 text-gray-400 mb-3" />
      <h3 className="text-xl font-bold text-center">Reach us now</h3>
      <p className="text-center text-sm text-gray-600 mt-2 mb-6">
        Fill out the form below and we'll contact you immediately.
      </p>
      <form className="space-y-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Enter your name" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Enter your email" />
        </div>
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
              +91
            </span>
            <Input id="phone" type="tel" placeholder="Enter your phone number" className="rounded-l-none" />
          </div>
        </div>
        <Button 
          type="submit" 
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold text-base" 
          size="lg"
          onClick={() => window.open('https://forms.gle/rh7pCaqQSELtPwJz6', '_blank')}
        >
          Contact Us
        </Button>
      </form>
    </div>
  );
};

export default Sidebar; 