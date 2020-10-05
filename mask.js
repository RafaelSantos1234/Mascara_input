function mask(mascara, input){
        const vetmask=mascara.split("");//Transforma a mascara que foi passada na paramatero em um vetor
        const val = input.value.replace(/\D/g,"");//vai pegar apenas os digitos que forem digitados no input
        const cursor = Number(input.selectionStart);//captrua a posição do cursor e converte para numero
        const tecla = (window.event) ? event.keyCode:event.which; //Captura o código das teclas do usuário 
        var vet="[a-zà-ú]";//está representando um regEx
        var regexp=new RegExp(vet,'gi');//Criando um objeto RegExp que vai receber a var vet para ser usado na função replace
        const tecval=[48,49,50,51,52,53,54,55,56,57,8,37,39,96,97,98,99,100,101,102,103,104,105,107]; // esse vetor será responsável por verificar se o usuário não digitou letras, se o keycode estiver nesse array o codigo será ativado
        const mascaras=["###.###.###-##","(##)####-####","(##)#####-####","##.###.###/####-##","#####-###","##.###.###-#"];//esse vetor abriga as mascaras que são possíveis serem utilizadas no parâmetro
        input.value= input.value.replace(regexp,"");//impede que letras seja digitadas
        input.value= input.value.replace(/\s/g,""); //impede que espaços sejam digitados


        if(tecval.indexOf(tecla)>=0){//esse if verifica se a tecla digitada é válida, e então executa a função
          
           for(let c=0;c<val.length;c++){/* Nesse for, ele vai substituir as hashtags por numeros digitados, o loop faz isso acontecer durante todo o valor */
            vetmask.splice(vetmask.indexOf("#"),1,val[c]);
        }

        input.value=vetmask.join(""); //imprime a mascara no valor do input

//Condição para o cursor
/*
 * Os cursores irão se comportar de formas diferentes de acordo com a mascara que está sendo usada
*/
    if(mascaras.indexOf(mascara)==0){
        if(tecla != 37  && (cursor==3 || cursor==7||cursor==11)){
            input.setSelectionRange(cursor+1,cursor+1)
          }else{
             input.setSelectionRange(cursor,cursor);
          }
    }else if(mascaras.indexOf(mascara)==1){
        if(tecla != 37  && (cursor==1 && tecla != 8|| cursor==3||cursor==8)){
            input.setSelectionRange(cursor+1,cursor+1)
          }else{
             input.setSelectionRange(cursor,cursor);
          }
    }else if(mascaras.indexOf(mascara)==2){
        if(tecla != 37  && (cursor==1 && tecla != 8|| cursor==3||cursor==9)){
            input.setSelectionRange(cursor+1,cursor+1)
          }else{
             input.setSelectionRange(cursor,cursor);
          }
    }else if(mascaras.indexOf(mascara)==3){
       //alert(cursor)
        if(tecla != 37  && (cursor==2 && tecla != 8 || cursor==6||cursor==10||cursor==15)){
            input.setSelectionRange(cursor+1,cursor+1)
          }else{
             input.setSelectionRange(cursor,cursor);
          }
    }else if(mascaras.indexOf(mascara)==4){
        //alert(cursor)
         if(tecla != 37  && (cursor==5 && tecla != 8) ){
             input.setSelectionRange(cursor+1,cursor+1)
           }else{
              input.setSelectionRange(cursor,cursor);
           }
     }else if(mascaras.indexOf(mascara)==5){
        //alert(cursor)
         if(tecla != 37  && (cursor==2 && tecla != 8 || cursor==6||cursor==10)){
             input.setSelectionRange(cursor+1,cursor+1)
           }else{
              input.setSelectionRange(cursor,cursor);
           }
     }
      
//----------------------------------
        }else{//se a tecla que o usuário digitar for inválida, cairá nesse bloco
            input.value= input.value.replace(regexp,"");// vão impedir que a letra seja digitada
        input.value= input.value.replace(/\s/g,"");

      /*  input.value= input.value.replace('*',"");
        input.value= input.value.replace('@',"");
        input.value= input.value.replace('?',"");
        input.value= input.value.replace('!',"");
        input.value= input.value.replace('&',"");*/

        input.setSelectionRange(cursor-1,cursor-1);//vai impedir que o cursor avance casas
        }
    

       /* for(let c=0;c<val.length;c++){
            vetmask.splice(vetmask.indexOf("#"),1,val[c]);
        }

        input.value=vetmask.join("");

       if(tecla != 37  && (cursor==3 || cursor==7||cursor==11)){
          input.setSelectionRange(cursor+1,cursor+1)
        }else{
           input.setSelectionRange(cursor,cursor);
        }*/

  
 //alert(event.keyCode)
  
 }
