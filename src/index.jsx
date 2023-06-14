import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./style/main.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendu du composant principal (App) dans le DOM
root.render(
	//  BrowserRouter gérer des routes
	<BrowserRouter>
	  <App />
	</BrowserRouter>
  );