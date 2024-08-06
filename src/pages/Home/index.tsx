import Header from '../../components/Barra_pesquisa/header'
import { ImgCarrossel, Homepage, CaixaTitulo, ImgLogo, Titulo, Separacao, SecaoCateg, SecaoTotal, SecaoProdutos, FinalPag, Frase, ImgRede, Redes } from './style_home';
import Categorias from '../../components/categorias/categorias';
import Celulares from "../../assets/Celulares.png";
import Notebooks from "../../assets/Notebooks.png";
import Tablets from "../../assets/Tablets.png";
import Perif from "../../assets/headphones.png";
import TVs from "../../assets/TV.png";
import Acess from "../../assets/Acessorios.png";
import PCs from "../../assets/PCs.png";
import Smart from "../../assets/Relogio.png";
import Title from "../../components/Títulos/title"
import Produtos from "../../components/Produtos/produtos"
import Motorola from "../../assets/Motorola.png"
import Capinha from "../../assets/Moto2.png"
import TV from "../../assets/SmartTV.png"
import Monitor from "../../assets/Monitor.png"
import Smartphone from "../../assets/Iphone.png"
import Smartwatch from "../../assets/SmartWatch.png"
import Footer from '../../components/Footer/footer'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Homepage>
            <Header />

            <CaixaTitulo>
                <ImgLogo src={require("../../assets/Pagina_inicial.png")} alt="" width={30} height={30}></ImgLogo>

                <Titulo>Bem-vindo à Elektro!</Titulo>

            </CaixaTitulo>

            <ImgCarrossel src={require("../../assets/NaoConseguiOCarrossel.png")} />

            <Separacao />

            <Title titulo="Categorias Elektro" />

            <SecaoTotal>
                <SecaoCateg>
                    <Categorias nome="Celulares" img={Celulares} />
                    <Categorias nome="TVs" img={TVs} />
                </SecaoCateg>

                <SecaoCateg>
                    <Categorias nome="Notebooks" img={Notebooks} />
                    <Categorias nome="Acessórios" img={Acess} />
                </SecaoCateg>

                <SecaoCateg>
                    <Categorias nome="Tablets" img={Tablets} />
                    <Categorias nome="PCs" img={PCs} />
                </SecaoCateg>

                <SecaoCateg>
                    <Categorias nome="Periféricos" img={Perif} />
                    <Categorias nome="Smartwatches" img={Smart} />
                </SecaoCateg>
            </SecaoTotal>

            <Title titulo="Para você" />

            <Separacao />

            <SecaoProdutos>

                <Link to="/produto">
                    <Produtos imagem={Motorola} descricao="Celular" preco="R$800,00" />
                </Link>

                <Produtos imagem={Capinha} descricao="Capa protetora" preco="R$20,00" />

            </SecaoProdutos>

            <Title titulo="Produtos em destaque" />

            <Separacao />

            <SecaoProdutos>

                <Produtos imagem={TV} descricao="Smart TV" preco="R$1400,00" />

                <Produtos imagem={Monitor} descricao="Monitor" preco="R$750,00" />

            </SecaoProdutos>

            <Title titulo="Mais vendidos" />

            <Separacao />

            <SecaoProdutos>

                <Produtos imagem={Smartphone} descricao="Smartphone" preco="R$3200,00" />

                <Produtos imagem={Smartwatch} descricao="Smartwatch" preco="R$900,00" />

            </SecaoProdutos>

            <FinalPag>
                <Frase>Siga-nos nas redes sociais!</Frase>
                <Redes>
                    <ImgRede src={require("../../assets/Facebook.png")} />
                    <ImgRede src={require("../../assets/Instagram.png")} />
                    <ImgRede src={require("../../assets/TikTok.png")} />
                    <ImgRede src={require("../../assets/Twitter.png")} />
                    <ImgRede src={require("../../assets/Linkedin.png")} />
                </Redes>
            </FinalPag>

            <Footer />

        </Homepage>

    )
}

export default Home;