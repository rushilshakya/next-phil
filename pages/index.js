import { Layout } from "../components/Layout";
import { MainBody } from "../components/MainBody";
import { Hero } from "@/components/Hero";
import client from "@/tina/__generated__/client";
import { useTina } from "tinacms/dist/react";

export async function getStaticProps() {
  const result = await client.queries.page({ relativePath: "home.md" });
  const posts = await client.queries.postConnection();

  return {
    props: { result, posts },
  };
}

export default function Home({ result, posts }) {
  const { data } = useTina(result);
  const { data: postData } = useTina(posts);

  return (
    <Layout>
      <Hero homeData={data.page} />
      <div className="gap-top-1000">
        <MainBody homeData={data.page} posts={postData.postConnection.edges} />
      </div>
    </Layout>
  );
}
