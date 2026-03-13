import { tinaField } from "tinacms/dist/react";

export const Hero = ({ homeData }) => {
  return (
    <div className="display-grid">
      <article
        className="[ bg-img-vector display-grid-row-1-20 ]"
        data-tina-field={tinaField(homeData, "image")}
        style={{ backgroundImage: `url(${encodeURI(homeData.image)})` }}
      >
        <div className="overlay"></div>
      </article>
      <div className="display-grid-row-10-11 text-align-center pad-left-500 pad-right-500">
        <div
          className="text-600 md:text-800 font-serif weight-black color-white text-transform-uppercase"
          data-tina-field={tinaField(homeData, "heading")}
        >
          {homeData.heading}
        </div>
        <div
          className="text-500 md:text-600 weight-bold color-white"
          data-tina-field={tinaField(homeData, "subHeading")}
        >
          {homeData.subHeading}
        </div>
      </div>
    </div>
  );
};
