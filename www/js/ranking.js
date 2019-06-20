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
            console.log('Deu certo.\n', response);
        })
        .catch(function (erro){
            console.log("Deu erro. ", erro)
        })

}