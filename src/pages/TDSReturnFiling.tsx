
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/tds-return-filing/Breadcrumb";
import HeroSection from "@/components/tds-return-filing/HeroSection";
import DetailsSection from "@/components/tds-return-filing/DetailsSection";
import DocumentsSection from "@/components/tds-return-filing/DocumentsSection";
import Sidebar from "@/components/tds-return-filing/Sidebar";

const TDSReturnFiling = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Breadcrumb />
      </div>
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 min-w-0 space-y-8">
            <HeroSection />
            <DetailsSection />
            <DocumentsSection />
          </div>
          <div className="w-full lg:w-96 flex-shrink-0">
            <Sidebar />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TDSReturnFiling;
