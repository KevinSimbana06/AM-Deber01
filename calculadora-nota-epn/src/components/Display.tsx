interface DisplayProps {
  expresion: string;
  valor: string;
  error: string | null;
}

export function Display({ expresion, valor, error }: DisplayProps) {
  return (
    <div className="w-full rounded-xl bg-black px-4 py-4 text-right shadow-inner">
      <p className="min-h-6 truncate text-sm text-neutral-400">{expresion}</p>
      {error ? (
        <p role="alert" className="mt-1 truncate text-base font-medium text-red-400">
          {error}
        </p>
      ) : null}
      <p className="mt-1 min-h-10 truncate text-3xl font-semibold text-white sm:text-4xl">
        {valor || "0"}
      </p>
    </div>
  );
}
