import { Lens, useLens } from '@vovikilelik/react-lens';
import React from 'react';

export interface InputProps {
	value: Lens<string>;
}

export const Input: React.FC<InputProps> = ({ value }) => {
	const [text, setText] = useLens(value);

	return <input value={text} onChange={e => setText(e.target.value)} />;
}
