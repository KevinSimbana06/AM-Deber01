import {useState} from "react";
import { Link } from "react-router-dom";

type ContadorProps = {
    initial?: number;
    step?: number;
}

export const Module2Page = ({initial = 0, step = 1}: ContadorProps) => {

    const [contador, setContador] = useState(initial);

    const inc = () => setContador((c) => c + step);
    const dec = () => setContador((c) => c - step);


    //inferio UseState
    const [tazas, setTazas] = useState(1);


    //types describe la forma de los datos
    type ingredientes =  "agua" |"cafe" | "azucar" 
    
    type RecetaCafe = {
        agua?: number;
        cafe?: number;
        azucar?: number;
    };

    type CafePreparado = {
        mensaje: string;
        intensidad: "suave" | "fuerte";
    }

    //explicito UseState
    const [intensidadUI, setIntensidadUI] = useState<CafePreparado["intensidad"]>("suave");

    //explicito con valores nulos
    const [ultimoCafe, setUltimoCafe] = useState<CafePreparado | null>(null);

    //valores que no estan definidos
    const [azucarEntrada, setazucarEntrada] = useState<number| undefined>(undefined);

    //Interfaces
    //Padre
    interface RecetaBase {
        agua: number;
        cafe: number;
    }

    //Hijo
    interface RecetaConAzucar extends RecetaBase {azucar: number} //hereda del padre hacia el hijo.

    interface MaquinaCafe {modelo:string}

    interface MaquinaCafe {aguaMax?:number} //al aplicar ? significa que el valor puede ser opcional.
    
    const maquina: MaquinaCafe = {modelo: "Delonghi", aguaMax: 2000}


    //funcion con type
    //function prepararCafe(receta:RecetaCafe): CafePreparado {
    //    const intensidad = receta.cafe > 10 ? "fuerte" : "suave";

    //    return{
    //        mensaje: `Café preparado con ${receta.agua}ml de agua, ${receta.cafe}g de café` + (receta.azucar? `+ ${receta.azucar}g de azúcar`:" "),
    //        intensidad,
            
    //    }
        
    //}

    //funcion con interface
    interface cafePreparadoI{mensaje: string; intensidad: "suave" | "fuerte"}

    function prepararCafeI(receta:RecetaConAzucar): cafePreparadoI {
        const intensidad: cafePreparadoI["intensidad"] = receta.cafe > 10 ? "fuerte" : "suave";
        return{
            mensaje:`Cafe listo  con ${receta.agua}ml de agua, ${receta.cafe}g de cafe` + (receta.azucar? `+ ${receta.azucar}g de azucar`:" "),
            intensidad,
        }

    }

    //Valores por default
        function prepararCafe({agua= 0, cafe= 0, azucar= 0}: RecetaCafe): CafePreparado {
        const intensidad = cafe > 10 ? "fuerte" : "suave";

        return{
            mensaje: `Café preparado con ${agua}ml de agua, ${cafe}g de café` + (azucar? `+ ${azucar}g de azúcar`:" "),
            intensidad,   
        }
        
    }

    //Eventos
    const OnCafe =() => {
        const resultado = prepararCafe({ cafe: 5, azucar: 5});
        alert(resultado.mensaje + ",  con intensidad: " + resultado.intensidad);
    }

    const OnCafeI =() => {
        const resultado = prepararCafeI({agua: 200, cafe: 5, azucar: 5});
        alert(resultado.mensaje + ",  con intensidad: " + resultado.intensidad);
    }

    //intersecciones si son difeterentes tipos de datos tiene que incluirse
    //encaso donde se repitan los nombres de las propiedades, relaiza el mismo comportamiento.
    type A = {nombre: string;};
    type B = {edad: number;};
    type C = {State:Boolean};

    type Persona = A & B & C; //interseccion de A y B y C

    const juan:Persona = {nombre: "Juan", edad: 30, State: true};


  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
        <div className="mx-auto max-w-3xl px-8 flex flex-col p-4 gap-4">
            <header className="md-8 border-b border-neutral-800 pb-4">
                <Link to="/" className="ppx-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg Shadow-md ">
                    Volver a Home
                </Link>
                <h1 className="text-2xl font-semibold text-blue-500">
                    React + TypeScript - Módulo 2
                </h1>
                <p className="text-neutral-400">
                    Fundamentos: Props y Estados.
                </p>
            </header>
            <span>Modulo 2</span>
            <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl" 
            onClick={OnCafe}>Hacer Café type</button>
            <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl" 
            onClick={OnCafeI}>Hacer Café interface</button>

            <span>state tipados</span>
            {intensidadUI}
            <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl" 
            onClick={()=>setIntensidadUI("fuerte")}>Cambiar intensidad</button>

            <span>Contador</span>
            <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl" 
            onClick={dec}>-</button>
            <span>{contador}</span>
            <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl" 
            onClick={inc}>+</button>

            <h2>Interseccion (&)</h2>
            {juan.nombre} tiene {juan.edad} años.
            <pre>{JSON.stringify(juan, null, 2)}</pre>
        </div>
    </div>
  )
}