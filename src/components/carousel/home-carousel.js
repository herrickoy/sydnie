import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import p1 from "../../../static/images/1.png";
import p2 from "../../../static/images/2.png";
import p3 from "../../../static/images/3.png";
import p4 from "../../../static/images/4.png";
import p5 from "../../../static/images/5.png";

export default () => (
  <Carousel autoPlay width="500px" height="500px">
    <div>
      <img alt="" src={p1} />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img alt="" src={p2} />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img alt="" src={p3} />
      <p className="legend">Legend 3</p>
    </div>
    <div>
      <img alt="" src={p4} />
      <p className="legend">Legend 4</p>
    </div>
    <div>
      <img alt="" src={p5} />
      <p className="legend">Legend 5</p>
    </div>
  </Carousel>
);
