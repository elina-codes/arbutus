import React from "react"

const ArbutusMap = () => (
  <>
    <iframe
      style={{ maxWidth: "100%" }}
      title="Arbutus Capital"
      width="480"
      height="400"
      frameBorder="0"
      scrolling="no"
      marginHeight="0"
      marginWidth="0"
      id="gmap_canvas"
      loading="lazy"
      src="https://maps.google.com/maps?width=480&amp;height=400&amp;hl=en&amp;q=1530-355%20Burrard%20St%20Vancouver+(Arbutus%20Capital)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
    ></iframe>
    <script
      type="text/javascript"
      src="https://embedmaps.com/google-maps-authorization/script.js?id=73baeeab12214d3c04c1d092482f86a4deb3d111"
    ></script>
  </>
)

export default ArbutusMap
