
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/digital-signature/Breadcrumb';
import HeroSection from '@/components/digital-signature/HeroSection';
import DetailsSection from '@/components/digital-signature/DetailsSection';
import DocumentsSection from '@/components/digital-signature/DocumentsSection';
import Sidebar from '@/components/digital-signature/Sidebar';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';

const DigitalSignature = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <div className="bg-gray-50/50">
        <main className="max-w-screen-xl mx-auto px-4 py-6">
          <Breadcrumb />
          <div className="mt-4 grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3 space-y-8">
              <HeroSection />
              <DocumentsSection />
              <DetailsSection />
            </div>
            <div className="lg:col-span-1">
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

export default DigitalSignature;
