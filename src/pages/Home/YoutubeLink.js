import React from "react";
import propTypes from "prop-types";

const YoutubeLink = ({ embedId }) => (
  <iframe
    width="560"
    height="315"
    src={`https://www.youtube.com/embed/${embedId}`}
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    title="Lionesses - Champions of Europe 2022"
  ></iframe>
);

// // for validation if required

// YoutubeLink.prototype = {
//   embedId: propTypes.string.isRequired
// };

export default YoutubeLink;
