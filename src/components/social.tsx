import React from 'react';
import t from '../assets/social/t.png';
import f from '../assets/social/f.png';
import './social.css';
import { TWITTER_LINK, FACEBOOK_LINK } from '../config';

const socialContent = [
	{ name: 'twitter', link: TWITTER_LINK, src: t },
	{
		name: 'facebook',
		link: FACEBOOK_LINK,
		src: f
	}
];

export const Social: React.FC = () => {
	return (
		<div className="social">
			{socialContent.map((item) => (
				<a key={item.name} href={item.link} target="_blank" rel="noopener noreferrer">
					<img className={item.name} src={item.src} alt="" />
				</a>
			))}
		</div>
	);
};
