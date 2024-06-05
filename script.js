
const imgs = document.querySelectorAll("img");
imgs.forEach((item,index) => {
    item.addEventListener('click', ()=>{
        console.log("clicou");
    })
})



//blur sem javascript
function sair(){
    document.getElementById("input").style.backgroundColor = "orange";
}
//blur com javascript
const entrada = document.getElementById("input");
entrada.addEventListener("blur", ()=> {
    alert("mengão");
})


const selecao = document.getElementById("esporte")
selecao.addEventListener("change", (event)=>{
    const jogo = event.target.value;
    const imgnova = document.getElementById("p");
    let imgSrc;

    switch(jogo){
        case "futebol":
            imgSrc = "./imagens/drag1.jpg";
              break;
        case "basquete":
            imgSrc = './imagens/drag2.jpg';
            break;
        default:
            imgSrc = "";
    }
    imgnova.src = imgSrc;
})


/*
var cont = 1;

imgs.forEach((item,index) => {
    console.log(item, index);
    item.addEventListener('click', ()=>{
        cont = document.getElementById("42")
        console.log("clicou");
        if (cont == 1){
            item.height = 100;
            }
        else{
            item.height = 200;
        }
    });

})

function trocacont(){
    if(cont == 1){
        cont = 2;
    }
    else{
        cont = 1;
    }
    console.log(cont)
}
*/

const fruits = ["Banana", "Maça", "Uva", "Tomate"]
fruits.forEach((fruta) => {
    console.log(fruta);
})

/* aumenta e diminui
var cont = 1;
function clica(){
    console.log("cliquei");
    if (cont === 1){
        document.getElementById('1').style.height = "2rem";
        cont = 2
    }else{
        document.getElementById('1').style.height = "100%";
        cont = 1
    }
}
*/
