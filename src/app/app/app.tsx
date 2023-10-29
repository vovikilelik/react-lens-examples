import React from 'react';
import { appStore } from '../../store';
import { Counter, DebounceInput, EditableList, Input } from '../../share/ui';
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

export const App: React.FC = () => {
	const form = appStore.go('form');

	const [color] = useLens(form.go('color'));


	return (
		<div className={styles.layout}>
			<Counter value={form.go('counter')} />
			<Input value={form.go('input')} />
			<DebounceInput value={form.go('input')} debounce={500} />
			<EditableList value={form.go('inputs')} renderer={textRenderer} onAdd={addText} />
			<EditableList value={form.go('counters')} renderer={counterRenderer} onAdd={addCounter} />

			<CoveredEditableList value={form.go('inputs')} renderer={textRenderer} onAdd={addTextCoverable} />

			<Input value={form.go('color').chain(colorTransformer)} />
			<div>{color}</div>
		</div>
	);
}
