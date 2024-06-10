function CargaInicio(){
    const content=document.querySelector('#content');
    const h1=document.createElement('h1');
    const div=document.createElement('div');
    const descripcion=document.createElement('div');
    const descripcionTitulo=document.createElement('h3');
    const descripcionContenido=document.createElement('p');
    const Horario=document.createElement('div');
    const HorarioTitulo=document.createElement('h3');
    Horario.appendChild(HorarioTitulo);
    for(let i=0;i<7;i++){
        const HorarioContenido=document.createElement('p');
        switch(i){
            case 0:
                HorarioContenido.textContent='Sunday: 8am-8pm'
                Horario.appendChild(HorarioContenido);
                break;
            case 1:
                HorarioContenido.textContent='Monday: 6am - 6pm'
                Horario.appendChild(HorarioContenido);
                break;
            case 2:
                HorarioContenido.textContent='Tuesday: 6am - 6pm'
                Horario.appendChild(HorarioContenido);
                break;
            case 3:
                HorarioContenido.textContent='Wednesday: 6am - 6pm'
                Horario.appendChild(HorarioContenido);
                break;
            case 4:
                HorarioContenido.textContent='Thursday: 6am - 10pm'
                Horario.appendChild(HorarioContenido);
                break;
            case 5:
                HorarioContenido.textContent='Friday: 6am - 10pm'
                Horario.appendChild(HorarioContenido);
                break;
            case 6:
                HorarioContenido.textContent='Saturday: 8am-10pm'
                Horario.appendChild(HorarioContenido);
                break;
        }
    }
    const Direccion=document.createElement('div');
    const DireccionTitulo=document.createElement('h3');
    const DireccionContenido=document.createElement('p');

    h1.textContent='A Good Restaurant';
    descripcionTitulo.textContent='Restaurant Description:';
    descripcionContenido.textContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio necessitatibus ratione esse ea deserunt nihil? Aut culpa, error nihil illo voluptates architecto consequatur excepturi, voluptatem id, quis laboriosam itaque possimus!';
    HorarioTitulo.textContent='Hours:';
    DireccionTitulo.textContent='Location';
    DireccionContenido.textContent='123 Good Place,Heaven,All Good';

    content.appendChild(h1);
    content.appendChild(div);
    div.appendChild(descripcion);
    div.appendChild(Horario);
    div.appendChild(Direccion);
    descripcion.appendChild(descripcionTitulo);
    descripcion.appendChild(descripcionContenido);
    Direccion.appendChild(DireccionTitulo);
    Direccion.appendChild(DireccionContenido);
}

export {CargaInicio};