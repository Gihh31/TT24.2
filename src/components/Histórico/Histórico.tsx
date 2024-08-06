import { TextoHistorico } from './style_histórico';

type Props = {
    ProdutoPesquisado: string;
}

function Historico({ ProdutoPesquisado }: Props) {

    return (
        <TextoHistorico>{ProdutoPesquisado}</TextoHistorico>
    )
}

export default Historico;