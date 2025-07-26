
import { ChevronRight } from "lucide-react";

const PricingSection = () => {
  return (
    <section>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Company Basic Card */}
        <div className="border border-green-300 rounded-lg bg-green-50">
          <div className="bg-green-50 text-green-700 text-xs font-bold inline-block px-3 py-1 rounded-full mb-4 mt-4 ml-4">2 Exclusive Offers</div>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2 text-green-900">Company Basic</h3>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">&#10003;</span> Accountant</li>
              <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">&#10003;</span> MCA Compliance</li>
              <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">&#10003;</span> ITR-6 Filing</li>
              <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">&#10003;</span> DIN eKYC for (2 Directors)</li>
              <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">&#10003;</span> Commencement of Business</li>
              <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">&#10003;</span> LEDGERS Accounting Software</li>
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
        {/* TDS Filings 2 year Card */}
        <div className="border border-yellow-300 rounded-lg bg-yellow-50">
          <div className="bg-yellow-50 text-yellow-700 text-xs font-bold inline-block px-3 py-1 rounded-full mb-4 mt-4 ml-4">2 Exclusive Offers</div>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2 text-yellow-900">TDS Filings 2 year</h3>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">&#10003;</span> TDS filings for all quarters</li>
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
      <div className="flex justify-between items-center mt-4 text-blue-600 border-b pb-4">
        <a href="#" className="hover:underline text-sm">Terms and conditions</a>
        <a href="#" className="hover:underline text-sm">Refer a Friend</a>
      </div>
    </section>
  );
};

export default PricingSection;
