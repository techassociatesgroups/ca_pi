
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/professional-tax-registration/Breadcrumb';
import HeroSection from '@/components/professional-tax-registration/HeroSection';
import DetailsSection from '@/components/professional-tax-registration/DetailsSection';
import DocumentsSection from '@/components/professional-tax-registration/DocumentsSection';
import Sidebar from '@/components/professional-tax-registration/Sidebar';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';

const ProfessionalTaxRegistration = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <div className="bg-gray-50/50">
        <main className="max-w-screen-xl mx-auto px-4 py-6">
          <Breadcrumb />
          <div className="mt-4 flex flex-col lg:flex-row gap-8">
            <div className="flex-1 min-w-0 space-y-8">
              <HeroSection />
              <DetailsSection />
              <DocumentsSection />
            </div>
            <div className="w-full lg:w-96 flex-shrink-0">
              <Sidebar />
            </div>
          </div>
        </main>
      </div>
      <Footer />
      <Button className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg h-16 w-auto px-6 text-lg z-50">
        <MessageSquare className="mr-3 h-6 w-6" />
        Live Chat with Experts
      </Button>
    </div>
  );
};

export default ProfessionalTaxRegistration;
