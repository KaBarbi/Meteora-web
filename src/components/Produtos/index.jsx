import React, { useContext } from "react"
import Produto from "./Produto"
import produtos from "@/mocks/produtos.json"
import Titulo from "@/components/Titulo"
import { CarrinhoContext } from "@/Context/CarrinhoContext"

const Produtos = () => {
    const { carrinho, setCarrinho } = useContext(CarrinhoContext)

    function adicionarProduto(novoProduto) {
        const temOProduto = carrinho.some((itenDoCarrinho) => {
            itenDoCarrinho.id === novoProduto.id
        })

        if (temOProduto) {
            novoProduto.quantidade = 1
            return setCarrinho((carrinhoAnterior) => [
                ...carrinhoAnterior,
                novoProduto,
            ])
        }
        setCarrinho((carrinhoAnterior) =>
            carrinhoAnterior.map((itenDoCarrinho) => {
                if (itenDoCarrinho.id === novoProduto.id) {
                    return {
                        ...itenDoCarrinho,
                        quantidade: itenDoCarrinho.quantidade + 1,
                    }
                }
                return itenDoCarrinho
            })
        )
    }

    return (
        <section role="produtos" aria-label="Produtos que estão bombando!">
            <Titulo>Produtos que estão bombando!</Titulo>
            <div className="container row mx-auto">
                {produtos.map((produto) => (
                    <Produto
                        key={produto.id}
                        {...produto}
                        adicionarProduto={adicionarProduto}
                    />
                ))}
            </div>
        </section>
    )
}

export default Produtos
