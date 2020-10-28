import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/configureStore";
import "bootstrap/dist/css/bootstrap.min.css";
import { SnackbarProvider } from "notistack";
import "./css/styles.css";

ReactDOM.render(
  <ReduxProvider store={store}>
     <Router>
      <SnackbarProvider
        maxSnack={1}
        dense
        iconVariant={{
          success: "✅ ",
          error: "✖️",
          warning: "⚠️",
          default: "ℹ️ ",
        }}
      >
        <Route component={App} />
      </SnackbarProvider>
     </Router>
    
  </ReduxProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
