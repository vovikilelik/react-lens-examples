import { Callbacks, Differ, Lens, createStore } from '@vovikilelik/react-lens';
import { AppStore, initData } from './app-store';

const KEY = 'app';

const request = (event, node) => {
	return new Promise(resolve => {
		setTimeout(() => resolve(Math.random()), 1000);
	});
};

export interface RemoteModel {
	id?: string;
	data?: any;
}

export const remoteStore = createStore({} as RemoteModel)
	.on(Differ.check('id').changed(), Callbacks.async(request, (response, event, node) => node.go('data').set(response)))
