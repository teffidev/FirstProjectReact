import "./Card.css"

const Card = ({ name, lastname, color }) => {
    return (
        <div className='containerCard'>
            <h2>Hola {name}!</h2>
            <h2>Tu apellido es: {lastname}</h2>
            <h2>y tu color favorito es: {color}</h2>
        </div>
    );
};

export default Card;
