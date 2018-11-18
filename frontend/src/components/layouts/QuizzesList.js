import React from 'react';

type Props = {
	quizzes: Array,
	onClick: Function,
	buttonText: String,
};

const QuizzesList = ({ quizzes = [], onClick, buttonText }: Props) => {
	return (
		<div className="quizzes-list">
			<ul>
				{quizzes.map(quiz => (
					<li key={quiz.quizId} className="list-item">
						<div className="list-item-inner">
							<span>{quiz.title}</span>
							<a onClick={() => onClick(quiz)}>{buttonText}</a>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default QuizzesList;
