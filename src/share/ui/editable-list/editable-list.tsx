import { Lens } from '@vovikilelik/react-lens';
import React from 'react';
import { List, ListProps } from '../list';

export interface EditableListProps<T> extends ListProps<T> {
	onAdd: (value: Lens<T[]>) => void
}

export const EditableList = <T extends any>({ onAdd, value, ...listProps }: EditableListProps<T>) => {
	return (
		<div>
			<button onClick={() => onAdd(value)}>Add</button>
			<List value={value} { ...listProps } />
		</div>
	);
}
