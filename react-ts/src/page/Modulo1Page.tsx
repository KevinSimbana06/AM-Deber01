import { Link } from "react-router"
import { CalcularDanio } from "../utils/calcularDanio"

export const Modulo1Page = () => {

    //Inferencia vs Anotación de tipos
    let saga= "Saiyan Saga" //Inferido
    let  horasdeentrenamiento: number = 36 //Anotado

    //Tipos de datos básicos
    let guerrero: string = "Goku"
    const ki: number = 9001  //Enteros como decimales
    const enCombate: boolean = true

    //Arrays
    const equipoZ: string[]=["Goku", "Vegeta", "Gohan","Piccolo"]

    //Tuplas
    const coordenadas: [number, number, string]= [42,17, "hola"]  //Limitado a un tamaño  fijo y combinar varios tipos de datos.

    //Funciones Tipadas (parametros + retorno)
    
    //function CalcularDanio(base:number, multiplicador:number): number {
    //    return base * multiplicador
    //}

    //Valores nulos y undefined
    let  transformacion: string | null = null //Puede ser string o null
    transformacion = "Super Saiyan" //Asignación de valor

    let estrategia: string | undefined = undefined //Puede ser string o undefined
    estrategia = "Tranformarse a utra instinto" //Asignación de valor

    // valores any y unknown

    let variableLibre:any = "Semilla del ermitaño"
    variableLibre = 42 //Cualquier tipo de valor

    let evento: unknown = "refuerzos" //Tipo desconocido
    let eventoMayus: string| null= null

    if(typeof evento === "string"){
        eventoMayus = evento.toUpperCase() //Se puede usar el método toUpperCase() porque se ha verificado que es un string
    }

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
        <div className="mx-auto max-w-3xl px-8">
            <header className="md-8 border-b border-neutral-800 pb-4">
                <Link to="/" className="ppx-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg Shadow-md ">
                    Volver a Home
                </Link>
                <h1 className="text-2xl font-semibold text-blue-500">
                    React + TypeScript - Módulo 1
                </h1>
                <p className="text-neutral-400">
                    Fundamentos: Tipos básicos, interfaces, arrays y tuplas.
                </p>
            </header>
            <section className="mt-8">
                <h2 className="text-xl font-medium text-blue-300 mb-2">
                    Inferencia y basicos
                </h2>
                <div className="grid grid-cols-1  md:grid-clos-2 gap-2">
                    <div>Saga: {saga}</div>
                    <div>Horas de entrenamiento: {horasdeentrenamiento}</div>
                    <div>Guerrero: {guerrero}</div>
                    <div>Ki: {ki}</div>
                    <div>En combate: {enCombate ? "Sí" : "No"}</div>
                </div>
            </section>
            <section className="mt-8">
                <h2 className="text-xl font-medium text-blue-300 mb-2">
                    Arrays
                </h2>
                <div>
                    Equipo Z: {equipoZ.join(", ")}
                </div>
                <h2 className="text-xl font-medium text-blue-300 mb-2">
                    Tuplas
                </h2>
                <div>
                    coordenadas[x,y,mensaje]: x={coordenadas[0]}, y={coordenadas[1]}, mensaje={coordenadas[2]}
                </div>
            </section>
            <section className="mt-8">
                <h2 className="text-xl font-medium text-blue-300 mb-2">
                    Funciones Tipadas
                </h2>
                <div>
                   <p>Danio calculado:(base 450 x multi. 2)</p>
                   <span> {CalcularDanio(450, 2)}</span>
                </div>
            </section>
                        <section className="mt-8">
                <h2 className="text-xl font-medium text-blue-300 mb-2">
                    Any y Unknown
                </h2>
                <div>
                    <p>Variable libre: {variableLibre}</p>
                    <p>Evento en mayusculas: {eventoMayus}</p>
                </div>
            </section>
        </div>

    </main>
  )
}