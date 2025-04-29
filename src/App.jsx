import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CarrinhoProvider } from "./context/CarrinhoContext.jsx"
import Home from "./pages/Home"
import PaginaErro from "./pages/PaginaErro"
import Carrinho from "./pages/Carrinho"

import "./App.css"

function App() {
    return (
        <BrowserRouter>
            <CarrinhoProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/carrinho" element={<Carrinho />} />
                    <Route path="*" element={<PaginaErro />} />
                </Routes>
            </CarrinhoProvider>
        </BrowserRouter>
    )
}

export default App
