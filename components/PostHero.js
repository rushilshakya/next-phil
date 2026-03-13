import { tinaField } from "tinacms/dist/react";

export const PostHero = ({ homeData, postData }) => {
  return (
    <div className="display-grid">
      <article
        className="[ bg-post-img-vector display-grid-row-1-20 ]"
        data-tina-field={tinaField(postData, "image")}
        style={{
          backgroundImage: `url(${encodeURI(homeData.image)})`,
          backgroundPosition: "50% 30%",
        }}
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
          className="text-400 md:text-600 weight-bold color-white"
          data-tina-field={tinaField(homeData, "subHeading")}
        >
          {homeData.subHeading}
        </div>
      </div>
    </div>
  );
};
