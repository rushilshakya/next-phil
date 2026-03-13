import { tinaField } from "tinacms/dist/react";
import globalValues from "@/content/globals/global-values.json";
import Image from "next/image";

export const ResourceCard = ({ resource }) => {
  return (
    <>
      <section className="card-resource [ pad-top-500 pad-bottom-500 pad-left-600 pad-right-600 ]">
        <Image
          src={encodeURI(resource.icon)}
          alt="icon"
          data-tina-field={tinaField(resource, "icon")}
          height={100}
          width={100}
        />
        <h3
          className="pad-top-500 text-transform-uppercase"
          data-tina-field={tinaField(resource, "category")}
        >
          {
            globalValues.categories.find(
              (cat) => cat.value === resource.category
            ).label
          }
        </h3>
        <p
          className="pad-top-300"
          data-tina-field={tinaField(resource, "description")}
        >
          {resource.description}
        </p>
        <div
          className="gap-top-500"
          data-tina-field={tinaField(resource, "buttonLabel")}
        >
          <a className="classic-red-button" href={`#${resource.category}`}>
            {resource.buttonLabel}
          </a>
        </div>
      </section>
    </>
  );
};
