const extr = [{data: '2022-12-28', tipoOp: 'Crédito', estabelecimento: 'Padaria do Joaquim', valor: '19,90'},
  {data: '2023-01-12', tipoOp: 'Pix', estabelecimento: 'La casa de Pastel', valor: '23,80'} ,
  {data: '2023-01-19', tipoOp: 'Débito', estabelecimento: 'Boteco do tio Zé', valor: '13,47'} ]


function login() {
  let cpf = document.getElementById('cpf').value
  let password = document.getElementById('password').value
  if (cpf == "12312312312" && password == "Teste") {
    window.location.href = "extrato.html"
    return false;
  } else {
    alert("Senha errada")
  }
}

function adicionarExtrato(){
  let extrato = Object.create(new Object());

  extrato.data = document.getElementById('data').value;
  extrato.tipoOp =  document.getElementById('tipoOp').value;
  extrato.estabelecimento =  document.getElementById('estab').value;
  extrato.valor =  document.getElementById('valor').value;
  console.log(extrato)
  const table = document.getElementById("tabela");
  let row = table.insertRow();
  let data = row.insertCell(0);
  data.innerHTML = extrato.data;
  let tipoOp = row.insertCell(1);
  tipoOp.innerHTML = extrato.tipoOp;
  let estabelecimento = row.insertCell(2);
  estabelecimento.innerHTML = extrato.estabelecimento;
  let valor = row.insertCell(3)
  valor.innerHTML = extrato.valor
  extr.push(extrato)
  inverterExtrato('tabelaExtrato', 'listaExtrato')
}


function inverterExtrato(idShow, idHide){
  console.log(" 1 ",  document.getElementById(idShow))
  console.log(" 2 ",  document.getElementById(idHide))
  document.getElementById(idShow).style.display = 'block';
  document.getElementById(idHide).style.display = 'none';

}

function carregarTabela(){
  inverterExtrato('tabelaExtrato', 'listaExtrato')
  const table = document.getElementById("tabela");
  extr.forEach( item => {
    let row = table.insertRow();
    let data = row.insertCell(0);
    data.innerHTML = item.data;
    let tipoOp = row.insertCell(1);
    tipoOp.innerHTML = item.tipoOp;
    let estabelecimento = row.insertCell(2);
    estabelecimento.innerHTML = item.estabelecimento;
    let valor = row.insertCell(3)
    valor.innerHTML = item.valor
  });

}