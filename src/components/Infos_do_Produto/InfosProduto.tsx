import { FundoProduto, ImgeIcon, ImgProduto, Icon, InfosGerais, InformacaoProduto, NomeProduto, PrecoProduto, InfosVendedor, ImgVendedor, NameVendedor, AvaliacaoVendedor } from './style_infos';

type Props = {
    Produto: string;
    DescricImagem: string;
    Descric: string;
    Preco: string;
    Vendedor: string;
    NomeVendedor: string;
    Avaliacao: string;
}

function InfosProduto({ Produto, DescricImagem, Descric, Preco, Vendedor, NomeVendedor, Avaliacao }: Props) {

    return (
        <FundoProduto>
            <ImgeIcon>
                <ImgProduto src={Produto} alt={DescricImagem} />
                <Icon src={require("../../assets/Coracao_Branca.png")} />
                <Icon src={require("../../assets/carrinho.png")} />
            </ImgeIcon>

            <InfosGerais>
                <InformacaoProduto>
                    <NomeProduto>{Descric}</NomeProduto>

                    <PrecoProduto>{Preco}</PrecoProduto>
                </InformacaoProduto>

                <InfosVendedor>
                    <ImgVendedor src={Vendedor} />
                    <NameVendedor>{NomeVendedor}</NameVendedor>
                    <AvaliacaoVendedor src={Avaliacao} />
                </InfosVendedor>
            </InfosGerais>

        </FundoProduto>
    )
}

export default InfosProduto;