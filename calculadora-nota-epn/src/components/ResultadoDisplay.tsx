import type { EvaluacionResultado } from "../script/evaluacionNotas";

interface ResultadoDisplayProps {
  resultado: EvaluacionResultado | null;
  error: string | null;
}

const estadoClasses: Record<EvaluacionResultado["estado"], string> = {
  aprobado: "border-green-500/40 bg-green-500/10 text-green-300",
  supletorio: "border-yellow-500/40 bg-yellow-500/10 text-yellow-300",
  reprobado: "border-red-500/40 bg-red-500/10 text-red-300",
};

const estadoEtiqueta: Record<EvaluacionResultado["estado"], string> = {
  aprobado: "Pasa / Exonerado",
  supletorio: "Supletorio",
  reprobado: "Perdió la materia",
};

export function ResultadoDisplay({ resultado, error }: ResultadoDisplayProps) {
  if (error) {
    return (
      <p role="alert" className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
        {error}
      </p>
    );
  }
  if (!resultado) {
    return (
      <p className="rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm text-neutral-400">
        Ingresa dos notas enteras de 0 a 20 y presiona Evaluar.
      </p>
    );
  }
  return (
    <div className={`rounded-xl border px-4 py-3 ${estadoClasses[resultado.estado]}`}>
      <p className="text-lg font-semibold">
        {resultado.notaFinal}/40 — {estadoEtiqueta[resultado.estado]}
      </p>
      <p className="mt-1 text-sm opacity-90">{resultado.mensaje}</p>
    </div>
  );
}
