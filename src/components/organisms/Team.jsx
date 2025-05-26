import { teamMembers } from '../../constants/Team';
import PrimaryTypo from '../atoms/Headings';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const TeamSection = () => {
  return (
    <section id="team" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PrimaryTypo text="Our Team" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              data-aos="zoom-in"
              data-aos-duration="3000"
              key={index}
              className="bg-[#fffefe] rounded-lg shadow-md overflow-hidden group hover:scale-105 transition duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                data-aos="zoom-in"
                data-aos-duration="3000"
                className="w-full h-48 object-contain group-hover:opacity-80 transition"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
                <div className="mt-4 flex space-x-3 opacity-0 group-hover:opacity-100 transition">
                  <a
                    href="#"
                    className="text-gray-500 hover:text-blue-500"
                    aria-label="LinkedIn"
                  >
                    <i className="fab fa-linkedin fa-lg"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-blue-400"
                    aria-label="Twitter"
                  >
                    <i className="fab fa-twitter fa-lg"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-800"
                    aria-label="GitHub"
                  >
                    <i className="fab fa-github fa-lg"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

