import { UsuarioPage, FundoUsuario, TextoUsuario, ImgUsuario, SeparBar, SecaoOpcoes, Sair } from './style_usuario';
import Imagem from '../../assets/Usuario.png'
import Title from '../Títulos/title';
import { Link } from 'react-router-dom';

function Usuario() {
    return (
        <UsuarioPage>

            <FundoUsuario>
                <ImgUsuario src={Imagem} />

                <TextoUsuario>Usuário</TextoUsuario>
            </FundoUsuario>

            <SecaoOpcoes>

                <Title titulo="Editar dados" />

                <SeparBar />

                <Title titulo="Meus pedidos" />

                <SeparBar />

                <Title titulo="Meus produtos" />

                <SeparBar />

                <Title titulo="Meu caminho" />

            </SecaoOpcoes>

            <Sair>
                <Link to="/home">
                    <Title titulo="Sair" />
                </Link>
            </Sair>

        </UsuarioPage>
    )
}

export default Usuario;