
import './CharacterCard.css'
const  CharacterCard = ({character}) => {

    return(
        <article className="app-card" key={character.id}>
            <img src={character.image}/>
            <span><strong>Id: </strong>{character.id}</span>
            <span><strong>Nombre: </strong>{character.name}</span>
            <span><strong>Estado: </strong>{character.status}</span>
            <span><strong>Genero: </strong>{character.gender}</span>
        </article>
    )

}

export default CharacterCard;