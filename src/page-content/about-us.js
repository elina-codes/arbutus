import { BsGem as QualityIcon } from "react-icons/bs"
import { FaHandshake as TrustIcon } from "react-icons/fa"
import { GiThreeFriends as PeopleIcon } from "react-icons/gi"
import images from "src/images"

const pageSections = {
  ourStory: {
    title: "Our Story",
    subtitle: `Service for you since 1976`,
    description: `Founded in 1976, our business quickly grew because we have always held a unique position in the industry - we own our lease portfolio so credit decisions are made in-house. This has enabled us to provide our clients with creative and flexible equipment leasing solutions and has turned us into one of the top equipment leasing companies in Western Canada.
    
    Today, we are still a family-owned business and pride ourselves on the relationships we build with our clients and our brokers. Great customer service and empathy is of the utmost importance to us, and always will be. Our clients stick with us because it's clear that we care and we listen when banks won't.`,
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
    subtitle: "Behind every small business is a family",
  },
  ourValues: {
    title: "Our Values",
    subtitle: `Ideals That Guide Us`,
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
      icon: TrustIcon,
      title: "Trust",
      text: `We understand the importance of integrity and communication and we hold ourselves to the highest standards in order to build trusting and long-lasting relationships with our brokers and clients.`,
    },
    {
      icon: PeopleIcon,
      title: "People",
      text: `By adopting a people-first mindset, we encourage our team-members to grow personally and professionally, enabling each other to manage the customer's experience better than anybody else in the leasing industry.`,
    },
    {
      icon: QualityIcon,
      title: "Quality",
      text: `Our years of experience dealing with owner operators and small businesses, combined with personalized customer service and understanding throughout the lease process is why so many of our brokers and customers continue to work with us. We consider our clients and brokers to be part of the Arbutus family.`,
    },
  ],
}

export default pageSections
