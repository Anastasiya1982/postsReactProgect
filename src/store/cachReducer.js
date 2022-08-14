export const ADD_CASH='ADD_CASH';
export const GET_CASH='GET_CASH';

const initialState = {
    cash: 100,


    
  };
  
export const  cashReducer=(state = initialState, action)=> {
    switch (action.type) {
      case  ADD_CASH :
        return { ...state, cash: state.cash + action.payload };
      case GET_CASH :
        return { ...state, cash: state.cash - action.payload };
      default:
        return state;
    }
  }