import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
if (entryPoint) {
	ReactDOM.createRoot(entryPoint).render(<App />);
} else {
	throw new Error("Root element not found");
}
