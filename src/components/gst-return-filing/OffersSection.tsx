import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const OffersSection = () => {
  return (
    <section>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Return Filings Upto 40 Lakhs Turnover Card */}
        <div className="rounded-xl border border-green-200 bg-green-50/50 p-6" style={{borderLeft: '4px solid #22c55e'}}>
          <div className="text-green-700 font-semibold mb-2">2 Exclusive Offers</div>
          <h3 className="font-bold text-lg mb-2">
            Return Filings Upto 40 Lakhs Turnover
          </h3>
          <ul className="mb-6 space-y-2 text-gray-700 text-sm">
            <li className="flex items-center"><span className="text-green-500 mr-2">✔️</span> LEDGERS GST Software</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✔️</span> 12 Months GSTR 1 Filing</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✔️</span> 12 Months GSTR 3B Filing</li>
          </ul>
          <a href="https://forms.gle/rh7pCaqQSELtPwJz6" target="_blank" rel="noopener noreferrer">
            <Button className="w-full bg-[#ede9fe] text-[#3730a3] font-semibold hover:bg-[#c7d2fe]">Send Request</Button>
          </a>
        </div>
        {/* Return Filings Upto 1 Crore Turnover Card */}
        <div className="rounded-xl border border-yellow-200 bg-yellow-50/50 p-6" style={{borderLeft: '4px solid #eab308'}}>
          <div className="text-yellow-700 font-semibold mb-2">2 Exclusive Offers</div>
          <h3 className="font-bold text-lg mb-2">
            Return Filings Upto 1 Crore Turnover
          </h3>
          <ul className="mb-6 space-y-2 text-gray-700 text-sm">
            <li className="flex items-center"><span className="text-green-500 mr-2">✔️</span> LEDGERS GST Software</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✔️</span> 12 Months GSTR 1 Filing</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✔️</span> 12 Months GSTR 3B Filing</li>
          </ul>
          <a href="https://forms.gle/rh7pCaqQSELtPwJz6" target="_blank" rel="noopener noreferrer">
            <Button className="w-full bg-[#ede9fe] text-[#3730a3] font-semibold hover:bg-[#c7d2fe]">Send Request</Button>
          </a>
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
      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Offers and discounts
        </h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4 flex items-center">
            <img
              src="assets/ledger.png"
              alt="Ledgers Logo"
              className="h-10 mr-4"
            />
            <div>
              <h3 className="font-semibold text-gray-800">
                LEDGERS - Compliance Platform
              </h3>
              <p className="text-sm text-gray-600">
                Invoicing, GST Filing, Banking and Payroll
              </p>
            </div>
          </div>
          <div className="border rounded-lg p-4 flex items-center">
            <img src="assets/gst.jpg" alt="GIN Logo" className="h-10 mr-4" />
            <div>
              <h3 className="font-semibold text-gray-800">
                Save 18% with GST Registration
              </h3>
              <p className="text-sm text-gray-600">
                Get GST eInvoice with Input Tax Credit
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
