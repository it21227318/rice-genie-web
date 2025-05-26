import PrimaryText from "../atoms/Text";
import { methodologySections } from "../../constants/Methodology";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Methodology = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Research Methodology
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {methodologySections.map((section, index) => (
            <div
              key={index}
              className={`bg-gray-${
                index === 0 ? "100" : "white"
              } border border-gray-300 rounded-lg shadow-lg p-6`}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {section.title}
              </h3>
              {section.image ? (
                <div data-aos="zoom-in" data-aos-duration="3000">
                  <img
                    src={section.image}
                    alt={section.alt}
                    className="w-full h-auto rounded-md"
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    {section.caption}
                  </p>
                </div>
              ) : (
                <PrimaryText text={section.content} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
