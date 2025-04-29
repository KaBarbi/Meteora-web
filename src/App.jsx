import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CarrinhoContext, CarrinhoProvider } from "./context/CarrinhoContext"
import Home from "./pages/Home"
import PaginaErro from "./pages/PaginaErro"

import "./App.css"

function App() {
    return (
        <BrowserRouter>
            <CarrinhoProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/carrinho" element={<CarrinhoContext />} />
                    <Route path="*" element={<PaginaErro />} />
                </Routes>
            </CarrinhoProvider>
        </BrowserRouter>
    )
}

export default App
