import { Callbacks, Differ, createStore } from '@vovikilelik/react-lens';

const request = (event, node) => new Promise(resolve => {
	setTimeout(() => resolve(Math.random()), 1000);
});

const assembler = (response, event, node) =>
	node.go('data').set(response);

export interface RemoteModel {
	id: string;
	data?: any;
}

export const remoteStore = createStore({ id: '' } as RemoteModel)
	.on(
		Differ.check('id').changed(),
		Callbacks.async(request, assembler, 300)
	);
