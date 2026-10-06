import { Link } from "react-router-dom"
export const HomePage = () => {

    const modules=[
        {
            id: 1, 
            title: "Introducción a TypeScript en React", 
            desc: "Tipos Básicos, interfaces, arrays y tuplas",
            path: "/modulo1"
        },
        {
            id: 2, 
            title: "Props y Estados", 
            desc: "Props opcionales , default , useState tipado",
            path: "/modulo2"
        }
    ]

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50">
        <section className="mx-auto max-w-3xl px-6 py-12">
            <header className="mb-8">
                <h1 className="text-2xl mb:text-3xl font-semibold text-blue-500">React y TypeScript</h1>
                <p className="text-neutral-400">
                    Navega por los módulos
                </p>
            </header>
            <nav className= "space-y-3">
                {modules.map((item) => (
                    <Link to={item.path} key={item.id} className="group block rounded-xl border border-neutral-800 bg-neutral-900
                      px-5 py-4 transition hover:border-blue-500/40 hover:bg-neutral-800">
                        <div>
                            <div>
                                <span className=" text-[10px] tracking-widest uppercase text-neutral-500 ">
                                    Módulo
                                </span>

                                <h2 className= "mt-1 text-lg font-medium text-neutral-100">{item.title}</h2>
                                <p  className="text-sm text-neutral-400">{item.desc}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </nav>
        </section>
    </main>
  )
}   