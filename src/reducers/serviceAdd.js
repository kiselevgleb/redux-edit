import { CHANGE_SERVICE_FIELD, EDIT_SERVICE } from '../actions/actionTypes'
const initialState = {
  name: '',
  price: '',
  id: '',
};

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    case EDIT_SERVICE:
      const { nameNote, price, id } = action.payload;
      return { ...state, ['name']: nameNote, ['price']: price, ['id']: id };
    default:
      return state;
  }
}
