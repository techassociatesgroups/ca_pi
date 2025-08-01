
import { Wallet, Landmark } from 'lucide-react';

const OffersDiscountSection = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Offers and discounts</h2>
      <div className="space-y-4">
        <div className="border rounded-lg p-4 flex items-center">
          <div className="bg-gray-100 p-3 rounded-full mr-4">
            <Wallet className="w-6 h-6 text-gray-600" />
          </div>
          <div>
            <h3 className="font-bold">LEDGERS - Compliance Platform</h3>
            <p className="text-gray-600 text-sm">Invoicing, GST Filing, Banking and Payroll</p>
          </div>
        </div>
        <div className="border rounded-lg p-4 flex items-center">
          <div className="bg-gray-100 p-3 rounded-full mr-4">
            <Landmark className="w-6 h-6 text-gray-600" />
          </div>
          <div>
            <h3 className="font-bold">Save 18% with GST Registration</h3>
            <p className="text-gray-600 text-sm">Get GST eInvoice with Input Tax Credit</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffersDiscountSection;

