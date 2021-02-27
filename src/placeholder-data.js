import React from "react"
import PlaceholderImage from "./images/placeholder.jpg"
import { Star } from "phosphor-react"

const placeholderData = {
  shortTitle: "Short Title",
  longTitle: "Mauris ultricies felis nec nisl consequat condimentum",
  sentence:
    "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; curabitur sit amet odio et nunc tincidunt aliquet.",
  paragraph:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pellentesque augue ac felis finibus auctor. Curabitur et enim felis. Donec porttitor cursus erat, sit amet commodo lacus faucibus quis. Pellentesque efficitur ultrices massa, sed elementum magna tincidunt a. Etiam vulputate, nulla a ultrices blandit, lacus arcu porta ipsum, in consectetur magna sem ut erat. In viverra ante in erat fringilla bibendum. Nam sed nibh vehicula purus dignissim pharetra. Vestibulum sed lectus nec diam posuere imperdiet. Phasellus gravida metus lectus, id aliquam ex dictum in.",
  button: "Call to Action",
  image: PlaceholderImage,
  link: {
    title: "Placeholder link",
    href: "/",
  },
  icon: <Star />,
  navData: [
    {
      title: "Understand leasing",
      href: "/",
    },
    {
      title: "About us",
      href: "/",
    },
    {
      title: "Industries we serve",
      href: "/",
    },
    {
      title: "FAQ",
      href: "/",
    },
    {
      title: "Contact us",
      href: "/",
    },
  ],
}

export default placeholderData
