import PrimaryTypo from '../atoms/Headings';
import PrimaryText from '../atoms/Text';
import { researchSections } from '../../constants/P&S';

function ResearchProblemAndSolution() {
  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <PrimaryTypo text="Problem & Solution" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {researchSections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 border border-gray-300 hover:scale-105 duration-300"
            >
              <h3 className={`text-2xl font-semibold mb-4 ${section.color}`}>
                {section.title}
              </h3>
              <PrimaryText text={section.content} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default ResearchProblemAndSolution
