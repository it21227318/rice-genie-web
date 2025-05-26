import { technologies } from '../../constants/Technologies';
import PrimaryTypo from '../atoms/Headings';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const TechnologiesSection = () => {
  return (
    <section id="technologies" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PrimaryTypo text="Technologies" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center group hover:scale-105 duration-300"
            >
              <img
                data-aos="zoom-in"
                data-aos-duration="1000"
                src={tech.icon}
                alt={tech.name}
                className="h-16 w-16 mb-4 group-hover:scale-125 duration-300"
              />
              <h3 className="text-lg font-semibold text-gray-700 group-hover:scale-x-110 duration-300">
                {tech.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
