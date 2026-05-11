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

const paula = {
  cliente: 'Paula',
  idade: 27,
  compras: [
    {nome: "notebook", preco: "R$ 5426"},
    {nome: "celular", preco: "R$ 2534"},
    {nome: "garrafa", preco: "R$ 56"},
    {nome: "cadeira", preco: "R$ 346"},
  ],
  ativa: true,
};

const robim = {
  cliente: 'Robim',
  idade: 20,
  compras: [
    {nome: "notebook", preco: "R$ 5426"},
    {nome: "celular", preco: "R$ 2534"},
    {nome: "garrafa", preco: "R$ 56"},
    {nome: "cadeira", preco: "R$ 346"},
  ],
  ativa: true,
};

 const dados = luana;

const somarTotalCompras = Array.isArray(dados.compras)
  ? dados.compras
      .map(item => +item.preco.replace('R$','').trim())
      .reduce((acumulador, itemAtual) => {
        return acumulador + itemAtual
      }, 0)
  : dados.compras



const Pedro = {
nome:"Pedro",
 idade: 22,
 cursos: [{curso: "T.I", preco: "R$ 2000"},
  {curso:"Mecanica", preco: "R$ 2500"},
  {curso:"Eletrica", preco: "R$ 500"},
],
 matricula:false
}

const Anna = {
nome:"Anna",
 idade: 18,
 cursos: [{curso: "Cozinheiro", preco: "R$ 2500"},
  {curso:"Full Stack", preco: "R$ 3500"},
  {curso:"Nautica", preco: "R$ 5000"},
],
 matricula:true
}

const dado = Anna

const somarTotalCursos = dado.cursos
.map(item => +item.preco.replace('R$','').trim())
.reduce((acumulador, itemAtual) => {
  return acumulador + itemAtual
}, 0)
// const App = () => {
 

//   return <div></div>;
// };

const empresa = [
  <li key= "e1">Apple</li>,
  <li key= "e2">Google</li>
];


const filmes = ["Vingadores", "Thor", "Flesh"];

const livros = [
  { nome: "Dom Casmurro", ano: 1899 },
  { nome: "O Pequeno Principe", ano: 1943 },
  { nome: "Capitaes da Areia", ano: 1937 },
];

const cores =[

'#CAD338',

'#2472c6','#9a382d' ];



// Organize os produtos como mostrado na imagem abaixo
// Mostre apenas produtos que forem mais caros que R$ 1500
const produtos = [
{
id: 1,
nome: 'Smartphone',
preco: 'R$ 2000',
cores: ['#29d8d5', '#252a34', '#fc3766'],
},
{
  id: 2,
nome: 'Notebook',
preco: 'R$ 3000',
cores: ['#ffd045', '#d4394b', '#f37c59'],
},
{
id: 3,
nome: 'Tablet',
preco: 'R$ 1500',
cores: ['#365069', '#47c1c8', '#f95786'],
},
];

const valorProd = produtos
.map(item => +item.preco.replace('R$','').trim())
.reduce((acumulador, itemAtual) => {
  return acumulador + itemAtual
}, 0)



const App = () => {
return <section></section>;
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
    <p>
    Murilo {
    Murilo.faculdade ?
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


<div>
  <p>Nome: {dados.cliente}</p>
<p>Idade: {dados.idade}</p>

<p>Situacao:

<span

style={{color: dados.ativa ? 'green' : 'red' } }>

{dados.ativa ? ' Ativa' : ' Inativa'}

</span>

</p>

<p>Total: R$ {somarTotalCompras}</p>

{somarTotalCompras >  10000 && <p>Seu cansado, voce esta gastando muito</p>}

</div>


<div>
  <h1>Nome: {dado.nome}</h1>
  <h1>Idade: {dado.idade}</h1>
  <h1>Situação da matricula: {dado.matricula ? <span style={{color: "green"}}> Ativo</span> : <span style={{color: "red"}}> Inativo</span>}</h1>
  <h1>Total: R$ {somarTotalCursos}</h1>
  {somarTotalCursos >  2500 && <h1 style={{color: "red"}}>Você esta gastando muito</h1>}

  <h1>Lista de Cursos</h1>

<ul>
{dado.cursos.map (curso =>(
<li key={curso.curso}>{curso.curso}</li>
))}
</ul>
</div>

<ul>
  {empresa}
</ul>

<ul>
  {filmes.map(filme => (
    <li key={filme}>{filme}</li>
  ))}
</ul>

<ul>
  {livros.filter(livro => livro.ano >= 1998)
  .map(livro => (
    <li key={livro.nome}>{livro.nome}, {livro.ano}</li>
  ))}
</ul>

<ul>
{cores.map(cor => (
<li style={{backgroundColor: cor, color: "white"}} key={cor}>{cor}</li>
))}
</ul>

<h1>O total de tudo é: {valorProd}</h1>
{valorProd >  1500 && <h1 style={{color: "red"}}>Você esta gastando muito</h1>}

{
  produtos.filter(produto)
}


{
produtos.filter(produto => +produto.preco.replace('R$', '').trim() > 1500)

.map((produto)=>(
<div key={produto.id}>
<h1>{produto.nome}</h1>

<p>Preço: {produto.preco}</p>

<ul>
  {produto.cores.map (cor => (
    <li key={cor} style={{backgroundColor: cor, color: "white"}}>{cor}</li>
  ))}
</ul>
</div>
))
}
    </>
  )
}

