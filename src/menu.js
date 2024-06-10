function CargaMenu(){
    const content=document.querySelector('#content');
    const h1=document.createElement('h1');
    const div=document.createElement('div');
    h1.textContent='Menu';
    content.appendChild(h1);
    content.appendChild(div);
    for(let i=0;i<6;i++){
        const elementoDiv=document.createElement('div');
        const elemento=document.createElement('h3');
        div.appendChild(elementoDiv);
        switch(i){
            case 0:
                elemento.textContent='Entrantes';
                elementoDiv.appendChild(elemento);
                for(let o=0;o<1;o++){
                    const elementoContenido=document.createElement('p');
                    switch(o){
                        case 0:
                            elementoContenido.textContent='Tostonnes Rellenos-----------2.50$'
                            elementoDiv.appendChild(elementoContenido);
                            break;
                        case 1:
                            elementoContenido.textContent='Empanadas--------------------3.50$'
                            elementoDiv.appendChild(elementoContenido);
                            break;
                    }
                }
                break;
            case 1:
                elemento.textContent='Carnes'
                elementoDiv.appendChild(elemento);
                for(let o=0;o<4;o++){
                    const elementoContenido=document.createElement('p');
                    switch(o){
                        case 0:
                            elementoContenido.textContent='Bistec de cerdo-------------10.50$'
                            elementoDiv.appendChild(elementoContenido);
                            break;
                        case 1:
                            elementoContenido.textContent='Chuleta Ahumada-------------15.50$'
                            elementoDiv.appendChild(elementoContenido);
                            break;
                        case 2:
                            elementoContenido.textContent='Filete Canciller------------20.50$'
                            elementoDiv.appendChild(elementoContenido);
                            break;
                        case 3:
                            elementoContenido.textContent='Uruguayo--------------------18.50$'
                            elementoDiv.appendChild(elementoContenido);
                            break;
                    }
                }
                break;
            case 2:
                elemento.textContent='Guarniciones';
                elementoDiv.appendChild(elemento);
                for(let o=0;o<3;o++){
                    const elementoContenido=document.createElement('p');
                    switch(o){
                        case 0:
                            elementoContenido.textContent='Arroz Moro-------------------2.50$'
                            elementoDiv.appendChild(elementoContenido);
                            break;
                        case 1:
                            elementoContenido.textContent='Arroz Amarrillo--------------3.50$'
                            elementoDiv.appendChild(elementoContenido);
                            break;
                        case 2:
                            elementoContenido.textContent='Ensalada---------------------1.50$'
                            elementoDiv.appendChild(elementoContenido);
                            break;
                    }
                }
                
                break;
            case 3:
                elemento.textContent='Pastas';
                elementoDiv.appendChild(elemento);
                for(let o=0;o<3;o++){
                    const elementoContenido=document.createElement('p');
                    switch(o){
                        case 0:
                            elementoContenido.textContent='Espagheti--------------------5.50$'
                            elementoDiv.appendChild(elementoContenido);
                            break;
                        case 1:
                            elementoContenido.textContent='Pizza------------------------6.50$'
                            elementoDiv.appendChild(elementoContenido);
                            break;
                        case 2:
                            elementoContenido.textContent='Lasaña-----------------------7.50$'
                            elementoDiv.appendChild(elementoContenido);
                            break;
                    }
                }
                
                break;
            case 4:
                elemento.textContent='Postres';
                elementoDiv.appendChild(elemento);
                for(let o=0;o<3;o++){
                    const elementoContenido=document.createElement('p');
                    switch(o){
                        case 0:
                            elementoContenido.textContent='Helado-----------------------3.50$'
                            elementoDiv.appendChild(elementoContenido);
                            break;
                        case 1:
                            elementoContenido.textContent='Flan-------------------------2.50$'
                            elementoDiv.appendChild(elementoContenido);
                            break;
                        case 2:
                            elementoContenido.textContent='Natilla----------------------2.70$'
                            elementoDiv.appendChild(elementoContenido);
                            break;
                    }
                }
                
                break;
            case 5:
                elemento.textContent='Bebidas';
                elementoDiv.appendChild(elemento);
                for(let o=0;o<4;o++){
                    const elementoContenido=document.createElement('p');
                    switch(o){
                        case 0:
                            elementoContenido.textContent='Cerveza----------------------1.50$'
                            elementoDiv.appendChild(elementoContenido);
                            break;
                        case 1:
                            elementoContenido.textContent='Refresco---------------------0.50$'
                            elementoDiv.appendChild(elementoContenido);
                            break;
                        case 2:
                            elementoContenido.textContent='Piña Colada------------------2.70$'
                            elementoDiv.appendChild(elementoContenido);
                            break;
                        case 3:
                            elementoContenido.textContent='Malta------------------------1.90$'
                            elementoDiv.appendChild(elementoContenido);
                            break;
                    }
                }
                break;
        }
    }
}

export {CargaMenu};