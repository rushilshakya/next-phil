import { Layout } from "@/components/Layout";
import { PostHero } from "@/components/PostHero";
import { SinglePost } from "@/components/SinglePost";
// import { getAllContentIds } from "@/lib/getData";
// import { getDefaultContentType } from "@/lib/utilities";
import client from "@/tina/__generated__/client";
import { useTina } from "tinacms/dist/react";

// const contentType = getDefaultContentType();

export default function Post({ blogPost, homePost }) {
  const { data: postData } = useTina(blogPost);
  const { data: homeData } = useTina(homePost);
  return (
    <Layout>
      <PostHero homeData={homeData.page} postData={postData.post} />
      <SinglePost postData={postData.post} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const posts = await client.queries.postConnection();
  const paths = posts.data.postConnection.edges.map((edge) => ({
    params: { slug: edge.node._sys.filename },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const blogPost = await client.queries.post({
    relativePath: `${params.slug}.md`,
  });
  const homePost = await client.queries.page({ relativePath: "home.md" });

  return {
    props: {
      blogPost,
      homePost,
    },
  };
}
