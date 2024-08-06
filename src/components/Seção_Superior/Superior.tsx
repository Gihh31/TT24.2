import Search from '../../components/BarraPesqPreta/pesqpreta'
import { SuperiorTotal, CantoDireito, ImgFiltro, LegendaFiltro } from './style_superior';

type Props = {
    ImagemSup: string;
}

function Superior({ ImagemSup }: Props) {
    return (

        <SuperiorTotal>

            <Search />

            <CantoDireito>
                <ImgFiltro src={ImagemSup} />

                <LegendaFiltro>Filtro</LegendaFiltro>
            </CantoDireito>

        </SuperiorTotal>

    )
}

export default Superior;


