import { Lens } from '@vovikilelik/react-lens';
import { AppStore, initData } from './app-store';

const KEY = 'app';

const getItem = (key, defaultValue) => {
	const value = localStorage.getItem(key);
	return value ? JSON.parse(value) : defaultValue;
}

export const localStore = new Lens<AppStore>(
	() => getItem(KEY, initData),
	value => localStorage.setItem(KEY, JSON.stringify(value))
);
