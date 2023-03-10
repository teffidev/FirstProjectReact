import { useState } from "react";
import Card from "../Card/Card";
import "./Form.css";

const Form = () => {
    const [data, setData] = useState({
        name: "",
        lastname: "",
        color: "",
    });

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isLogged, setIsLogged] = useState(false);

    const handleChange = (e, property) => {
        setData({ ...data, [property]: e.target.value });
    };

    const handleKeyDown = (e) => {
        if (e.key === " ") {
        e.preventDefault();
        alert("No se permiten espacios en blanco");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const nameIsValid = data.name.length > 3;
        const lastnameIsValid = data.lastname.length > 6;

        if (!nameIsValid || !lastnameIsValid) {
        setError(true);

        if (!nameIsValid && !lastnameIsValid) {
            setErrorMessage("Por favor chequea que la información sea correcta");
        } else if (!nameIsValid) {
            setErrorMessage(
            "El Nombre debe contener mas de 3 caracteres y sin espacios"
            );
        } else {
            setErrorMessage("El Apellido debe contener mas de 6 caracteres");
        }
        return;
        }

    setIsLogged(true);
    console.log("data: ", data);
    };

    return (
        <div className="containerForm">
        <h1 className="titleForm">Elige tu color favorito!</h1>

        <form className="form" onSubmit={handleSubmit}>
            <input
                className="input"
                type="text"
                name="name"
                onChange={(e) => handleChange(e, "name")}
                onKeyDown={handleKeyDown}
            />

            {error && errorMessage.includes("El Nombre debe contener mas de 3 caracteres y sin espacios") && (
            <span style={{ color: "red", fontSize: "0.7rem" }}>
                {errorMessage}
            </span>
            )}

            <input
                className="input"
                type="text"
                name="lastname"
                onChange={(e) => handleChange(e, "lastname")}
            />

        {error && errorMessage.includes("El Apellido debe contener mas de 6 caracteres") && (
            <span style={{ color: "red", fontSize: "0.7rem" }}>
                {errorMessage}
            </span>
            )}

            <select className="select" onChange={(e) => handleChange(e, "color")}>
            <option value="" default>
                Selecciona un color
            </option>
            <option value="Amarillo">Amarillo</option>
            <option value="Azul">Azul</option>
            <option value="Blanco">Blanco</option>
            <option value="Lila">Lila</option>
            <option value="Verde">Verde</option>
            <option value="Celeste">Celeste</option>
            <option value="Naranja">Naranja</option>
            </select>

            <button type="submit">Submit</button>
        </form>

        {isLogged && (
        <Card name={data.name} lastname={data.lastname} color={data.color} />
        )}
    </div>
    );
};

export default Form;
