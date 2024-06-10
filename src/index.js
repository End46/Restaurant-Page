import './style.css';
import { CargaInicio } from './inicio';
import { CargaMenu } from './menu';
import { CargaInfo } from './info';

function CrearDomController(){
    const inicio=document.querySelector('#inicio');
    const menu=document.querySelector('#menu');
    const info=document.querySelector('#info');
    const contenedor=document.querySelector('#content');

    return{inicio,menu,info,contenedor};
}

function main(){
    const dom = CrearDomController();
    let lugar = 'inicio';
    dom.inicio.addEventListener('click',(event)=>{
        switch(lugar){
            case 'menu':
                dom.menu.classList.remove('seleccionado');
                event.target.classList.add('seleccionado');
                while (dom.contenedor.firstChild) {
                    dom.contenedor.removeChild(dom.contenedor.firstChild);
                  }
                CargaInicio();
                break;
            case 'info':
                dom.info.classList.remove('seleccionado');
                event.target.classList.add('seleccionado');
                while (dom.contenedor.firstChild) {
                    dom.contenedor.removeChild(dom.contenedor.firstChild);
                  }
                CargaInicio();
                break;
        }
        lugar='inicio';
    })

    dom.menu.addEventListener('click',(event)=>{
        switch(lugar){
            case 'inicio':
                dom.inicio.classList.remove('seleccionado');
                event.target.classList.add('seleccionado');
                while (dom.contenedor.firstChild) {
                    dom.contenedor.removeChild(dom.contenedor.firstChild);
                  }
                CargaMenu();
                break;
            case 'info':
                dom.info.classList.remove('seleccionado');
                event.target.classList.add('seleccionado');
                while (dom.contenedor.firstChild) {
                    dom.contenedor.removeChild(dom.contenedor.firstChild);
                  }
                CargaMenu();
                break;
        }
        lugar='menu';
    })

    dom.info.addEventListener('click',(event)=>{
        switch(lugar){
            case 'menu':
                dom.menu.classList.remove('seleccionado');
                event.target.classList.add('seleccionado');
                while (dom.contenedor.firstChild) {
                    dom.contenedor.removeChild(dom.contenedor.firstChild);
                  }
                CargaInfo();
                break;
            case 'inicio':
                dom.inicio.classList.remove('seleccionado');
                event.target.classList.add('seleccionado');
                while (dom.contenedor.firstChild) {
                    dom.contenedor.removeChild(dom.contenedor.firstChild);
                  }
                  CargaInfo();
                break;
        }
        lugar='info';
    })
}

CargaInicio();
main();