import { Lens } from '@vovikilelik/react-lens';
import React, { useMemo } from 'react';
import { List, ListProps } from '../list';

export class CoveredModelLens<T> extends Lens<T[]> {

	add(value: T) {
		this.set([...this.get(), value]);
	}
}

export interface CoveredEditableListProps<T = unknown> extends ListProps<T> {
	onAdd: (value: CoveredModelLens<T>) => void
}

export const CoveredEditableList = <T extends any>({ onAdd, value, ...listProps }: CoveredEditableListProps<T>) => {
	const model = useMemo(() => value.chain(CoveredModelLens<T>), [value]);

	return (
		<div>
			<button onClick={() => onAdd(model)}>Add</button>
			<List value={value} { ...listProps } />
		</div>
	);
};
