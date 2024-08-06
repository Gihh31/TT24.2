import { BarraPreta, InputPesqPreto, ImgLupaBranca } from './style_preta'

const Search = () => {
    return (
        <BarraPreta>
            <ImgLupaBranca src={require("../../assets/LupaBranca.png")} />
            <InputPesqPreto placeholder="Encontrar na Elektro" />
        </BarraPreta>
    )
}

export default Search;