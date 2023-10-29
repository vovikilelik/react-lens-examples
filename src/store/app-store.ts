import { createStore } from '@vovikilelik/react-lens';

export interface Form {
	counter: number;
	input: string;
}

export interface AppStore {
	form: Form;
}

const initData: AppStore = {
	form: {
		counter: 0,
		input: ''
	}
}

export const appStore = createStore(initData);