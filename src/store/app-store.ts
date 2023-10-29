import { createStore } from '@vovikilelik/react-lens';

export interface Form {
	counter: number;
	input: string;
	inputs: string[];
	counters: number[];
}

export interface AppStore {
	form: Form;
}

const initData: AppStore = {
	form: {
		counter: 0,
		input: '',
		inputs: [],
		counters: []
	}
}

export const appStore = createStore(initData);