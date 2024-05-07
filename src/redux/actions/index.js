export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const SEARCH_JOB = "SEARCH_JOB";

export const addToFavouriteAction = (data) => ({
  type: ADD_TO_FAVOURITE,
  payload: data,
});

export const removeFromFavouriteAction = (i) => ({
  type: REMOVE_FROM_FAVOURITE,
  payload: i,
});

export const searchJobAction = (query) => {
  return async (dispatch, getState) => {
    console.log("GET State", getState());
    const baseEndpoint =
      "https://strive-benchmark.herokuapp.com/api/jobs?search=";

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();

        dispatch({ type: SEARCH_JOB, payload: data });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
