import React, { useContext } from 'react';
import { ThemeContext } from '../Contexts/theme';

const Main = () => {
	const { theme, updateTheme } = useContext(ThemeContext);
	return (
		<div>
			{theme}
			<button
				onClick={() => {
					updateTheme?.('light');
				}}
			>
				change
			</button>
		</div>
	);
};

export default Main;
