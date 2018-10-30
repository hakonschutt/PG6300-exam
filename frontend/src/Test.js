// @flow
import React from 'react';

type Props = {
	name: string
}

const Test = ({ name }: Props) => {
	return <h1>{name}</h1>;
};

export default Test;
