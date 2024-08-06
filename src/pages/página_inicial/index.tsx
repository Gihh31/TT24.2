import { StyleInicial, StyleTitle } from "./style_inicial";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Inicial = () => {
    const [isVisible, setIsVisible] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(false);
            navigate('/home')
        }, 5000);

        return () => clearTimeout(timeout);
    }, [navigate]);

    if (!isVisible) {
        return null;
    }

    return (

        <StyleInicial>
            <img src={require("../../assets/Pagina_inicial.png")} alt="" width={250} height={250} />

            <StyleTitle>Elektro</StyleTitle>

        </StyleInicial>
    );


}

export default Inicial;