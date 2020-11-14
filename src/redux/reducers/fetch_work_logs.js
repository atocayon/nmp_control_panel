import actionTypes from "../actions/actionTypes";

const fetch_work_logs = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_WORK_LOGS:
      return [...action.data];

    case actionTypes.SEARCH:
      return [...state]
        .filter((item) => item.work.inspector != null)
        .filter((item) => {
          if (
            item.work.task_id.charAt(0).toLowerCase() ===
              action.data.charAt(0).toLowerCase() ||
            item.work.requisitioner.charAt(0).toLowerCase() ===
              action.data.charAt(0).toLowerCase() ||
            item.work.inspector.charAt(0).toLowerCase() ===
              action.data.charAt(0).toLowerCase() ||
            item.work.secshort.charAt(0).toLowerCase() ===
              action.data.charAt(0).toLowerCase() ||
            item.work.task_id
              .charAt(item.work.task_id.length - 1)
              .toLowerCase() ===
              action.data.charAt(action.data.length - 1).toLowerCase() ||
            item.work.requisitioner
              .charAt(item.work.requisitioner.length - 1)
              .toLowerCase() ===
              action.data.charAt(action.data.length - 1).toLowerCase() ||
            item.work.inspector
              .charAt(item.work.inspector.length - 1)
              .toLowerCase() ===
              action.data.charAt(action.data.length - 1).toLowerCase() ||
            item.work.secshort
              .charAt(item.work.secshort.length - 1)
              .toLowerCase() ===
              action.data.charAt(action.data.length - 1).toLowerCase()
          ) {
            return item;
          }
        });
    default:
      return state;
  }
};

export default fetch_work_logs;
