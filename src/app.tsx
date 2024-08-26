import { useRef, useState } from 'react';
import { ThemeContext } from './Contexts/theme';
import './app.scss';
import Main from './pages/Main';
import Brother from './components/brother';

export default function App() {
	const [theme, setTheme] = useState<'dark' | 'light'>('dark');
	const aRef = useRef<{ call: () => void }>(null);
	const updateTheme = (theme: 'dark' | 'light') => {
		setTheme(theme);
	};
	return (
		<ThemeContext.Provider value={{ theme, updateTheme }}>
			<button onClick={() => aRef.current?.call()}>magic</button>
			<Main />
			<Brother ref={aRef} />
		</ThemeContext.Provider>
	);
}
