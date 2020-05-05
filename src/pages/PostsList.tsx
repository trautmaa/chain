import React from 'react';
import './posts.scss';
import { posts, PostType } from '../postsConfig';
import chain from '../assets/chainpurple.png';
import { genPostUrl } from '../utils/utils';

export const PostsList: React.FC = () => {
	return <div className="posts-page">{posts.map((post) => <Post abbreviated post={post} />)}</div>;
};

export const Post: React.FC<{ post: PostType; abbreviated?: boolean }> = ({ post, abbreviated }) => {
	const content = abbreviated && post.primaryContent ? post.primaryContent : post.content;

	return (
		<a href={genPostUrl(post.stub)}>
			<div className="post">
				<div className="text">
					<h2>{post.title}</h2>
					<p>{content}</p>
				</div>
				{post.imgSrc && <img src={post.imgSrc} alt={post.title} />}
				{!post.imgSrc && (
					<img
						style={{
							width: 'auto',
							height: 'auto',
							maxWidth: '15rem'
						}}
						src={chain}
						alt={post.title}
					/>
				)}
			</div>
		</a>
	);
};

export default posts;
