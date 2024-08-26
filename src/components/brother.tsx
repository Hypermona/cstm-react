import React, { forwardRef, useImperativeHandle, useReducer } from 'react';
import { BrotherReducer } from '../Reducers/Brother';
type Props = {};
const Brother = forwardRef<any, Props>((props, ref) => {
	const [state, dispatch] = useReducer(BrotherReducer, { brother: '', age: 0 });
	useImperativeHandle(ref, () => ({
		call: () =>
			dispatch({
				type: 'UpdateUser',
				payload: { brother: 'Called From Parent', age: 50 },
			}),
	}));

	return (
		<div>
			<p>brother: {state.brother}</p>
			<p>age {state.age}</p>
			<button
				onClick={() =>
					dispatch({
						type: 'UpdateUser',
						payload: { brother: 'HI Sit', age: 20 },
					})
				}
			>
				Update
			</button>
		</div>
	);
});

export default Brother;
