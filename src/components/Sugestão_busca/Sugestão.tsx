import { ImagemSugest, SecaoSugest, NomeSugest, TextoSugest } from './style_sugestão';

type Props = {
    ImgSugestao: string;
    TextoSugestao: string;
}

function Sugestao({ ImgSugestao, TextoSugestao }: Props) {
    return (
        <SecaoSugest>
            <ImagemSugest src={ImgSugestao} />

            <NomeSugest>
                <TextoSugest>{TextoSugestao}</TextoSugest>
            </NomeSugest>
        </SecaoSugest>

    )
}

export default Sugestao;