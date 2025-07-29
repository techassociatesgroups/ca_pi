import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-blue-600 rounded-lg overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-8 text-white">
          <h1 className="text-3xl font-bold mb-4">INCOME TAX E-FILING</h1>
          <p className="text-blue-100 mb-6">
            E-file your Income tax return (ITR) online through CA PI quickly at
            an affordable price. Get expert help in completing your ITR Filing.
          </p>
          <p className="text-blue-100 mb-6">Salaried person</p>
          <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <h3 className="font-semibold mb-2">Income Tax e-Filing</h3>
              <ul className="text-sm space-y-1 text-blue-100">
                <li>• Income Tax computation</li>
                <li>• Income Tax efile copy</li>
                <li>• Tax Consultation</li>
                <li>• Business Consultation</li>
                <li>• Legal consultation</li>
                <li>• Commercial Consultation</li>
              </ul>
            </div>
            <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-2">
              ADD
            </Button>
          </div>
        </div>
        <div className="relative">
          <img
            src="/assets/income tax.jpg"
            alt="Income Tax Stamp"
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
