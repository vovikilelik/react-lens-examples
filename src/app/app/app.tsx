import React from 'react';
import { appStore } from '../../store';
import { Counter, DebounceInput, Input } from '../../share/ui';

import * as styles from './app.module.less';


export const App: React.FC = () => {
	const form = appStore.go('form');

	return (
		<div className={styles.layout}>
			<Counter value={form.go('counter')} />
			<Input value={form.go('input')} />
			<DebounceInput value={form.go('input')} debounce={500} />
		</div>
	);
}
