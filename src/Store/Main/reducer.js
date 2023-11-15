import * as Actions from "./action";

const initialState = {
  taskList: null,
};

const mainReducer = (state = initialState, action) => {
  switch (action?.type) {
    case Actions.ADD_TASK_LIST: {
      return {
        ...state,
        taskList: action?.payload,
      };
    }
    case Actions.RESET_MAIN_STORE: {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default mainReducer;
