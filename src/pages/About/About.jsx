import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";
import aboutArray from "../../datas/aboutArray.json"; // j'ai créé un fichier JSON avec les données des collapses
const BannerImg = require ("../../assets/images/about-background.png")

export default function About() {
	return (
	  <>
		{/* Affichage de la bannière "AboutBanner" */}
		<Banner BannerSrc={BannerImg} />
		{/* Le tableau array du fichier json créé */}
		{aboutArray.map((rule, id) => (
		  <Collapse
			key={id}
			aboutTitle={rule.aboutTitle}
			aboutText={rule.aboutText}
			aboutStyle="about-style"
		  />
		))}
	  </>
	);
  }
  