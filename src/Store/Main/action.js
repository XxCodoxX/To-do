export const RESET_MAIN_STORE = "MAIN_COMPONENT - RESET_MAIN_STORE";
export const ADD_TASK_LIST = "MAIN_COMPONENT - TASK_LIST";

export function addTaskList(data) {
  return {
    type: ADD_TASK_LIST,
    payload: data,
  };
}

export function resetMainStor() {
    return {
      type: RESET_MAIN_STORE,
    };
  }
