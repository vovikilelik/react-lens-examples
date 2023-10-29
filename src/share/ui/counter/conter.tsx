import { Lens, useLens } from '@vovikilelik/react-lens';
import React from 'react';

export interface CounterProps {
	value: Lens<number>;
}

export const Counter: React.FC<CounterProps> = ({ value }) => {
	const [count, setCount] = useLens(value);

	return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
