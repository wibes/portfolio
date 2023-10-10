import { ProjectCard } from "./ProjectCard";
import building from "../assets/images/building.png";
import healthcare from "../assets/images/healthcare.png";
import ecom from "../assets/images/ecommerce.jpg";

const projectDescription = [
  {
    key: 1,
    icon: building,
    projectName: "Real State",
    projectDescription:
      "Project involved the development of hybrid application. It can work both on iOS and Android platform. It is an inspection application, which is used to appraise/inspect a property. Using this application an appraiser can add details of properties along with their photographs. In the end, appraiser can complete that property and export its inspection details in the form of excel sheet. This application is currently for EMEA (Germany, UK and Ireland) and US.",
  },
  {
    key: 2,
    icon: healthcare,
    projectName: "Health Care",
    projectDescription:
      "Project involved the development of hybrid application. It can work both on iOS and Android platform. This application manages all the patients’ data like their personal information, medical reports and forms. It can also receive the patient referrals from different hospitals. Using it we can also send messages to different nursing homes and hospitals.",
  },
  {
    key: 3,
    icon: ecom,
    projectName: "E Commerce",
    projectDescription:
      "Project involved developing e-commerce application that contains various brands like Mondelez, Coco-Cola and Heineken. This application is used by retailers to purchase the products directly from the above-mentioned brands",
  },
];

export const Projects = () => {
  return (
    <div class="flex justify-center items-center">
      <div class="flex-col">
        <h1 class="text-white font-semibold text-3xl">Projects</h1>
        <div class="flex grid-cols-3">
          {projectDescription.map((project) => (
            <ProjectCard {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};
