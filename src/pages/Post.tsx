import React from 'react';
import { PostType } from '../postsConfig';

export const Post: React.FC<{ post: PostType }> = ({ post }) => {
	const { primaryContent, content, imgSrc } = post;
	return (
		<div className="text-content">
			<img src={imgSrc} alt="" />
			{primaryContent}
			{content}
		</div>
	);
};
export default Post;
