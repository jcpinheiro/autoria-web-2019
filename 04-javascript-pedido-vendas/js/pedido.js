
//let linguagem = prompt('Digite o nome de uma linguagem de programação');
//alert('Primeiro código ' + linguagem );

//alert(`Primeiro código ${linguagem}`);


let btnCadastro = document.querySelector('#btnCadastro');

btnCadastro.addEventListener( 'click', function(event) {
    
    event.preventDefault();
    //console.log("O botão de cadastro foi clicado" );

    let nome = document.querySelector('#nome').value;
    let quantidade = document.querySelector('#quantidade').value;
    let valor = document.querySelector('#valor').value;  

   /*
     <tr>
        <td>Caderno</td>
        <td>10</td>
        <td>5</td>
        <td>50</td>
    </tr>
   */

    let tr = document.createElement('tr');

    let celulaNome = document.createElement('td');
    celulaNome.textContent = nome;

    let celulaQuant = document.createElement('td');
    celulaQuant.textContent = quantidade;

    let celulaValor = document.createElement('td');
    celulaValor.textContent = valor;

    let celulaSubTotal = document.createElement('td');
    celulaSubTotal.textContent = quantidade * valor;


    tr.appendChild(celulaNome );
    tr.appendChild(celulaQuant );
    tr.appendChild(celulaValor );
    tr.appendChild(celulaSubTotal );


    let tBody = document.querySelector('#tbodyItemPedido');

    tBody.appendChild(tr);

    console.log(tr );
    //.log(celulaNome );





} );




