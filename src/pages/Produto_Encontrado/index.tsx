import { AbaEncontrado, ProdutosEncontrados } from './style_encontrado';
import Branca from '../../components/Header_Branca/Header_Branca';
import Superior from '../../components/Seção_Superior/Superior';
import Footer from '../../components/Footer/footer';
import Produtos from "../../components/Produtos/produtos";

function Encontrado() {
    return (
        <AbaEncontrado>
            <Branca Menu={require("../../assets/hamburguer2.png")} Texto="Pesquisa" Icon={require("../../assets/Icon.png")} />

            <Superior ImagemSup={require("../../assets/Filtro_diferente.png")} />

            <ProdutosEncontrados>
                <Produtos imagem={require("../../assets/LG.png")} descricao="TV LG" preco="R$2.000,00" />

                <Produtos imagem={require("../../assets/Samsung.png")} descricao="TV Samsung" preco="R$1.400,00" />
            </ProdutosEncontrados>

            <ProdutosEncontrados>
                <Produtos imagem={require("../../assets/TCL.png")} descricao="TV TCL" preco="R$1.000,00" />

                <Produtos imagem={require("../../assets/Semp.png")} descricao="TV Semp" preco="R$1.200,00" />
            </ProdutosEncontrados>

            <ProdutosEncontrados>
                <Produtos imagem={require("../../assets/AOC.png")} descricao="TV AOC" preco="R$1.300,00" />

                <Produtos imagem={require("../../assets/Philips.png")} descricao="TV PhilipsTV" preco="R$1.400,00" />
            </ProdutosEncontrados>

            <Footer />
        </AbaEncontrado>
    )
}

export default Encontrado;