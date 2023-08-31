import { ADD_FAV, REMOVE_FAV, ORDER, FILTER } from "../type/type";

export const initialState = {
	myFavorites: [],
	allCharacters: [],
};
/* eslint-disable */
export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_FAV:
			return {
				...state,
				allCharacters: [...state.myFavorites, action.payload],
				myFavorites: [...state.myFavorites, action.payload],
			};

		case REMOVE_FAV:
			const respon = state.myFavorites.filter(
				(character) => character.id !== parseInt(action.payload)
			);
			const respon2 = state.allCharacters.filter(
				(character) => character.id !== parseInt(action.payload)
			);
			return {
				...state,
				myFavorites: respon,
				allCharacters: respon2,
			};

		case FILTER:
			if (action.payload !== "All") {
				let copy = [...state.allCharacters];
				const result = copy.filter(
					(character) => character.gender === action.payload
				);
				return {
					...state,
					myFavorites: [...result],
				};
			} else {
				return {
					...state,
					myFavorites: [...state.allCharacters],
				};
			}

		case ORDER:
			if (action.payload === "A") {
				const copy2 = state.myFavorites;
				const result = copy2.sort((a, b) => a.id - b.id);
				return {
					...state,
					myFavorites: [...result],
				};
			}

			if (action.payload === "D") {
				const copy2 = state.myFavorites;
				const result = copy2.sort((a, b) => b.id - a.id);
				return {
					...state,
					myFavorites: [...result],
				};
			}
		default:
			return { ...state };
	}
};
