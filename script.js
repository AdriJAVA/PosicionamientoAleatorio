
window.onload = function(){
    document.getElementById("anadir").onclick = anadirDiv;
}

var margenes = [];

function anadirDiv(){
    var cont = document.createElement("DIV");
    
    cont.className = "cont";
    
    var anchuraPantalla = window.innerWidth;
    
    var alturaPantalla = window.innerHeight;
    
    var seguir = true;
    
    while(seguir){
        
        var coincide = false;
        
        var aleatorioTop = Math.floor(Math.random()*(alturaPantalla-200)-200) + 200;
        
        var aleatorioLeft =  Math.floor(Math.random()*(anchuraPantalla-200)-200) + 200;
        
        if(margenes.length === 0){
            margenes.push([aleatorioTop,aleatorioLeft]);
        }else{
            for(var i = 0; i < margenes.length; i++){
                      if(margenes[i][0] - aleatorioTop > 200 || aleatorioTop - margenes[i][0] > 200||
                        margenes[i][1] - aleatorioLeft > 200 || aleatorioLeft - margenes[i][1] > 200 ){
                         
                          coincide = false;
                      }else{
                          coincide = true;
                          break;
                      }
                  

              }
            }
        
        if(!coincide){
           
            margenes.push([aleatorioTop,aleatorioLeft]);
            seguir = false;
        }
        }
    
    
    cont.style.top =  aleatorioTop + "px";
        
    cont.style.left = aleatorioLeft + "px";
    
    document.body.appendChild(cont);
}