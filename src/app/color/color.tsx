import React, { useMemo } from 'react';
import { Input, Number } from '../../share/ui';
import { Lens, transform } from '@vovikilelik/react-lens';

const colorTransformer = transform<number, string>(
  v => `#${v.toString(16)}`,
  v => parseInt(v.substring(1), 16)
);

export interface ColorProps {
	value: Lens<number>;
}

export const Color: React.FC<ColorProps> = ({ value }) => {
	const colorAsString = useMemo(() => value.chain(colorTransformer), [value]);

	return (
		<div>
			<Input value={colorAsString} />
			<Number value={value} />
		</div>
	);
}
