import React from "react"
import HomeBannerImage from "./images/home-banner.png"
import hospitalityEquipmentImage from "./images/hospitality-eq.png"
import constructionEquipmentImage from "./images/construction-eq.png"
import forestryEquipmentImage from "./images/forestry-eq.png"
import aboutUsFamilyImage from "./images/about-us-family.png"
import bgLogo from "./images/bg-logo.svg"
import bgForm from "./images/bg-form.png"

const images = {
  bg: {
    logo: bgLogo,
    contactForm: bgForm,
  },
  home: {
    mainBanner: HomeBannerImage,
    hospitalityIndustry: hospitalityEquipmentImage,
    constructionIndustry: constructionEquipmentImage,
    forestryIndustry: forestryEquipmentImage,
    aboutUsFamily: aboutUsFamilyImage,
  },
}

export default images
