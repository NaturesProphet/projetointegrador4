window.onload = function init() {

    var myHeaders = new Headers();
    try {
        myHeaders.set("Origin", "https://integrador4.herokuapp.com");
    } catch (e) {
        console.log("Cannot pretend to be a bank!");
    }

    var url = "https://integrador4.herokuapp.com";//Sua URL

    var myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
    };

    fetch(url, myInit)
        .then(function (response) {
            //console.log('Deu certo.\n', response.json());
            response.json()
                .then(data => {
                    let jogadores = data;

                    opcao = document.getElementsByTagName('li'),

                    opcao[0].innerHTML = data[0].Jogador_nome + " " +data[0].Jogador_acertos + ' Acertos';
                    opcao[1].innerHTML = data[1].Jogador_nome + " " +data[1].Jogador_acertos + ' Acertos';
                    opcao[2].innerHTML = data[2].Jogador_nome + " " +data[2].Jogador_acertos + ' Acertos';
                    opcao[3].innerHTML = data[3].Jogador_nome + " " +data[3].Jogador_acertos + ' Acertos';
                    console.log(data)
                })
        })
        .catch(function (erro) {
            console.log("Deu erro. ", erro)
        })

 /*   let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://integrador4.herokuapp.com');

    xhr.responseType = 'json';

    xhr.send();

    // the response is {"message": "Hello, world!"}
    xhr.onload = function () {
        let responseObj = xhr.response;
        alert(responseObj.message); // Hello, world!
    };
*/
}