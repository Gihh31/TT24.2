import Branca from '../../components/Header_Branca/Header_Branca';
import { Aba, SecaoHistorico, SecaoApagar, ImagemHistorico, SecaoImagem, BarSeparacao, ApagarHistorico, SugestaoDiv, SugestaoTexto } from './style_pesquisa';
import Superior from '../../components/Seção_Superior/Superior';
import Historico from '../../components/Histórico/Histórico';
import Sugestao from '../../components/Sugestão_busca/Sugestão';
import Footer from '../../components/Footer/footer';
import { Link } from 'react-router-dom';

function AbaPesquisa() {
    return (
        <Aba>
            <Branca Menu={require("../../assets/hamburguer2.png")} Texto="Pesquisa" Icon={require("../../assets/Icon.png")} />

            <Superior ImagemSup={require("../../assets/SímboloGoogle.png")} />

            <SecaoApagar>
                <SecaoHistorico>

                    <Link to="/naoEncontrado">
                        <Historico ProdutoPesquisado="Monitor" />
                    </Link>

                    <Link to="/encontrado">
                        <Historico ProdutoPesquisado="Smart TV" />
                    </Link>

                    <Link to="/naoEncontrado">
                        <Historico ProdutoPesquisado="Mousepad" />
                    </Link>
                </SecaoHistorico>

                <SecaoImagem>
                    <ImagemHistorico src={require("../../assets/Apagar.png")} />
                    <ImagemHistorico src={require("../../assets/Apagar.png")} />
                    <ImagemHistorico src={require("../../assets/Apagar.png")} />
                </SecaoImagem>

            </SecaoApagar>

            <BarSeparacao />

            <ApagarHistorico>Apagar Histórico de Pesquisa</ApagarHistorico>

            <SugestaoDiv>
                <SugestaoTexto>Sugestão de busca</SugestaoTexto>
            </SugestaoDiv>

            <Sugestao ImgSugestao={require("../../assets/MaisCelulares.png")} TextoSugestao="Celulares" />
            <Sugestao ImgSugestao={require("../../assets/Teclados.png")} TextoSugestao="Teclados" />

            <Sugestao ImgSugestao={require("../../assets/Monitores.png")} TextoSugestao="Monitores" />
            <Footer />

        </Aba>
    )
}

export default AbaPesquisa;