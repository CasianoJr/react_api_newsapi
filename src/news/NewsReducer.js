export const ACTION = {
  FETCH_HEADLINES: "fetchTopHeadlineNews",
  SET_HEADLINES: "setTopHeadlineNews",
  SET_CATEGORY: "setCategory",
  SET_COUNTRY: "setCountry",
  SET_QUERY: "setQuery",
};

export const initialState = {
  isLoading: true,
  topHeadlineNews: "",
  country: "ph",
  category: "",
  source: "",
  query: "",
  pageSize: 100,
  error: "",
};

export function newsReducer(state, action) {
  switch (action.type) {
    case ACTION.FETCH_HEADLINES:
      return { ...state, isLoading: true };
    case ACTION.SET_HEADLINES:
      return { ...state, topHeadlineNews: action.payload, isLoading: false };
    case ACTION.SET_COUNTRY:
      return { ...state, country: action.payload, isLoading: true };
    case ACTION.SET_CATEGORY:
      return { ...state, category: action.payload, isLoading: true };
    case ACTION.SET_QUERY:
      return {
        ...state,
        category: "",
        query: action.payload,
      };
    default:
      return state;
  }
}
