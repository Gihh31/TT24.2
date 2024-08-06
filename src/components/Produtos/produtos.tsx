import { Card, ImgProduto, InfosTotal, Infos, ImgCoracao, Descric, Quantia } from './style_produtos';
import Coracao from '../../assets/Coracao.png'

type Props = {
    imagem: string;
    descricao: string;
    preco: string;
}

function Produtos({ imagem, descricao, preco }: Props) {
    return (
        <Card>
            <ImgProduto src={imagem} />
            <InfosTotal>
                <Infos>
                    <Descric>{descricao}</Descric>
                    <Quantia>{preco}</Quantia>
                </Infos>

                <ImgCoracao src={Coracao} />
            </InfosTotal>
        </Card>
    )
}

export default Produtos;