
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ServiceSelection = () => {
  const services = [
    {
      title: "30 Minutes - Tax Consultation",
      features: [
        "Tax Consultation",
        "Business Consultation", 
        "Legal consultation",
        "Commercial Consultation"
      ]
    },
    {
      title: "30 Minutes - Tax Consultation",
      features: [
        "Tax Consultation", 
        "Business Consultation",
        "Legal consultation",
        "Commercial Consultation"
      ]
    }
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Income Tax E-Filing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="p-6">
            <h3 className="font-semibold mb-4">{service.title}</h3>
            <ul className="space-y-2 mb-6">
              {service.features.map((feature, idx) => (
                <li key={idx} className="text-sm text-gray-600">• {feature}</li>
              ))}
            </ul>
            <Button 
              className="w-full"
              style={{ backgroundColor: '#C5BAFF', borderColor: '#C5BAFF', color: '#000' }}
              onClick={() => window.open('https://forms.gle/rh7pCaqQSELtPwJz6', '_blank')}
              aria-label="Apply Now (opens Google Form in new tab)"
            >
              <svg className="inline-block mr-2 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              Apply Now
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ServiceSelection;
