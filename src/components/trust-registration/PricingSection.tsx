
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"

const PricingSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="w-full md:w-1/3 mb-6">
        <Select defaultValue="bengaluru">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select City" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="bengaluru">Bengaluru</SelectItem>
            <SelectItem value="mumbai">Mumbai</SelectItem>
            <SelectItem value="delhi">Delhi</SelectItem>
            <SelectItem value="chennai">Chennai</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Bengaluru Card */}
        <div className="border border-green-300 rounded-lg bg-green-50">
          <div className="bg-green-50 text-green-700 text-xs font-bold inline-block px-3 py-1 rounded-full mb-4 mt-4 ml-4">2 Exclusive Offers</div>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2 text-green-900">Bengaluru</h3>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">&#10003;</span> Trust Deed Preparation</li>
              <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">&#10003;</span> INR 500 Stamp Paper</li>
              <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">&#10003;</span> Trust PAN Card</li>
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
        {/* Mumbai Card */}
        <div className="border border-green-300 rounded-lg bg-green-50">
          <div className="bg-green-50 text-green-700 text-xs font-bold inline-block px-3 py-1 rounded-full mb-4 mt-4 ml-4">2 Exclusive Offers</div>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2 text-green-900">Mumbai</h3>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">&#10003;</span> Trust Deed Preparation</li>
              <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">&#10003;</span> INR 500 Stamp Paper</li>
              <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">&#10003;</span> Trust PAN Card</li>
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
      <div className="flex justify-between text-sm text-blue-600 mt-4">
        <a href="#" className="hover:underline">Terms and conditions</a>
        <a href="#" className="hover:underline">Refer a Friend</a>
      </div>
    </div>
  )
}

export default PricingSection;
