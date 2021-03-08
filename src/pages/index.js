import Head from "next/head";
import Tab from "./tab/[tab]";

const Home = ({ categoryList, b }) => {
  return (
    <div>
      <Head>
        <title>LINE TODAY</title>
        <link rel="icon" href="/icon.jpeg" />
      </Head>

      <Tab categoryList={categoryList} b={b} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch(`https://today.line.me/id/portaljson`);
  const data = await res.json();

  const categoryList = data.result.categoryList;
  const categories = data.result.categories;
  const top = categories.filter((v) => v.name === "TOP");
  const a = top[0].templates;
  const b = a.filter((v) => v.sections[0].articles.length > 1);
  const c = b.filter((v) => v.title);
  return {
    props: {
      categoryList,
      b: c,
    },
  };
};

export default Home;
