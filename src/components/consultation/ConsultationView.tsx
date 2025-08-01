import { Star, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";


const ConsultationCard = ({
  type,
  features,
  color
}: {
  type: string;
  features: string[];
  color: 'green' | 'yellow';
}) => {
  const borderColor = color === 'green' ? 'border-green-300' : 'border-yellow-300';
  const bgColor = color === 'green' ? 'bg-green-50' : 'bg-yellow-50';
  const headingColor = color === 'green' ? 'text-green-900' : 'text-yellow-900';
  const badgeColor = color === 'green' ? 'text-green-600' : 'text-yellow-700';
  const badgeBg = color === 'green' ? 'bg-green-50' : 'bg-yellow-50';
  return (
    <div className={`border ${borderColor} rounded-lg ${bgColor}`}>
      <div className={`text-xs font-bold ${badgeColor} mb-2 mt-4 ml-4`}>2 Exclusive Offers</div>
      <div className="p-4">
        <h3 className={`font-bold mb-2 ${headingColor}`}>30 Minutes - {type} Consultation</h3>
        <ul className="space-y-2 text-sm text-gray-700 mb-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-500 mr-2 mt-1">&#10003;</span>
              <span>{feature}</span>
            </li>
          ))}
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
  );
};

const ConsultationView = () => {
  return (
    <div>
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div
              className="lg:col-span-5 bg-cover bg-center"
              style={{
                backgroundImage: undefined,
              }}
            >
              <div className="bg-blue-700/80 min-h-[250px] h-full flex flex-col justify-center items-center text-center p-8 text-white">
                <img
                  src="/assets/business-setup.jpg"
                  alt="Business Consultation"
                  className="w-full h-48 object-cover mb-6 rounded"
                />
                <h2 className="text-3xl font-bold">Need Help With Business?</h2>
                <p className="text-lg mt-2">Consult Our Professionals</p>
              </div>
            </div>
            <div className="lg:col-span-7 p-6">
              <h1 className="text-2xl font-bold text-gray-800">
                Business Consultation
              </h1>
              <div className="flex items-center mt-2">
                <div className="flex text-yellow-400">
                  <Star fill="currentColor" className="h-5 w-5" />
                  <Star fill="currentColor" className="h-5 w-5" />
                  <Star fill="currentColor" className="h-5 w-5" />
                  <Star fill="currentColor" className="h-5 w-5" />
                  <Star fill="currentColor" className="h-5 w-5" />
                </div>
                <span className="ml-2 text-sm text-gray-600">(39)</span>
              </div>
              <p className="mt-4 text-gray-600 text-sm">
                Consult with top CAs, Lawyers, and business experts online,
                anytime, anywhere with CA PI! Get expert guidance on accounting,
                tax, legal, business, intellectual property & much more to help
                your business grow.
              </p>
              <div className="mt-6">
                <Select defaultValue="ca-consultation">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a consultation type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ca-consultation">
                      30 Minutes - CA Consultation
                    </SelectItem>
                    <SelectItem value="lawyer-consultation">
                      30 Minutes - Lawyer Consultation
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <ConsultationCard
          type="CA"
          features={[
            "Online Consultation",
            "30 Minute Session",
            "Preferred language Selection",
            "Tax consultation",
            "Corporate Financial Consultation",
            "Consultation report - Financial",
          ]}
          color="green"
        />
        <ConsultationCard
          type="Lawyer"
          features={[
            "Online Consultation",
            "30 Minute Session",
            "Preferred language Selection",
            "Intellectual property consultation",
            "Corporate Legal Consultation",
            "Consultation report - Legal",
          ]}
          color="yellow"
        />
      </div>

      <div className="flex justify-between items-center mt-6 text-sm">
        <Link to="#" className="text-blue-600 hover:underline">
          Terms and conditions
        </Link>
        <Link to="#" className="text-blue-600 hover:underline">
          Refer a Friend
        </Link>
      </div>


    </div>
  );
};

export default ConsultationView;
