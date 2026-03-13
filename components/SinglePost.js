import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { ListPosts } from "./ListPosts";
import { DownloadPDF } from "./DownloadPDF";
import globalValues from "@/content/globals/global-values.json";

export const SinglePost = ({ postData }) => {
  return (
    <div className="wrapper single-post gap-bottom-1000">
      <div className="pad-top-500 pad-bottom-800">
        <span className="color-dark-grey">
          <a className="link-no-decoration" href="/">
            Home
          </a>{" "}
          /{" "}
          {
            globalValues.categories.find((x) => x.value === postData.category)
              .display
          }
        </span>{" "}
        / {postData.title}
      </div>
      <span className="date">
        <span data-tina-field={tinaField(postData, "date")}>
          {new Date(postData?.date).toLocaleDateString("en-us", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </span>{" "}
        |{" "}
        <span data-tina-field={tinaField(postData)}>
          {postData?.tags
            ?.map(
              (tagValue) =>
                globalValues.tags.find((tag) => tag.value === tagValue).label
            )
            .join(", ")}
        </span>
      </span>
      <h2
        className="pad-top-300 pad-bottom-500"
        data-tina-field={tinaField(postData, "title")}
      >
        {postData?.title}
      </h2>
      <div data-tina-field={tinaField(postData, "body")}>
        <TinaMarkdown
          content={postData.body}
          components={{
            a: (props) => (
              <a rel="nofollow" target="_blank" {...props} href={props.url} />
            ),
          }}
        />
      </div>
      {postData.downloads?.length > 0 &&
        postData.downloads[0].language &&
        postData.downloads[0].pdf && (
          <div
            className="pad-top-800 pad-bottom-800"
            data-tina-field={tinaField(postData)}
          >
            <DownloadPDF downloads={postData.downloads} />
          </div>
        )}

      {postData.relatedResources?.length > 0 && (
        <ListPosts
          postListDetails={{
            title: "Related resources",
            items: postData.relatedResources.map(
              (relatedResources) => relatedResources.post
            ),
          }}
          anchor="#related-resources"
        />
      )}
    </div>
  );
};
