import React from 'react';
import { appStore } from '../../store';
import { Counter, DebounceInput, EditableList, Input } from '../../share/ui';

import * as styles from './app.module.less';
import { Lens } from '@vovikilelik/react-lens';
import { CoveredEditableList, CoveredEditableListProps, CoveredModelLens } from '../../share/ui/editable-list/covered-editable-list';

const textRenderer = value => <Input value={value} />
const addText = (value: Lens<string[]>) => value.set(value.get().concat(''));

const counterRenderer = value => <Counter value={value} />
const addCounter = (value: Lens<number[]>) => value.set(value.get().concat(0));

const addTextCoverable = (value: CoveredModelLens<string>) => value.add('Covered');

export const App: React.FC = () => {
	const form = appStore.go('form');

	return (
		<div className={styles.layout}>
			<Counter value={form.go('counter')} />
			<Input value={form.go('input')} />
			<DebounceInput value={form.go('input')} debounce={500} />
			<EditableList value={form.go('inputs')} renderer={textRenderer} onAdd={addText} />
			<EditableList value={form.go('counters')} renderer={counterRenderer} onAdd={addCounter} />

			<CoveredEditableList value={form.go('inputs')} renderer={textRenderer} onAdd={addTextCoverable} />
		</div>
	);
}
