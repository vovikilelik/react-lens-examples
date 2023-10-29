import React from 'react';
import { Counter } from '../../share/ui/counter/conter';
import { appStore } from '../../store';

export const App: React.FC = () => {
	return (
		<div>
			<Counter value={appStore.go('form').go('counter')} />
		</div>
	);
}
