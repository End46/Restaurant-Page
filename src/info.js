function CargaInfo(){
    const content=document.querySelector('#content');
    const h1=document.createElement('h1');
    const div=document.createElement('div');
    h1.textContent='Contact Us';
    content.appendChild(h1);
    content.appendChild(div);
    for(let i=0;i<3;i++){
        const elemento=document.createElement('div');
        div.appendChild(elemento);
        const h3=document.createElement('h3');
        const p=document.createElement('p');
        const p1=document.createElement('p');
        switch(i){
            case 0:
                
                h3.textContent='Manager';
                p.textContent='Numero:111558-6587';
                p1.textContent='Correo:user@gmail.com';
                elemento.appendChild(h3);
                elemento.appendChild(p);
                elemento.appendChild(p1);
                break;
            case 1:
                h3.textContent='Custom Manager';
                p.textContent='Numero:11358-6587';
                p1.textContent='Correo:user2@gmail.com';
                elemento.appendChild(h3);
                elemento.appendChild(p);
                elemento.appendChild(p1);
                break;
            case 2:
                h3.textContent='Chef';
                p.textContent='Numero:11358-6487';
                p1.textContent='Correo:user3@gmail.com';
                elemento.appendChild(h3);
                elemento.appendChild(p);
                elemento.appendChild(p1);
                break;
        }
    }
}

export {CargaInfo};