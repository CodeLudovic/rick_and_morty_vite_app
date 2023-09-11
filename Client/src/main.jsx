import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import store from "../src/redux/store/store.js";
import "./index.css";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);