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


  const estilo2 = {
    color: 'green',
    fontSize: '20px',
    fontFamilly: 'Helvetica'
  }

  const estilo3 = {
    color: 'red',
    fontSize: '20px',
    fontFamilly: 'Helvetica'
  }

// EXERCICIO:

  const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: 2000,
  ativa: true,
};


const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: 100000,
  ativa: false,
};

const App = () => {
  const dados = luana;

  return <div></div>;
};

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
    <p>
    Murilo {
    Murilo.possuiFaculdade ?
    <span style={{color: 'blue'}}>Sim, possui faculdade</span>
    :
    <span style={{color: 'red'}}>Não, possui faculdade</span> }
    </p>
    <h1 style={{color: Murilo.possuiFaculdade ? "blue" : "red"}}>Murilo</h1>

    {/* // Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem */}
<h1> {mario.ativa ? <span style={estilo2}>Conta do Mario Ativa</span> : <span style={estilo3}>Conta do Mario Inativa</span>}</h1>
<h1>{luana.ativa ? <span style={estilo2}>Conta da Luana Ativa</span> : <span style={estilo3}>Conta da Luana Inativa</span>}</h1>

<h1>{luana.compras > 10000 ? <span style={estilo2}>Compras maior que 10000</span> : <span style={estilo3}>Compras menor que 10000</span>}</h1>
<h1>{mario.compras > 10000 ? <span style={estilo2}>Compras maior que 10000</span> : <span style={estilo3}>Compras menor que 10000</span>}</h1>




    </>
  )
}


