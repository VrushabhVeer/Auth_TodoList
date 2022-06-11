const initialState = {
  todoList: [],
}

const todoReducer = (state = initialState, action) => {

  switch (action.type) {
      case "ADD_TODO":
          const { id, data } = action.payload;
          return {
              ...state,
              todoList: [
                  ...state.todoList,
                  {
                      id: id,
                      data: data
                  }
              ]

          }

      
          case "DELETE_TODO":
          const newList = state.todoList.filter((e) => e.id !== action.id)
          return {
              ...state,
              todoList: newList,
          };


          case "REMOVE_TODO":
          return {
              ...state,
              todoList: [],

          }
      default: return state;
  }
}

export default todoReducer;