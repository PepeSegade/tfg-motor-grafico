﻿import Vector3 from "../math/vector3";
import Vector2 from "../math/vector2";

/**
 * Representa los datos de un vertice
 * */
export default class Vertice {

    /**
     * Posicion del vertice
     * */
    public posicion: Vector3 = Vector3.zero;

    /**
     * Coordenadas U, V de textura.
     * */
    public coordenadasTextura: Vector2 = Vector2.zero;

    /**
     * Crea un nuevo vertice.
     * @param x Coordenada x del espacio.
     * @param y Coordenada y del espacio.
     * @param z Coordenada z del espacio.
     * @param tu Coordenada U de la textura.
     * @param tv Coordenada V de la textura.
     */
    public constructor(x: number = 0, y: number = 0, z: number = 0, tu: number = 0, tv: number = 0) {
        this.posicion.x = x;
        this.posicion.y = y;
        this.posicion.z = z;

        this.coordenadasTextura.x = tu;
        this.coordenadasTextura.y = tv;
    }

    /**
     * Combina los datos de posicion y coordenadas de textura de este vertice en un solo array.
     * */
    public toArray(): number[] {
        let array: number[] = [];
        array = array.concat(this.posicion.toArray());
        array = array.concat(this.coordenadasTextura.toArray());
        return array;
    }

    /**
     * Combina los datos de posicion y coordenadas de textura de este vertice en un solo array con datos WebGl.
     * */
    public toFloat32Array(): Float32Array {
        return new Float32Array(this.toArray());
    }
}
