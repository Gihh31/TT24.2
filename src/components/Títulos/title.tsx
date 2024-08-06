import { SecTitle } from './style_title'

type Props = {
    titulo: string;
}

const Title = ({ titulo }: Props) => {
    return <SecTitle>{titulo}</SecTitle>
}

export default Title;
