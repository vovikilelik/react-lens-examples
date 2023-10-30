import { createStore } from '@vovikilelik/react-lens';

export interface Form {
	counter: number;
	input: string;
	inputs: string[];
	counters: number[];
	color: number;
}

export interface AppStore {
	form: Form;
}

const initForm: Form = {
	counter: 0,
	input: '',
	inputs: [],
	counters: [],
	color: 0
}

export const initData: AppStore = {
	form: initForm
}

export const appStore = createStore(initData);