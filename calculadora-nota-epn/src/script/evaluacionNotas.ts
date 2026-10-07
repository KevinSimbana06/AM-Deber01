export type NotaEstado = "aprobado" | "supletorio" | "reprobado";

export interface EvaluacionResultado {
  notaFinal: number;
  estado: NotaEstado;
  mensaje: string;
}

export interface NotaValidacion {
  valida: boolean;
  error: string | null;
}

const MIN_NOTA = 0;
const MAX_NOTA = 20;

export function validarNota(valor: unknown): NotaValidacion {
  if (typeof valor !== "number" || Number.isNaN(valor)) {
    return { valida: false, error: "La nota debe ser un número." };
  }
  if (!Number.isInteger(valor)) {
    return { valida: false, error: "La nota debe ser un valor entero (sin decimales)." };
  }
  if (valor < MIN_NOTA || valor > MAX_NOTA) {
    return {
      valida: false,
      error: `La nota debe estar entre ${MIN_NOTA} y ${MAX_NOTA}.`,
    };
  }
  return { valida: true, error: null };
}

export function evaluarNotas(nota1: number, nota2: number): EvaluacionResultado {
  const v1 = validarNota(nota1);
  if (!v1.valida) {
    throw new Error(v1.error ?? "Nota 1 inválida.");
  }
  const v2 = validarNota(nota2);
  if (!v2.valida) {
    throw new Error(v2.error ?? "Nota 2 inválida.");
  }

  const notaFinal: number = nota1 + nota2;

  if (notaFinal >= 28) {
    return {
      notaFinal,
      estado: "aprobado",
      mensaje: `Nota final ${notaFinal}/40: pasa o es exonerado.`,
    };
  }
  if (notaFinal >= 18) {
    return {
      notaFinal,
      estado: "supletorio",
      mensaje: `Nota final ${notaFinal}/40: en supletorio.`,
    };
  }
  return {
    notaFinal,
    estado: "reprobado",
    mensaje: `Nota final ${notaFinal}/40: perdió la materia.`,
  };
}
