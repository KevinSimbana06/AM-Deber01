import { evaluarNotas } from "./evaluacionNotas";
import type { EvaluacionResultado } from "./evaluacionNotas";

export interface CalculadoraNotasState {
  entrada: string;
  nota1: number | null;
  operacion: "+" | null;
  resultado: EvaluacionResultado | null;
  overwrite: boolean;
  error: string | null;
}

export type CalculadoraNotasAction =
  | { type: "ADD_DIGIT"; payload: { digit: string } }
  | { type: "CHOOSE_OPERATION" }
  | { type: "CLEAR" }
  | { type: "DELETE_DIGIT" }
  | { type: "EVALUATE" };

export const initialCalculadoraNotasState: CalculadoraNotasState = {
  entrada: "",
  nota1: null,
  operacion: null,
  resultado: null,
  overwrite: false,
  error: null,
};

const MAX_DIGITOS = 2;

function validarRango(nota: number): string | null {
  if (!Number.isInteger(nota)) {
    return "La nota debe ser un valor entero (sin decimales).";
  }
  if (nota < 0 || nota > 20) {
    return "Cada nota debe estar entre 0 y 20.";
  }
  return null;
}

export function calculadoraNotasReducer(
  state: CalculadoraNotasState,
  action: CalculadoraNotasAction,
): CalculadoraNotasState {
  switch (action.type) {
    case "ADD_DIGIT": {
      const { digit } = action.payload;
      if (!/^[0-9]$/.test(digit)) return state;
      if (state.overwrite) {
        return {
          ...initialCalculadoraNotasState,
          entrada: digit,
        };
      }
      if (state.entrada.length >= MAX_DIGITOS) return state;
      if (state.entrada === "0" && digit === "0") return state;
      if (state.entrada === "" || state.entrada === "0") {
        return { ...state, entrada: digit, resultado: null, error: null };
      }
      return {
        ...state,
        entrada: `${state.entrada}${digit}`,
        resultado: null,
        error: null,
      };
    }

    case "CHOOSE_OPERATION": {
      if (state.overwrite) {
        return {
          ...state,
          error: "Resultado en pantalla. Presiona AC para una nueva evaluación.",
        };
      }
      if (state.entrada === "" && state.nota1 == null) {
        return {
          ...state,
          error: "Ingresa primero la Nota 1 (0 a 20) antes de sumar.",
        };
      }
      if (state.entrada === "" && state.nota1 != null) {
        return { ...state, operacion: "+", error: null };
      }
      const candidata = Number.parseInt(state.entrada, 10);
      const problema = validarRango(candidata);
      if (problema) {
        return { ...state, error: `Nota 1 inválida: ${problema}` };
      }
      if (state.nota1 != null) {
        return {
          ...state,
          error: "Solo se suman dos notas (Nota 1 + Nota 2).",
        };
      }
      return {
        ...state,
        nota1: candidata,
        operacion: "+",
        entrada: "",
        resultado: null,
        error: null,
      };
    }

    case "CLEAR": {
      return { ...initialCalculadoraNotasState };
    }

    case "DELETE_DIGIT": {
      if (state.overwrite) return { ...initialCalculadoraNotasState };
      if (state.error) return { ...state, error: null };
      if (state.entrada === "") return state;
      return { ...state, entrada: state.entrada.slice(0, -1) };
    }

    case "EVALUATE": {
      if (state.overwrite) return state;
      if (state.nota1 == null || state.operacion == null || state.entrada === "") {
        return {
          ...state,
          error: "Operación incompleta: ingresa Nota 1, presiona + y luego Nota 2.",
        };
      }
      const nota2 = Number.parseInt(state.entrada, 10);
      const problema = validarRango(nota2);
      if (problema) {
        return { ...state, error: `Nota 2 inválida: ${problema}` };
      }
      try {
        const resultado = evaluarNotas(state.nota1, nota2);
        return {
          ...state,
          resultado,
          entrada: String(resultado.notaFinal),
          overwrite: true,
          error: null,
        };
      } catch (err: unknown) {
        const mensaje = err instanceof Error ? err.message : "No se pudo evaluar.";
        return { ...state, resultado: null, error: mensaje };
      }
    }
  }
}
