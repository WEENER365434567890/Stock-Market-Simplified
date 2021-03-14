export const initialState = {
  symbol: "BA",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_SYMBOL":
      return {
        ...state,
        symbol: action.symbol,
      };

    default:
      return state;
  }
};

export default reducer;

//
export const initialState = {
  symbol: "BA",
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

    case "EMPTY_LIST":
      return {
        ...state,
        list: [],
      };

    case "REMOVE_FROM_LIST":
      const index = state.list.findIndex(
        (listItem) => listItem.id === action.id
      );
      let newList = [...state.list];

      if (index >= 0) {
        newList.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in List!`
        );
      }

      return {
        ...state,
        basket: newList,
      };

    default:
      return state;
  }
};

export default reducer;
