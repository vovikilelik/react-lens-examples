import { Lens, asArray, useLens } from '@vovikilelik/react-lens';
import React from 'react';

import * as styles from './list.module.less';

export interface ListProps<T = any> {
	value: Lens<T[]>;
	renderer: (item: Lens<T>) => React.ReactNode;
}

export const List: React.FC<ListProps> = ({ value, renderer }) => {
	useLens(value);

	return (
		<div className={styles.layout}>
			{asArray(value).map(renderer)}
		</div>
	);
}
