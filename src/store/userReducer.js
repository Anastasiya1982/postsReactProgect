export const ADD_USER = "ADD_USER";

const initialState = {
  users: [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
    },
  ],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
   
    case ADD_USER:
        return { 
        ...state, 
        users: [...state.users, action.payload]
     };

    default:
      return state;
  }
};
