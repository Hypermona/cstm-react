export const BrotherReducer = (state: any, action: any) => {
	switch (action.type) {
		case 'UpdateUser': {
			return { ...state, ...action.payload };
		}
	}
};
