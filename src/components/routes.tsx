import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PageWrapper from '../pages/PageWrapper';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import posts from '../pages/PostsList';
import Post from '../pages/Post';
import { PostsList } from '../pages/PostsList';

const Routes = () => {
	const dynamicRoutes = posts.map((post) => {
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

	return (
		<Switch>
			<Route exact path="/">
				<PageWrapper>
					<Home />
				</PageWrapper>
			</Route>
			<Route exact path="/about">
				<PageWrapper title="about">
					<About />
				</PageWrapper>
			</Route>{' '}
			<Route exact path="/contact">
				<PageWrapper title="contact">
					<Contact />
				</PageWrapper>
			</Route>{' '}
			<Route exact path="/Posts">
				<PageWrapper title="Posts">
					<PostsList />
				</PageWrapper>
			</Route>
			{dynamicRoutes}
		</Switch>
	);
};

export default Routes;
