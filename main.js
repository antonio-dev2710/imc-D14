


function Calcular() {
    
    let txn1= document.getElementById('txn1');
    let txn2= document.getElementById('txn2');

   

    let peso=Number(txn1.value);
    let altura=Number(txn2.value);
  
    //condição if para vericar se está vazio utiliza o id de cada variável
    if (txn1.value.length==0 && txn1.value.length==0) {
        window.alert( '⚠ [Erro] Verifique os dados e tente novamente');
        
    }
    //calcular o imc
    else{
        let sex=window.document.getElementsByName('genero');
       
        let imc=peso/(altura*altura);
        let genero=''//inidica a escolha no radio masc ou fem
        let img=document.createElement('img')//criação de uma tag 
        img.setAttribute('id','foto')//criação de um id="foto" da tag img.

        if(sex[0].checked){

            genero='Homem'

            if(imc>=18.5 && imc<24.9 ){
                resp.innerHTML=(`${genero} com imc igual a ${imc.toFixed(2).replace('.',',')} kg/m: Peso normal`);

                img.setAttribute('src' , 'img/homem-normal.png');
                
            }
            else if(imc>=25 && imc<29.9 ){
                resp.innerHTML=(`${genero} com imc igual a ${imc.toFixed(2).replace('.',',')} kg/m: Sobre peso`);
                img.setAttribute('src' , 'img/homem-sobrepeso.png');
            }
            else if(imc>=30 && imc<34 ){
                resp.innerHTML=(`${genero} com imc igual a ${imc.toFixed(2).replace('.',',')} kg/m: Obesidade grau I`);
                img.setAttribute('src' , 'img/homem-obesidade-1.png');
                
            }
            else if(imc>=35 && imc<39.9 ){
                resp.innerHTML=(`${genero} com imc igual a ${imc.toFixed(2).replace('.',',')} kg/m: Obesidade grau II`);
                img.setAttribute('src' , 'img/obesidade-homem-2.png');
            }else{
                resp.innerHTML=(`${genero} com imc igual a ${imc.toFixed(2).replace('.',',')} kg/m: Obesidade grau III`);
                img.setAttribute('src' , 'img/obesidade-homem-2.png');
            }
            resp.appendChild(img);
        }


        else if(sex[1].checked){

            genero='Mulher'
            
            if(imc>=18.5 && imc<24.9 ){
                resp.innerHTML=(`${genero} com imc igual a ${imc.toFixed(2).replace('.',',')} kg/m: Peso normal`);
                img.setAttribute('src' , 'img/mulher-normal.png');
            }
            else if(imc>=25 && imc<29.9 ){
                resp.innerHTML=(`${genero} com imc igual a ${imc.toFixed(2).replace('.',',')} kg/m: Sobrepeso`);
                img.setAttribute('src' , 'img/mulher-sobrepeso.png');
            }
            else if(imc>=30 && imc<34 ){
                resp.innerHTML=(`${genero} com imc igual a ${imc.toFixed(2).replace('.',',')} kg/m: Obesidade grau I`);
                img.setAttribute('src' , 'img/mulher-obesidade-1.png');
                
            }
            else if(imc>=35 && imc<39.9 ){
                resp.innerHTML=(`${genero} com imc igual a ${imc.toFixed(2).replace('.',',')} kg/m: Obesidade grau II`);
                img.setAttribute('src' , 'img/mulher-obesidade-2.png');
                
            }else{
                resp.innerHTML=(`${genero} com imc igual a ${imc.toFixed(2).replace('.',',')} kg/m: Obesidade grau III`);
                img.setAttribute('src' , 'img/mulher-obesidade-2.png');
            }
            resp.appendChild(img);
        }
       
       resp.style.textAlign='center'
    }
    
     
}
