import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Our Services",
  desc: "",
  image: benefitOneImg,
  bullets: [
    {
      title: "Software Development Consulting",
      desc: "Custom solutions to align with your business strategy.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Infrastructure Planning & Optimization",
      desc: "Scalable, robust, and cost-effective infrastructure solutions.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Our Services",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Web & Mobile Application Strategy",
      desc: "From conception to deployment, we're with you at every step.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Tech Stack Evaluation",
      desc: "Ensuring you use the right technology for optimal performance and ROI.",
      icon: <AdjustmentsHorizontalIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
