#language: pt
Funcionalidade: Carrinho de produtos

  Contexto: Acessar pagina principal

    Dado que eu acesso a página inicial
    Entao eu verifico se o título da página é "My Store"

  Esquema do Cenário: Adicionar produto no carrinho de compras

    Quando eu pesquiso produtos com as caracteristicas "<caracteristica>"
    Entao eu verifico o resultado da pesquisa
    Entao eu seleciono um produto
    Entao eu verifico os dados do produto
    E que eu adiciono o produto no carrinho de compras
    Entao eu continuo o processo de checkout
    E que eu faço o checkout

    Exemplos:
      | caracteristica     |
      | Faded Short Sleeve |
      | Printed Dress      |
      | Blouse             |
