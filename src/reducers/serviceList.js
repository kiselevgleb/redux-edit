import { nanoid } from 'nanoid';
import { ADD_SERVICE, REMOVE_SERVICE } from '../actions/actionTypes'
const initialState = [
  { id: nanoid(), name: 'Замена стекла', price: 21000 },
  { id: nanoid(), name: 'Замена дисплея', price: 25000 },
];

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE:
      const { name, price, idNote } = action.payload;
      console.log(idNote)
      let newState = state.filter(service => service.id !== idNote);
      return [...newState, { id: nanoid(), name, price: Number(price) }];


    case REMOVE_SERVICE:
      const { id } = action.payload;
      return state.filter(service => service.id !== id);

    default:
      return state;
  }
}
