import React from "react";
import Head from "next/head";
import Header from "../../components/Header.js";
import CarouselComp from "../../components/CarouselComp.js";
import TopNews from "../../components/TopNews.js";
import Foryou from "../../components/Foryou";

function Tab({ categoryList, b }) {
  const ForYouList = b.map((v) => (
    <Foryou key={v.id} data={v.sections[0].articles} title={v.title} />
  ));

  return (
    <div>
      <Head>
        <title>LINE TODAY</title>
        <link rel="icon" href="/icon.jpeg" />
      </Head>
      <Header categoryList={categoryList} />
      <CarouselComp data={b} />
      <TopNews data={b} />
      {ForYouList}
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const { tab } = context.query;
  const res = await fetch(`https://today.line.me/id/portaljson`);
  const data = await res.json();

  const categoryList = data.result.categoryList;
  const categories = data.result.categories;
  const temp = categories.filter((v) => v.name === tab);
  const a = temp[0].templates;
  const b = a.filter((v) => v.sections[0].articles.length > 1);
  const c = b.filter((v) => v.title);
  return {
    props: {
      categoryList,
      b: c,
    },
  };
};

export default Tab;
