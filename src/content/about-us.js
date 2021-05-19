import React from "react"
import { BsGem as AuthenticIcon } from "react-icons/bs"
import { GiPodiumWinner as ExperiencedIcon } from "react-icons/gi"
import {
  TiArrowShuffle as FlexibleIcon,
  TiHeartOutline as EmpatheticIcon,
} from "react-icons/ti"
import images from "src/images"

const pageSections = {
  ourStory: {
    title: "Our Story",
    subtitle: `Service for you since 1976`,
    description: `Founded in 1976, our business quickly grew because we have always held a unique position in the industry - we own our lease portfolio so credit decisions are made in-house. This has enabled us to provide our clients with creative and flexible equipment leasing solutions and has turned us into one of the top equipment leasing companies in Western Canada.
    
    Today, we are still a family-owned business and pride ourselves on the relationships we build with our clients and our brokers. Great customer service and empathy is of the utmost importance to us, and always will be. Our clients stick with us because it’s clear that we care and we listen when banks won’t.`,
    imageFirst: true,
    image: {
      src: images.about.family,
      position: "right",
      alt: "Arbutus family",
      alignTop: true,
    },
  },
  ourLeadershipTeam: {
    title: "Our Leadership Team",
    subtitle: "Personable title goes here",
  },
  ourValues: {
    title: "Our Values",
    subtitle: `Personable title goes here.`,
  },
  staff: [
    {
      name: "Michael Benda",
      image: images.about.michael,
      position: "Portfolio Manager & Partner",
    },
    {
      name: "Elizabeth Benda",
      image: images.about.elizabeth,
      position: "President & Chief Executive Officer",
    },
    {
      name: "Joey Benda",
      image: images.about.joey,
      position: "Credit Manager & Partner",
    },
  ],
  values: [
    {
      icon: AuthenticIcon,
      title: "Authentic",
      text: `At Arbutus Capital, we never forget the importance of being real and authentic. We find this openness allows us a deeper understanding of small businesses and helps us turn leasing approvals into outcomes that you need.`,
    },
    {
      icon: ExperiencedIcon,
      title: "Experienced",
      text: `At Arbutus Capital, we never forget the importance of being real and authentic. We find this openness allows us a deeper understanding of small businesses and helps us turn leasing approvals into outcomes that you need.`,
    },
    {
      icon: FlexibleIcon,
      title: "Flexible",
      text: `At Arbutus Capital, we never forget the importance of being real and authentic. We find this openness allows us a deeper understanding of small businesses and helps us turn leasing approvals into outcomes that you need.`,
    },
    {
      icon: EmpatheticIcon,
      title: "Empathetic",
      text: `At Arbutus Capital, we never forget the importance of being real and authentic. We find this openness allows us a deeper understanding of small businesses and helps us turn leasing approvals into outcomes that you need.`,
    },
  ],
}

export default pageSections
