import React from "react";
import { Link } from "react-router-dom";

const Property = (props) => {
  const propImgSource = props.property.imgSource;
  const propBedCount = props.property.bedsCount;
  const propAddress = props.property.address;
  const propPrice = props.property.price;
  const propDescription = props.property.description;

  return (
    <article type="card" className="house-card">
      <div className="house-img-container">
        <img
          className="house-img"
          mode="vertical"
          src={props.property.imgSource}
        />
      </div>
      <div className="house-info">
        <div className="house-details">
          <svg
            className="bed-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="40"
            viewBox="0 96 960 960"
            width="40"
          >
            <path d="M33.862 865.087v-603.63h72.804V662h344.95V344.79H770q64.407 0 110.272 45.866 45.866 45.865 45.866 110.272v364.159h-72.804V737.754H106.666v127.333H33.862Zm241.159-253.493q-48.003 0-80.976-32.935-32.972-32.936-32.972-80.939 0-48.002 32.935-80.799 32.935-32.798 80.938-32.798t80.8 32.76q32.797 32.76 32.797 80.762 0 48.003-32.759 80.976-32.76 32.973-80.763 32.973ZM524.58 662h328.754V500.982q0-34.429-24.479-58.909-24.48-24.479-58.855-24.479H524.58V662ZM274.927 541.739q18.334 0 31.167-12.833 12.833-12.833 12.833-31.167 0-18.333-12.833-31.167-12.833-12.833-31.167-12.833-18.333 0-31.166 12.833-12.834 12.834-12.834 31.167 0 18.334 12.834 31.167 12.833 12.833 31.166 12.833Zm0 0q-18.333 0-31.166-12.833-12.834-12.833-12.834-31.167 0-18.333 12.834-31.167 12.833-12.833 31.166-12.833 18.334 0 31.167 12.833 12.833 12.834 12.833 31.167 0 18.334-12.833 31.167-12.833 12.833-31.167 12.833ZM524.58 417.594H770q34.375 0 58.855 24.479 24.479 24.48 24.479 58.855V662H524.58V417.594Z" />
          </svg>
          <p className="bedroom-info">{props.property.bedsCount} Bedrooms</p>
        </div>
        <div className="house-description">
          <h1 className="house-address">{props.property.address}</h1>
          <p>{props.property.description}</p>
        </div>
        <div className="house-footer">
          <p className="house-price">$ {props.property.price}</p>

          <Link
            className="booking-btn link"
            to={`/property/${props.property.id}`}
          >
            Book a meeting
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Property;
