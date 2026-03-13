import { ListPosts } from "./ListPosts";
import { ResourceCard } from "./ResourceCard";
import globalValues from "@/content/globals/global-values.json";

export const MainBody = ({ homeData, posts }) => {
  const postsByCategory = posts.reduce((accumulator, currentValue) => {
    const currentCat = currentValue.node.category;
    if (!accumulator[currentCat]) {
      accumulator[currentCat] = [];
    }
    accumulator[currentCat].push(currentValue);
    return accumulator;
  }, {});

  return (
    <>
      <div className="wrapper" data-variant="no-padding">
        <div className="mhd-tiles">
          {homeData.resources.map((resource, i) => (
            <ResourceCard resource={resource} key={i} />
          ))}
        </div>
      </div>

      {globalValues.categories.map((category, i) => {
        if (postsByCategory[category.value])
          return (
            <ListPosts
              postListDetails={{
                title: category.display,
                items: postsByCategory[category.value].map((post) => post.node),
              }}
              key={category.value}
              anchor={category.value}
              grid={category.value === "researchAndPolicy" && "grid-4up"}
              backgroundColor={
                category.value === "researchAndPolicy" && "#fff6ee"
              }
            />
          );
      })}
    </>
  );
};
