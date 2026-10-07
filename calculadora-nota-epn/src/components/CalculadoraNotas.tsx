import { useEffect, useReducer } from "react";
import {
  calculadoraNotasReducer,
  initialCalculadoraNotasState,
} from "../script/calculadoraNotasReducer";
import { Display } from "./Display";
import { Button } from "./Button";
import { ResultadoDisplay } from "./ResultadoDisplay";

const DIGITOS: string[] = ["7", "8", "9", "4", "5", "6", "1", "2", "3"];

export function CalculadoraNotas() {
  const [state, dispatch] = useReducer(
    calculadoraNotasReducer,
    initialCalculadoraNotasState,
  );

  useEffect(() => {
    if (state.error && typeof window !== "undefined") {
      window.alert(state.error);
    }
  }, [state.error]);

  const expresion =
    state.nota1 != null ? `${state.nota1} ${state.operacion ?? ""} ${state.overwrite ? "" : state.entrada}`.trim() : "";

  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-950 px-4 py-8">
      <div className="w-full max-w-sm rounded-2xl bg-[#111111] p-4 shadow-2xl sm:max-w-md sm:p-6">
        <h1 className="mb-1 text-center text-xl font-semibold text-white">
          Calculadora Nota-EPN
        </h1>
        <p className="mb-4 text-center text-xs text-neutral-400">
          Notas enteras de 0 a 20 · ≥ 28 pasa · 18–27 supletorio · &lt; 18 pierde
        </p>
        <Display expresion={expresion} valor={state.entrada} error={state.error} />
        <div className="mt-4 rounded-xl bg-[#e2e4e9] p-2">
          <div className="flex gap-2">
            <div className="grid flex-1 grid-cols-3 gap-2">
              <Button
                label="AC"
                ariaLabel="Limpiar todo"
                variant="control"
                spanTwo
                onClick={() => dispatch({ type: "CLEAR" })}
              />
              <Button
                label="DEL"
                ariaLabel="Borrar dígito"
                variant="control"
                onClick={() => dispatch({ type: "DELETE_DIGIT" })}
              />
              {DIGITOS.map((digit) => (
                <Button
                  key={digit}
                  label={digit}
                  variant="digit"
                  onClick={() =>
                    dispatch({ type: "ADD_DIGIT", payload: { digit } })
                  }
                />
              ))}
              <Button
                label="0"
                ariaLabel="Cero"
                variant="digit"
                spanThree
                onClick={() =>
                  dispatch({ type: "ADD_DIGIT", payload: { digit: "0" } })
                }
              />
            </div>
            <div className="flex w-16 flex-col gap-2 sm:w-20">
              <Button
                label="+"
                ariaLabel="Sumar notas"
                variant="operation"
                onClick={() => dispatch({ type: "CHOOSE_OPERATION" })}
              />
              <Button
                label="="
                ariaLabel="Evaluar notas"
                variant="equals"
                grow
                onClick={() => dispatch({ type: "EVALUATE" })}
              />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <ResultadoDisplay resultado={state.resultado} error={null} />
        </div>
      </div>
    </div>
  );
}
