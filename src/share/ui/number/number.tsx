import { Lens, useLens } from '@vovikilelik/react-lens';
import React from 'react';

export interface NumberProps {
	value: Lens<number>;
}

export const Number: React.FC<NumberProps> = ({ value }) => {
	const [int, setInt] = useLens(value);

	return <input value={int} onChange={e => setInt(parseInt(e.target.value))} />;
}
