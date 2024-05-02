function AtualizarContador(Contador,soma,sub){
    let contador=localStorage.getItem(Contador) ? parseInt(localStorage.getItem(Contador)) : 0;

    document.getElementById(Contador).innerHTML=contador;

    document.getElementById(soma).onclick=function(){
        contador+=1;
    document.getElementById(Contador).innerHTML=contador
    localStorage.setItem(Contador,contador);
    }

    document.getElementById(sub).onclick=function(){
        contador-=1;
        document.getElementById(Contador).innerHTML=contador;
        localStorage.setItem(Contador,contador);
    }


}

AtualizarContador("cont_p1_ds1","soma_p1_ds1","menos_p1_ds1");
AtualizarContador("cont_p2_ds1","soma_p2_ds1","menos_p2_ds1");
AtualizarContador("cont_p1_ds2","soma_p1_ds2","menos_p1_ds2");
AtualizarContador("cont_p2_ds2","soma_p2_ds2","menos_p2_ds2");
AtualizarContador("cont_p1_ds3","soma_p1_ds3","menos_p1_ds3");
AtualizarContador("cont_p2_ds3","soma_p2_ds3","menos_p2_ds3");
AtualizarContador("cont_p1_er","soma_p1_er","menos_p1_er");
AtualizarContador("cont_p2_er","soma_p2_er","menos_p2_er");