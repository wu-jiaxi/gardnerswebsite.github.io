import React, { Component } from "react";
import video from "./colors.mp4";
import "./video.css";

export default class Video extends Component {
  render() {
    return (
      <div>
        <video width="1275" height="750" autoPlay muted>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    );
  }
}
