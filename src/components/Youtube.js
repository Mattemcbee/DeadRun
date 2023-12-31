import React from "react";
import PropTypes from "prop-types";
import '../App.css'

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive " style={{paddingLeft:'auto', paddingRight:'20px'}}>
    <iframe
      width="100%"
      height="auto"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
    
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;