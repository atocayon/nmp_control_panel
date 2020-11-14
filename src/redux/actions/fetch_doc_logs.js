import actionTypes from "./actionTypes";
import axios from "axios";
const fetch_doc_logs = (socket) => {
  return async (dispatch) => {
    await socket.emit("document_logs");
    await socket.on("doc_logs", async (data) => {
      let arr = [];
      for (let i of data) {
        arr.push({ document: i, logs: await logs(i.documentID) });
      }

      dispatch({ type: actionTypes.FETCH_DOC_LOGS, data: arr });
    });
  };
};

const logs = async (doc_id) => {
  let sql = await axios.get(
    `http://${process.env.REACT_APP_SERVER}/document/logs/${doc_id}`
  );
  return sql.data;
};

export { fetch_doc_logs };
