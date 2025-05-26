import PrimaryTypo from "../atoms/Headings";
import DocumentSection from "../molecules/DocumentsSection";
import PresentationSection from "../molecules/PresentationSection";

const DocumentsSection = () => {
  return (
    <section id="documents" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PrimaryTypo text="Documents" />
        <DocumentSection />
        <PresentationSection />
      </div>
    </section>
  );
};

export default DocumentsSection;
