import React from 'react';
import team from './assets/teamblue2.jpg';
import { TWITTER_LINK } from './config';

export type PostType = {
	title: string;
	content: string | React.ReactElement;
	primaryContent?: string | React.ReactElement;
	imgSrc?: string;
	stub: string;
};

export const posts: PostType[] = [
	{
		title: '2020 Tryouts',
		primaryContent: (<>
			<p>We're excited to find the best players from the Southeast. 
			We are hoping to host tryouts late May or early June, but those dates may change due to Covid-19.</p>
		</>),
		content: <p>For the most up-to-date information, please follow us on 
			{' '}<a rel="noopener noreferrer" target="_blank" href={TWITTER_LINK}>Twitter</a>.</p>,
		imgSrc: team,
		stub: '2020-tryouts'
	},
	{
		title: '2020 Leadership',
		primaryContent: <p>
		Our new captains for the 2020 season are <b>Michael Fairley</b>, <b>John Stubbs</b>, and <b>Alex Trautman</b>. 
		We are excited to welcome back <b>Miranda Knowles</b> as head coach, and she will be joined by 
		assistants <b>TJ Martin</b> and alumnus <b>Kyle Stapleton</b>.
	</p>,
		content: <>
			<p>
				We are so grateful for the hard work of <b>Matt Smith</b> and <b>Christian Olsen</b>, both of whom will be
				stepping back from captaining this year to focus on playing. 
			</p>
			</>,

		stub: '2020-leadership'
	}
];
