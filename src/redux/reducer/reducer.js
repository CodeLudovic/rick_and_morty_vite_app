import { ADD_FAV, REMOVE_FAV } from "../type/type";

export const initialState = {
	myFavorites: [],
};
/* eslint-disable */
export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_FAV:
			return {
				myFavorites: [...state.myFavorites, action.payload],
			};
		case REMOVE_FAV:
			const respon = state.myFavorites.filter(
				(character) => character.id !== parseInt(action.payload)
			);
			return {
				myFavorites: respon,
			};
		default:
			return state;
	}
};
