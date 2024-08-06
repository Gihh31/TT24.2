import { HeaderBranca, Image, TextoHeader } from './style_branca';
import { Link } from 'react-router-dom';

type Props = {
    Menu: string;
    Texto: string;
    Icon: string;
}

function Branca({ Menu, Texto, Icon }: Props) {

    return (
        <HeaderBranca>

            <Link to="/usuario">
                <Image src={Menu} />
            </Link>

            <TextoHeader>{Texto}</TextoHeader>
            <Image src={Icon} />
        </HeaderBranca>
    )

}

export default Branca;