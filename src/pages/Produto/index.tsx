import Branca from '../../components/Header_Branca/Header_Branca';
import Footer from '../../components/Footer/footer';
import { AbaProduto, SecaoCaracteristcas, TituloCaract, Caracteristica } from './style_Produto'
import InfosProduto from '../../components/Infos_do_Produto/InfosProduto'

function Produto() {
    return (
        <AbaProduto>
            <Branca Menu={require("../../assets/hamburguer2.png")} Texto="Pesquisa" Icon={require("../../assets/Icon.png")} />

            <InfosProduto Produto={require('../../assets/Motorola.png')} DescricImagem="Celular Motorola rosa" Descric="Celular" Preco="R$800,00" Vendedor={require("../../assets/Vendedor1.png")} NomeVendedor="João Ribeiro" Avaliacao={require("../../assets/Avaliacao.png")} />

            <SecaoCaracteristcas>

                <TituloCaract>Características do Produto</TituloCaract>



                <Caracteristica>• Tela Super Retina XDR de 6,1”; </Caracteristica>
                <Caracteristica>• Chip biônico A15 p/ desempenho + rápido; </Caracteristica>
                <Caracteristica>• Sistema avançado de câmera dupla; </Caracteristica>
                <Caracteristica>• Câmera frontal TrueDepth de 12 MP, com modo noturno e gravação 4K Dolby Vision. </Caracteristica>


            </SecaoCaracteristcas>

            <Footer />
        </AbaProduto>

    )
}

export default Produto;