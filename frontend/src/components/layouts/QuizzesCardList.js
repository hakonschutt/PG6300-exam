import React from 'react';

import { QuestionMark } from '@assets/images';

type Props = {
	quizzes: Array,
	onClick: Function,
};

const QuizzesCardList = ({ quizzes = [], onClick }: Props) => {
	return (
		<div className="quizzes-card-list">
			<ul>
				{quizzes.map(quiz => (
					<li key={quiz.quizId} className="list-item">
						<div className="image-wrap">
							<QuestionMark />
						</div>
						<div className="text-wrap">
							<span>{quiz.title}</span>
							<a onClick={() => onClick(quiz)}>Create game</a>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default QuizzesCardList;
