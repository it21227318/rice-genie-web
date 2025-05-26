import { PrimaryButton } from '../atoms/Buttons';
import { documents } from '../../constants/Documents';
import { FaFilePdf } from 'react-icons/fa';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function DocumentSection() {
  return (
    <div>
      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Documents</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((item, index) => (
            <li
              data-aos="zoom-in"
              data-aos-duration="2500"
              key={index}
              className="flex flex-col justify-between items-center p-4 group bg-gray-100 hover:scale-105 rounded-md shadow-md min-h-[200px] transform transition duration-300 hover:shadow-lg hover:bg-gray-200"
            >
              <div
                className="flex flex-col items-center"
                data-aos="zoom-out"
                data-aos-duration="3000"
              >
                <FaFilePdf className="text-red-500 mb-2 w-16 h-16 group-hover:scale-110 duration-300" />
                <span className="text-gray-700 font-medium text-center group-hover:scale-110 duration-300">
                  {item.name}
                </span>
              </div>
              <div className="mt-4">
                <div className="mt-4">
                  <PrimaryButton text="Download" link={item.link} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DocumentSection
