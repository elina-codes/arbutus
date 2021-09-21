import hospitalityEquipmentImage from "./images/hospitality-eq.jpg"
import constructionEquipmentImage from "./images/construction-eq.jpg"
import forestryEquipmentImage from "./images/forestry-eq.png"
import gymEquipmentImage from "./images/gym-eq.jpg"
import healthEquipmentImage from "./images/health-eq.jpg"
import manufacturingEquipmentImage from "./images/manufacturing-eq.jpg"
import truckEquipmentImage from "./images/truck-eq.jpg"
import anythingElseImage from "./images/drum.jpg"

import aboutUsFamilyImage from "./images/about-us-family.jpg"
import elizabethBendaImage from "./images/benda-elizabeth.jpg"
import michaelBendaImage from "./images/benda-michael.jpg"
import joeyBendaImage from "./images/benda-joey.jpg"

import step1Image from "./images/step1-define.jpg"
import step2Image from "./images/step2-apply.jpg"
import step3Image from "./images/step3-review.jpg"
import step4Image from "./images/step4-review.jpg"
import step5Image from "./images/step5-acquire.jpg"

import iconLogo from "./images/logo-icon.svg"
import navLogo from "./images/logo-wide.svg"
import bgLogo from "./images/bg-logo.svg"
import bgForm from "./images/bg-form.jpg"
import notFound from "./images/404.svg"

const images = {
  bg: {
    logo: bgLogo,
    contactForm: bgForm,
    iconLogo,
    navLogo,
  },
  about: {
    family: aboutUsFamilyImage,
    elizabeth: elizabethBendaImage,
    michael: michaelBendaImage,
    joey: joeyBendaImage,
  },
  equipment: {
    hospitalityIndustry: hospitalityEquipmentImage,
    constructionIndustry: constructionEquipmentImage,
    forestryIndustry: forestryEquipmentImage,
    gymIndustry: gymEquipmentImage,
    healthIndustry: healthEquipmentImage,
    manufacturingIndustry: manufacturingEquipmentImage,
    truckIndustry: truckEquipmentImage,
    anythingElse: anythingElseImage,
  },
  home: {
    aboutUsFamily: aboutUsFamilyImage,
  },
  hiwSteps: {
    step1: step1Image,
    step2: step2Image,
    step3: step3Image,
    step4: step4Image,
    step5: step5Image,
  },
  notFound,
}

export default images
