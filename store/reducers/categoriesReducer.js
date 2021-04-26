import { GET_CATGORY_SUCCESS } from "../../constants/categoriesConstants";

const initialValues = {
  categories: []
}

const categoriesReducer = (state = initialValues, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_CATGORY_SUCCESS:
      return { ...state, categories: payload };
    default:
      return state;
  }
}
export default categoriesReducer
