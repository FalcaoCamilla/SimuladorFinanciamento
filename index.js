const comCarencia = document.querySelector('#comCarencia');
const listaSuspensa = document.querySelector('#listaSuspensa');
const corpoTabela = document.querySelector('#corpoTabela')

comCarencia.addEventListener('change', function(){
    if(this.checked){
        listaSuspensa.removeAttribute('hidden');
    }else{
        listaSuspensa.setAttribute('hidden', 'hidden')
    }   
});