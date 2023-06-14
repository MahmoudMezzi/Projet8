import { Link } from "react-router-dom";

export default function Nav() {
	return (
	  <nav className="nav-header">
		{/* Lien vers la HomePage*/}
		<Link to="/" className="nav-header_link-home">
		  Accueil
		</Link>
		{/* Lien vers la page "AboutBanner" */}
		<Link to="/about" className="nav-header_link-about">
		  A Propos
		</Link>
	  </nav>
	);
  }
  
