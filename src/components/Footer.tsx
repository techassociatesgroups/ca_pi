
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: "Business Registration",
      links: [
        { name: "Private Limited Company", path: "/private-limited-company" },
        { name: "LLP Registration", path: "/limited-liability-partnership" },
        { name: "One Person Company", path: "/one-person-company" },
        { name: "Partnership Firm", path: "/partnership" },
        { name: "GST Registration", path: "/gst-registration" },
      ]
    },
    {
      title: "Compliance Services",
      links: [
        { name: "Income Tax Filing", path: "/income-tax-e-filing-new" },
        { name: "GST Return Filing", path: "/gst-return-filing" },
        { name: "Company Compliance", path: "/company-compliance" },
        { name: "MCA Compliance", path: "/company-compliance" },
        { name: "Digital Signature", path: "/digital-signature" },
      ]
    },
    {
      title: "Intellectual Property",
      links: [
        { name: "Trademark Registration", path: "/trademark-registration" },
        { name: "Copyright Registration", path: "/copyright-registration" },
        { name: "Patent Registration", path: "/patent-registration" },
        { name: "Trade License", path: "/trade-license" },
        { name: "FSSAI License", path: "/fssai-license" },
      ]
    }
  ];

  const companyLinks = [
    { name: "About Us", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Partner with Us", path: "/partner" },
    { name: "Consultation", path: "/consultation" },
    { name: "Guides", path: "/guide" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms of Service", path: "/terms-of-service" },
    { name: "Refund Policy", path: "/refund-policy" },
    { name: "Disclaimer", path: "/disclaimer" },
  ];

  return (
    <footer className="bg-white text-[#22223B]">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-6">
              <img src="/assets/logo.ico.jpg" alt="CAPI Consultants LLP Logo" className="h-14 w-auto mr-2" />
            </Link>
            <p className="text-[#003366] mb-6 leading-relaxed">
              CA PI is your trusted partner for comprehensive business services. We provide end-to-end solutions for company registration, compliance, taxation, and legal documentation across India.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#003366] flex-shrink-0" />
                <span className="text-[#003366] font-bold">+91 8106223262 / 7659902579</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#003366] flex-shrink-0" />
                <span className="text-[#003366] font-bold">hemanth@capicons.in</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#003366] flex-shrink-0 mt-0.5" />
                <span className="text-[#003366] font-bold">Chennai, Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          {/* Service Categories */}
          {serviceCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4 text-[#003366]">{category.title}</h3>
              <ul className="flex flex-wrap gap-3">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="mb-2">
                    <Link 
                      to={link.path} 
                      className="bg-[#eaf3ff] hover:bg-[#cfe0ff] text-[#003366] px-4 py-2 rounded border border-[#b0c4e6] hover:border-[#003366] transition-colors text-sm whitespace-nowrap"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Company & Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#003366]">Company</h3>
            <ul className="flex flex-wrap gap-3 mb-6">
              {companyLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <Link 
                    to={link.path} 
                    className="bg-[#eaf3ff] hover:bg-[#cfe0ff] text-[#003366] px-4 py-2 rounded border border-[#b0c4e6] hover:border-[#003366] transition-colors text-sm whitespace-nowrap"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-md font-semibold mb-3 text-[#003366]">Legal</h4>
            <ul className="flex flex-wrap gap-3">
              {legalLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <Link 
                    to={link.path} 
                    className="bg-[#eaf3ff] hover:bg-[#cfe0ff] text-[#003366] px-4 py-2 rounded border border-[#b0c4e6] hover:border-[#003366] transition-colors text-sm whitespace-nowrap"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-[#b0c4e6]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-[#eaf3ff] p-6 rounded-lg">
              <div className="text-3xl font-bold text-[#003366] mb-2">10L+</div>
              <div className="text-[#003366]">Happy Clients</div>
            </div>
            <div className="bg-[#eaf3ff] p-6 rounded-lg">
              <div className="text-3xl font-bold text-[#003366] mb-2">99%</div>
              <div className="text-[#003366]">Success Rate</div>
            </div>
            <div className="bg-[#eaf3ff] p-6 rounded-lg">
              <div className="text-3xl font-bold text-[#003366] mb-2">15+</div>
              <div className="text-[#003366]">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Security Badges */}
        <div className="mt-8 pt-6 border-t border-[#b0c4e6]">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-wrap items-center gap-4 mb-4 md:mb-0">
              <div className="bg-[#eaf3ff] px-4 py-2 rounded-lg">
                <span className="text-[#003366] font-semibold text-sm">🔒 SSL Secured</span>
              </div>
              <div className="bg-[#eaf3ff] px-4 py-2 rounded-lg">
                <span className="text-[#003366] font-semibold text-sm">✓ Government Registered</span>
              </div>
              <div className="bg-[#eaf3ff] px-4 py-2 rounded-lg">
                <span className="text-[#003366] font-semibold text-sm">📊 ISO Certified Process</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-[#003366] hover:text-[#22223B] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#003366] hover:text-[#22223B] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#003366] hover:text-[#22223B] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#003366] hover:text-[#22223B] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#003366] hover:text-[#22223B] transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#b0c4e6] py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-[#003366]">
            <div className="mb-2 md:mb-0">
              © {currentYear} CA PI. All rights reserved.
            </div>
            <div className="flex items-center space-x-4">
              <span>Made with ❤️ in India</span>
              <span>•</span>
              <span>Trusted Nationwide</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
