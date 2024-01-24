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

AtualizarContador("cont_akira_ds1","soma_akira_ds1","menos_akira_ds1");
AtualizarContador("cont_dudu_ds1","soma_dudu_ds1","menos_dudu_ds1");
AtualizarContador("cont_akira_ds2","soma_akira_ds2","menos_akira_ds2");
AtualizarContador("cont_dudu_ds2","soma_dudu_ds2","menos_dudu_ds2");
AtualizarContador("cont_akira_ds3","soma_akira_ds3","menos_akira_ds3");
AtualizarContador("cont_dudu_ds3","soma_dudu_ds3","menos_dudu_ds3");
AtualizarContador("cont_akira_er","soma_akira_er","menos_akira_er");
AtualizarContador("cont_dudu_er","soma_dudu_er","menos_dudu_er");