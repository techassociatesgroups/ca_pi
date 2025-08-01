
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/esi-registration/Breadcrumb';
import HeroSection from '@/components/esi-registration/HeroSection';

import DetailsSection from '@/components/esi-registration/DetailsSection';
import Sidebar from '@/components/esi-registration/Sidebar';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';

const ESIRegistration = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <div className="bg-gray-50/50">
        <main className="max-w-screen-xl mx-auto px-4 py-6">
          <Breadcrumb />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-4">
            <div className="lg:col-span-8 space-y-8">
              <HeroSection />
              <DetailsSection />
            </div>
            <aside className="lg:col-span-4">
              <Sidebar />
            </aside>
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

export default ESIRegistration;
