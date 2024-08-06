import { Secao, ImgItem, Legenda } from './style_categorias';

type Props = {
    nome: string;
    img: string;
}

function Categorias({ nome, img }: Props) {
    return (
        <Secao>
            <ImgItem src={img} />
            <Legenda>{nome}</Legenda>
        </Secao>

    )
}

export default Categorias;