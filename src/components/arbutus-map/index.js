import React from "react"

const ArbutusMap = () => (
  <>
    <iframe
      style={{ maxWidth: "100%" }}
      title="Arbutus Capital"
      width="480"
      height="400"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
      id="gmap_canvas"
      src="https://maps.google.com/maps?width=480&height=400&hl=en&q=1530-355%20Burrard%20St%20Vancouver+(Arbutus%20Capital)&t=&z=15&ie=UTF8&iwloc=B&output=embed"
    ></iframe>
    <script
      type="text/javascript"
      src="https://embedmaps.com/google-maps-authorization/script.js?id=73baeeab12214d3c04c1d092482f86a4deb3d111"
    ></script>
  </>
)

export default ArbutusMap
