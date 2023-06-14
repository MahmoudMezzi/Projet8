import emptyStar from "../../assets/images/emptyStar.svg";
import fullStar from "../../assets/images/star-rate.svg";

export default function Rate({ score }) {
	const stars = [1, 2, 3, 4, 5];
	return (
	  <div className="rate-comp">
		{/* Itération sur le tableau "stars" */}
		{stars.map((level) =>
		  score >= level ? ( // Vérification si le score est supérieur ou égal au niveau actuel
			<img
			  key={level.toString()}
			  className="star"
			  src={fullStar}
			  alt="rating star"
			/>
		  ) : ( // Si le score est inférieur au niveau actuel, afficher une étoile vide
			<img
			  key={level.toString()}
			  className="star"
			  src={emptyStar}
			  alt="rating star"
			/>
		  )
		)}
	  </div>
	);
  }
  