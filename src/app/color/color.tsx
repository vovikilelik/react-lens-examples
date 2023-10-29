import React, { useMemo } from 'react';
import { appStore } from '../../store';
import { Counter, DebounceInput, EditableList, Input, Number } from '../../share/ui';
import { Lens, transform, useLens } from '@vovikilelik/react-lens';
import { CoveredEditableList, CoveredModelLens } from '../../share/ui/editable-list/covered-editable-list';

import * as styles from './app.module.less';

const textRenderer = (value, i) => <Input key={i} value={value} />
const addText = (value: Lens<string[]>) => value.set(value.get().concat(''));

const counterRenderer = (value, i) => <Counter key={i} value={value} />
const addCounter = (value: Lens<number[]>) => value.set(value.get().concat(0));

const addTextCoverable = (value: CoveredModelLens<string>) => value.add('Covered');

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
