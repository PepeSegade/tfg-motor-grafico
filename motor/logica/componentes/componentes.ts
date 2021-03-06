﻿import Componente from './componente';
import ConstantesError from '../../constantes/constantesError';

/**
 * Gestiona todos los componentes necesarios para usarse.
 * */
export default class Componentes {

    private static _componentes: { [type: string]: any } = {};

    /**
     * Guarda en memoria los import necesarios para trabajar con ellos.
     * @param componentes Nombres de los componentes existentes. 
     */
    public static guardarComponentes(componentes: string[][]): void {
        componentes[0].forEach((c) => {
            const componente = require(`./componentesDefault/${c}`).default;
            if (componente) {
                Componentes._componentes[componente.name] = componente;
            }
        });
        componentes[1].forEach((c) => {
            const componente = require(`assets/componentes/${c}`).default;
            if (componente) {
                Componentes._componentes[componente.name] = componente;
            }
        });
    } 

    /**
     * Obtiene el componente del tipo buscado.
     * @param json Objeto json que contiene la configuracion y el tipo del componente que se quiere generar.
     */
    public static generarComponente(json: any): Componente {

        if (json.tipo) {
            return Object.assign(new Componentes._componentes[json.tipo](), json);
        } else {
            throw new Error(ConstantesError.ERROR_OBTENER_COMPONENTE);
        }
    }
}


