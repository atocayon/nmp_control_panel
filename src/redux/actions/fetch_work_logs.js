import actionTypes from "./actionTypes";
import axios from "axios";
const fetch_work_logs = (socket) => {
  return (dispatch) => {
    socket.emit("work_queue_logs");
    socket.on("work_logs", async (data) => {
      let arr = [];
      for (let i of data) {
        arr.push({ work: i, logs: await logs(i.task_id) });
      }

      dispatch({ type: actionTypes.FETCH_WORK_LOGS, data: [...arr] });
    });
  };
};

const logs = async (task_id) => {
  let sql = await axios.get(
    `http://${process.env.REACT_APP_SERVER}/work-queue/job/request/logs/${task_id}`
  );

  return sql.data;
};

export { fetch_work_logs };
