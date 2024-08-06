import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Inicial from "../pages/página_inicial";
import AbaPesquisa from "../pages/Aba_Pesquisa";
import Encontrado from "../pages/Produto_Encontrado";
import NaoEncontrado from "../pages/Não_Encontrado";
import Produto from "../pages/Produto";
import Usuario from "../components/Usuário_Hamburg/Usuario";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Inicial />} path="/" />
                <Route element={<Home />} path="/home" />
                <Route element={<AbaPesquisa />} path="/pesquisa" />
                <Route element={<Encontrado />} path="/encontrado" />
                <Route element={<NaoEncontrado />} path="/naoEncontrado" />
                <Route element={<Produto />} path="/produto" />
                <Route element={<Usuario />} path="/usuario" />
            </Routes>
        </BrowserRouter>
    );
}


export default Router;