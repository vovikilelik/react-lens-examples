import { Lens, TimeoutSet, useLensDebounce } from '@vovikilelik/react-lens';
import React from 'react';
import { InputProps } from '../input';

export interface DebounceInputProps extends InputProps {
	debounce?: number | TimeoutSet;
}

export const DebounceInput: React.FC<DebounceInputProps> = ({ value, debounce = 0 }) => {
	const [text, setText] = useLensDebounce(value, debounce);

	return <input value={text} onChange={e => setText(e.target.value)} />;
}
