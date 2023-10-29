import { createStore } from '@vovikilelik/react-lens';

export interface Form {
	counter: number;
}

export interface AppStore {
	form: Form;
}

const initData: AppStore = {
	form: {
		counter: 0
	}
}

export const appStore = createStore(initData);