import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carrousel from "../../components/Carrousel/Carrousel";
import Collapse from "../../components/Collapse/Collapse";
import Host from "../../components/Host/Host";
import Rate from "../../components/Rate/Rate";
import Tag from "../../components/Tag/Tag";
import logements from "../../logements.json";

export default function FicheLogement() {
  const params = useParams(); // Récupération des paramètres de l'URL
  const navigate = useNavigate(); // Utilisation du hook useNavigate pour la navigation

  const [pickedAppart, setPickedAppart] = useState(); // Utilisation du hook useState pour gérer l'état du logement sélectionné

  useEffect(() => {
    const getData = () => {
      const picked = logements.find(({ id }) => id === params.id); // Recherche du logement correspondant à l'ID dans les paramètres
      logements.map(() => setPickedAppart(picked)); // Mise à jour de l'état du logement sélectionné
      if (picked === undefined) {
        navigate("/404", { state: { message: "Can't get data" } }); // Redirection vers la page 404 en cas d'URL de logement invalide
      }
    };

    getData();
    // eslint-disable-next-line
  }, []); // Utilisation d'un tableau vide pour exécuter le useEffect une seule fois

  const slidePics = pickedAppart && pickedAppart.pictures; // Récupération des images de diapositives du logement
  const tags = pickedAppart && pickedAppart.tags; // Récupération des tags du logement
  const equipments = pickedAppart && pickedAppart.equipments; // Récupération des équipements du logement
  const equip =
    pickedAppart &&
    equipments.map((item, index) => (
      <li key={index} className="equipList">
        {item}
      </li>
    )); // Rendu des équipements sous forme de liste

  return (
    pickedAppart && ( // Vérification que le logement sélectionné existe
      <div key={params.id} className="fiche-container"> {/* Conteneur principal de la fiche de logement*/}
        <Carrousel slides={slidePics} /> {/* Affichage du carrousel avec les images de diapositives*/}

        <section className="hostInfo-container"> {/* Section contenant les informations sur l'hôte et le titre*/}
          <div className="title-tags-container"> {/* Conteneur pour le titre et les tags*/}
            <div className="title-container redFont"> {/* Conteneur pour le titre du logement*/}
              <h1>{pickedAppart.title}</h1> / Affichage du titre du logement
              <h3>{pickedAppart.location}</h3> /{/* Affichage de l'emplacement du logement*/}
            </div>
            <div className="tags-container"> {/* Conteneur pour les tags*/}
              {tags.map((tag) => (
                <Tag key={tag} tag={tag} /> // Affichage des tags du logement
              ))}
            </div>
          </div>

          <div className="rate-host-container"> {/* Conteneur pour les informations sur l'hôte et la note*/}
            <div className="host-container redFont"> {/* Conteneur pour les informations sur l'hôte*/}
              <Host
                hostName={pickedAppart.host.name} // Affichage du nom de l'hôte
                hostPic={pickedAppart.host.picture} // Affichage de la photo de l'hôte
              />
            </div>
            <div className="rate-container">  {/*Conteneur pour la note du logement*/}
              <Rate score={pickedAppart.rating} /> {/* Affichage de la note du logement*/}
            </div>
          </div>
        </section>

        <div className="collapse-fiche-container"> {/* Conteneur pour les sections repliables*/}
          <Collapse
            aboutTitle="Description"
            aboutText={pickedAppart.description} // Affichage de la description du logement
          />
          <Collapse aboutTitle="Équipements" aboutText={equip} /> {/* Affichage des équipements du logement*/}
        </div>
      </div>
    )
  );
}
