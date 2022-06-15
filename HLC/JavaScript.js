const End_das_casas=[
                    "assets/20210317_003228.jpg",
                    "assets/small house02.jpg",
                    "assets/t43.jpg",
                    "assets/ESCOLA 2.jpg",
                    "assets/FOTO 9.jpg",
                    "assets/project cave 02.jpg",
                    "assets/IMG-20200910-WA0002.jpg",
                    "assets/escola secundaria.jpg",
                    "assets/20210430_211313.jpg",
                    "assets/IMG-20200908-WA0005.jpg",
                    "assets/casalike.jpg",
                    "assets/planta de piso t3 r1 Picture.jpg",
                    "assets/IMG-20201221-WA0005.jpg",
                    "assets/IMG-20210303-WA0009.jpg",
];



const precos_das_casa=["Preco: 25.000Mts","Preco: 55.000Mts","Preco: 30.000Mts","Preco: 48.000Mts","Preco: 13.000Mts","Preco: 25.000Mts","Preco: 65.000Mts","Preco: 33.000Mts","Preco: 40.000Mts","Preco: 15.000Mts","Preco: 20.000Mts","Preco: 8.000Mts","Preco: 31.000Mts"];
const id_das_casa=[2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013];

var indice=0;

function change(){
 
    if(indice<13){
        document.getElementById("img").src=End_das_casas[indice];
        document.getElementById("labl").innerHTML=precos_das_casa[indice];
        indice++;
        if(indice==13){
            indice=0;
        }
    }
  }
 
function visitado(){
    var checado=document.getElementById("cbox");
    if(checado.checked){
        document.getElementById("btn").style.display="none";
    }
    else{
        document.getElementById("btn").style.display="flex";
    }
}
  
function contacto(codigo){
    const menuicons=document.querySelector(".menuicons");
    
        ///abertura do menu dos icons
    if(codigo=="1"){
        menuicons.style.display="flex";
    }
    ///fecho do menu dos icons
    else
        menuicons.style.display="none";       
}
function mostrar(){
    
        const lista=document.querySelector(".lista");
       lista.style.display="flex"; 
        const menuClose=document.getElementById("menuClose");
        const menuOpen= document.getElementById("menuOpen");
        menuOpen.style.display="none";
        menuClose.style.display="block";
    
      menuClose.addEventListener('click', function fechar(){
          lista.style.display="none";
          menuClose.style.display="none";
          menuOpen.style.display="block";}); 
      
}
