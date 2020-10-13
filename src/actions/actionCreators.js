import { ADD_SERVICE, REMOVE_SERVICE, CHANGE_SERVICE_FIELD, EDIT_SERVICE } from './actionTypes';

export function addService(name, price, idNote) {
  return { type: ADD_SERVICE, payload: { name, price, idNote } };
}

export function removeService(id) {
  return { type: REMOVE_SERVICE, payload: { id } };
}

export function editService(nameNote, price, id) {
  return { type: EDIT_SERVICE, payload: { nameNote, price, id } };
}

export function changeServiceField(name, value) {
  return { type: CHANGE_SERVICE_FIELD, payload: { name, value } }
}
