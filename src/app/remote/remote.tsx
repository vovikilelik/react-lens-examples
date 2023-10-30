import React from 'react';
import { Input } from '../../share/ui';
import { Lens, useLens } from '@vovikilelik/react-lens';
import { RemoteModel } from '../../store';

export interface RemoteProps {
	value: Lens<RemoteModel>;
}

export const Remote: React.FC<RemoteProps> = ({ value }) => {
	const [model] = useLens(value);

	return (
		<div>
			<Input value={value.go('id')} />
			<div>{model.data}</div>
		</div>
	);
}
