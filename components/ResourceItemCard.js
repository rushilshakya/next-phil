import { tinaField } from "tinacms/dist/react";
import globalValues from "@/content/globals/global-values.json";
import Image from "next/image";

export const ResourceItemCard = ({ resource }) => {
  return (
    <section className="card-resource-item">
      <a
        href={
          resource.type === "link"
            ? resource?.linkUrl
            : `/post/${resource._sys.filename}`
        }
        target={resource.type === "link" ? "_blank" : undefined}
        rel={resource.type === "link" ? "noopener noreferrer" : undefined}
      >
        <div
          className="member_img display-grid pad-bottom-300"
          data-tina-field={tinaField(resource, "image")}
        >
          <Image
            src={
              resource?.image !== ""
                ? encodeURI(resource.image)
                : "/img/blank.svg"
            }
            // src={"/img/blank.svg"}
            alt="our_team"
            width={300}
            height={300}
            className="display-grid-row-1-20"
          />
          <div
            className="display-grid-row-18-20"
            data-tina-field={tinaField(resource, "typeOfResource")}
          >
            <span className="resource-type-display gap-left-300 gap-bottom-300">
              {resource?.typeOfResource}
            </span>
          </div>
        </div>
      </a>
      <span className="date" data-tina-field={tinaField(resource, "date")}>
        {new Date(resource?.date).toLocaleDateString("en-us", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })}
      </span>
      <h2
        className="pad-top-300"
        data-tina-field={tinaField(resource, "title")}
      >
        {resource.type === "link" ? (
          <a href={resource?.linkUrl} target="_blank" rel="noopener noreferrer">
            {resource?.title}
          </a>
        ) : (
          <a href={`/post/${resource._sys.filename}`}>{resource?.title}</a>
        )}
      </h2>
      <span
        className="tag pad-top-300"
        data-tina-field={tinaField(resource, "tags")}
      >
        Tags:{" "}
        {resource?.tags
          ?.map(
            (tagValue) =>
              globalValues.tags.find((tag) => tag.value === tagValue).label
          )
          .join(", ")}
      </span>
      <p
        className="pad-top-300"
        data-tina-field={tinaField(resource, "summary")}
      >
        {resource?.summary}
      </p>
    </section>
  );
};
