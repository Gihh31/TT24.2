import { AbaNaoEncont, ImgError, SecaoNaoEncontr, TituloNaoEncont, LegendaNaoEncont, Botao, ImgSeta } from './style_NãoEncontrado';
import Footer from '../../components/Footer/footer';
import { Link } from 'react-router-dom';

function NaoEncontrado() {
    return (
        <AbaNaoEncont>

            <SecaoNaoEncontr>
                <TituloNaoEncont>Opsss...</TituloNaoEncont>

                <ImgError src={require("../../assets/Error.png")} />

                <LegendaNaoEncont>Infelizmente, parece que não encontramos o produto desejado.</LegendaNaoEncont>
            </SecaoNaoEncontr>

            <Botao>
                <Link to="/pesquisa">
                    <ImgSeta src={require("../../assets/Seta.png")} />
                </Link>
            </Botao>

            <Footer />
        </AbaNaoEncont>
    )
}

export default NaoEncontrado;