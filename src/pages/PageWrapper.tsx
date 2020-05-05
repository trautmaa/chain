import React from 'react';

const PageWrapper: React.FC<{ title?: string }> = ({ children, title }) => {
	return (
		<div className="page-wrapper">
			{title && <h2>{title}</h2>}
			{children}
		</div>
	);
};

export default PageWrapper;
