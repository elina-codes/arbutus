import React from "react"

import {
  LinkedinShareButton,
  TwitterShareButton,
  FacebookShareButton,
  EmailShareButton,
} from "react-share"

import {
  AiFillLinkedin as LinkedInIcon,
  AiFillTwitterSquare as TwitterIcon,
  AiFillFacebook as FacebookIcon,
  AiOutlineMail as EmailIcon,
} from "react-icons/ai"

const ShareButtons = ({
  title = "",
  url = "",
  twitterHandle = "",
  tags = [],
}) => {
  return (
    <div>
      <FacebookShareButton url={url}>
        <FacebookIcon color="#01446f" size={30} />
      </FacebookShareButton>

      <TwitterShareButton
        url={url}
        title={title}
        via={twitterHandle}
        hashtags={tags}
      >
        <TwitterIcon color="#01446f" size={30} />
      </TwitterShareButton>

      <LinkedinShareButton url={url}>
        <LinkedInIcon color="#01446f" size={30} />
      </LinkedinShareButton>

      <EmailShareButton url={url} title={title}>
        <EmailIcon color="#01446f" size={30} />
      </EmailShareButton>
    </div>
  )
}
export default ShareButtons
