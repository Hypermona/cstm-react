import { createContext } from 'react';
interface ITheme {
	theme: string;
	updateTheme?: (theme: 'dark' | 'light') => void;
}
export const ThemeContext = createContext<ITheme>({
	theme: '',
	updateTheme: undefined,
});
