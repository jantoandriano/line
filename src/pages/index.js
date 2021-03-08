import Head from "next/head";
import Tab from "./tab/[tab]";

const Home = ({ categoryList }) => {
  return (
    <div>
      <Head>
        <title>LINE TODAY</title>
        <link rel="icon" href="/icon.jpeg" />
      </Head>

      <Tab categoryList={categoryList} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch(`https://today.line.me/id/portaljson`);
  const data = await res.json();

  const categoryList = data.result.categoryList;
  const categories = data.result.categories;
  const top = categories.filter((v) => v.name === "TOP");

  return {
    props: {
      categoryList,
      categories,
      top,
    },
  };
};

export default Home;
