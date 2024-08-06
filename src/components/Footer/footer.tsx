import { Fundo, Coluna, ImgFooter, Nome } from './style_footer'
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <Fundo>
            <Coluna>
                <Link to="/home">
                    <ImgFooter src={require("../../assets/Casinha.png")} />
                </Link>

                <Nome>Home</Nome>

            </Coluna>

            <Coluna>
                <ImgFooter src={require("../../assets/Chat.png")} />
                <Nome>Chat</Nome>
            </Coluna>

            <Coluna>
                <ImgFooter src={require("../../assets/Sino.png")} />
                <Nome>Avisos</Nome>
            </Coluna>

            <Coluna>
                <ImgFooter src={require("../../assets/Pessoa.png")} />
                <Nome>Perfil</Nome>
            </Coluna>

        </Fundo>
    )
}

export default Footer;