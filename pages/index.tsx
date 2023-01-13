import Hero from "@/components/homepage/hero";
import FeaturedPosts from "@/components/homepage/featured-posts";

import React, { Fragment } from "react";

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts />
    </Fragment>
  );
};

export default HomePage;
