export const initialState = {
  symbol: "BABA",
  list: [],
};

export const getListTotal = (list) =>
  list?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SYMBOL":
      return {
        ...state,
        symbol: action.symbol,
      };

    case "ADD_TO_LIST":
      return {
        ...state,
        list: [...state.list, action.item],
      };

    case "REMOVE_FROM_LIST":
      return {
        ...state,
        list: action.list,
      };

    case "EMPTY_LIST":
      return {
        ...state,
        list: [],
      };

    default:
      return state;
  }
};

export default reducer;
