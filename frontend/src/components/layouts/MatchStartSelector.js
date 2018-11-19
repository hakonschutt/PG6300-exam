import React from 'react';
import classNames from 'classnames';

import { Create, Join } from '@assets/images';
import { SingleMatchCard } from '@components';

type Props = {
	joinClick: Function,
	createClick: Function,
	isSelected: Boolean,
};

const MatchStartSelector = ({ joinClick, createClick, isSelected }: Props) => {
	const className = classNames('match-start-selector', {
		'is-selected': isSelected,
	});

	return (
		<div className={className}>
			<div className="match-start-selector-inner">
				<SingleMatchCard
					className="join-game"
					onClick={joinClick}
					Icon={Join}
					text="Join game"
				/>
				<SingleMatchCard
					className="create-game"
					onClick={createClick}
					Icon={Create}
					text="Create game"
				/>
			</div>
		</div>
	);
};

export default MatchStartSelector;
