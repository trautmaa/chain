import React from "react";
import { Switch, Route } from "react-router-dom";
import PageWrapper from "../pages/PageWrapper";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import posts from "../pages/PostsList";
import Post from "../pages/Post";
import { PostsList } from "../pages/PostsList";
import Rosters from "../pages/Rosters";

export const routesList = [
  { slug: "about", render: () => <About /> },
  { slug: "contact", render: () => <Contact /> },
  { slug: "rosters", render: () => <Rosters /> },
  { slug: "posts", render: () => <PostsList /> },
];

const Routes = () => {
  const postRoutes = posts.map((post) => {
    const { stub, title } = post;
    return (
      <Route key={stub} exact path={`/posts/${stub}`}>
        <PageWrapper title={title}>
          <div className="post-page">
            <Post post={post} />
          </div>
        </PageWrapper>
      </Route>
    );
  });

  const menuRoutes = routesList.map(({ slug, render }) => (
    <Route exact path={`/${slug}`}>
      <PageWrapper title={slug}>{render()}</PageWrapper>
    </Route>
  ));

  return (
    <Switch>
      <Route exact path="/">
        <PageWrapper>
          <Home />
        </PageWrapper>
      </Route>
      {menuRoutes}
      {postRoutes}
    </Switch>
  );
};

export default Routes;
