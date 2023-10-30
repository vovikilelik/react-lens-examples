import { Callbacks, Differ, createStore } from '@vovikilelik/react-lens';

const KEY = 'app';

const request = (event, node) => {
	return new Promise(resolve => {
		setTimeout(() => resolve(Math.random()), 1000);
	});
};

export interface RemoteModel {
	id: string;
	data?: any;
}

export const remoteStore = createStore({ id: '' } as RemoteModel)
	.on(
		Differ.check('id').changed(),
		Callbacks.async(request, (response, event, node) => node.go('data').set(response), 300)
	);
