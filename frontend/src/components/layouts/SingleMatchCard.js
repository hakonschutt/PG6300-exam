import React from 'react';

type Props = {
	className: String,
	onClick: Function,
	Icon: React.Node,
	text: String,
};

const SingleMatchCard = ({ className, onClick, Icon, text }: Props) => {
	return (
		<div className={className}>
			<a onClick={onClick}>
				<div className="image-wrap">
					<Icon />
				</div>
				<div className="text-wrap">
					<span>{text}</span>
				</div>
			</a>
		</div>
	);
};

export default SingleMatchCard;
