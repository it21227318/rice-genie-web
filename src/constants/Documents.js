import TAF from "../assets/docs/RETAF_24-25J-125.pdf";
import RPaper from "../assets/docs/24-25J-125_ResearchPaper.pdf";
import FinalReport from "../assets/docs/24-25J-125_FinalReport.pdf";

import Prop from "../assets/docs/Project proposal presentation.ppt.pdf";
import PPOne from "../assets/docs/PP1.pdf";
import PPTwo from "../assets/docs/PPT2.pdf";

export const presentations = [
  { name: "Project Proposal", link: Prop, type: "Presentation" },
  { name: "Progress Presentation I", link: PPOne , type: "Presentation" },
  { name: "Progress Presentation II", link: PPTwo, type: "Presentation" },
  { name: "Final Presentation", link: "#", type: "Presentation" },
];

export const documents = [
  { name: "Topic Assessment", link: TAF, type: "Document" },
  { name: "Project Proposal", link: "https://mysliit.sharepoint.com/:f:/s/CDAPSubmissionCloud/EimYeQRxaTNGo-IXeLMusiYBORL5aEGtVR8ckn_-rmUd8A?e=3pPyo0", type: "Document" },
  { name: "Research Paper", link: RPaper, type: "Document" },
  { name: "Final Report", link: FinalReport, type: "Document" }
];