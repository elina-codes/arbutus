import React from "react"
import HomeBannerImage from "./images/home-banner.png"
import hospitalityEquipmentImage from "./images/hospitality-eq.png"
import constructionEquipmentImage from "./images/construction-eq.png"
import forestryEquipmentImage from "./images/forestry-eq.png"
import gymEquipmentImage from "./images/gym-eq.png"
import healthEquipmentImage from "./images/health-eq.png"
import manufacturingEquipmentImage from "./images/manufacturing-eq.png"
import truckEquipmentImage from "./images/truck-eq.png"

import aboutUsFamilyImage from "./images/about-us-family.png"
import elizabethBendaImage from "./images/benda-elizabeth.png"
import michaelBendaImage from "./images/benda-michael.png"
import joeyBendaImage from "./images/benda-joey.png"

import step1Image from "./images/step1-define.png"
import step2Image from "./images/step2-apply.png"
import step3Image from "./images/step3-review.png"
import step4Image from "./images/step4-review.png"
import step5Image from "./images/step5-acquire.png"

import iconLogo from "./images/logo-icon.svg"
import navLogo from "./images/logo-wide.svg"
import bgLogo from "./images/bg-logo.svg"
import bgForm from "./images/bg-form.png"

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
  },
  home: {
    mainBanner: HomeBannerImage,
    aboutUsFamily: aboutUsFamilyImage,
  },
  hiwSteps: {
    step1: step1Image,
    step2: step2Image,
    step3: step3Image,
    step4: step4Image,
    step5: step5Image,
  },
}

export default images
