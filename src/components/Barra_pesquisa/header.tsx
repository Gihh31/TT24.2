import { Fundo, BarraPesquisa, ImgLupa, InputPesquisa, ImgMenu, ImgCarrinho } from './style_header';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Fundo>
            <Link to="/usuario">
                <ImgMenu src={require("../../assets/hamburguer.png")} alt="Menu"></ImgMenu>
            </Link>

            <BarraPesquisa>

                <ImgLupa src={require("../../assets/pesquisa.png")} alt="lupa"></ImgLupa>

                <Link to="/pesquisa">
                    <InputPesquisa placeholder="Encontrar na Elektro">
                    </InputPesquisa>
                </Link>

            </BarraPesquisa>

            <ImgCarrinho src={require("../../assets/carrinho.png")} alt="Carrinho"></ImgCarrinho>


        </Fundo>
    )
}

export default Header;