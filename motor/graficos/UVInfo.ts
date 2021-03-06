﻿import Vector2 from "../fisica/matematicas/vector2";

/**
 * Representa el valor minimo y maximo de texturas de coordenada. Sirve para almacenar infomacion de una imagen o textura
 * que quiere recortarse.
 * */
export default class UVInfo {
    /**
     * Valor minimo (coord x e y) del uv de la textura.
     * */
    public min: Vector2;

    /**
     * Valor maximo (coord x e y) del uv de la textura.
     * */
    public max: Vector2;

    /**
     * Crea una nueva informacion UV
     * @param min Valor minimo del UV de la textura.
     * @param max Valor maximo del UV de la textura.
     */
    public constructor(min: Vector2, max: Vector2) {
        this.min = min;
        this.max = max;
    }
}