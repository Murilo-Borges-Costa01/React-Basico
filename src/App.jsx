export default function App () {
  const nome = "Murilo Borges Costa"
  const v1 = 10
  const v2 = 20
  const somar = v1 + v2
  const ativo = true

  function meuNome(){
    return "Murilo Borges Costa"
  }

  function quadrado(x){
    return x * x
  }

  const carro = {
    rodas: 4,
    marca: "Ford"
  }

  const Murilo = {
    nome: "Murilo",
    faculdade: true
  }

  const estilo1 = {
    color: 'Blue',
    fontSize: '20px',
    fontFamilly: 'Helvetica'
  }

  return(
    <>
    <p>Olá, seja bem-vindo {nome}</p>
    <h1>A soma de {v1} + {v2} = {somar}</h1>
    <p className={ativo ? 'ativo' : 'inativo'}>Estoque</p>
    <p>{"Eu sou maravilhoso".toLowerCase()}</p>
    <p>{30*2}</p>
    <p>{true}</p>
    <p>{undefined}</p>
    <p>{meuNome()}</p>
    <p>{quadrado(2)}</p>
    <p>{quadrado(2) === 4 ? "Fórmula correta" : "Fórmula incorreta"}</p>
    <p>{quadrado(2) === 4 && "Fórmula correta"}</p>
    <p>{new Date().getFullYear()}</p>
    <p>{Murilo.faculdade ? "Possui Faculdade" : "Não possui faculdade"}</p>
    <h1 style={estilo1}>Murilo Borges Costa 001</h1>
    <h1 style={{color: 'red', fontSize: "20px"}}>Murilo Borges Costa 002</h1>
    <h1 style={{color: false ? 'red' : 'violet'}}>Murilo Borges Costa 003</h1>
    </>
  )
}