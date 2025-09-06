import { ArrowRight, ExternalLink, Linkedin, Sparkles } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
type Exercise = {
  title: string
  href: string
  tag?: string
}

type DiaryEntry = {
  title: string
  date: string
  imgAlt: string
  imgPreviewSrc: string
  imgHref: string
  paragraphs: string[]
}

const exercises: Exercise[] = [
  { title: "3D", href: "./EJERCICIOS CP CSS/Ejercicio055/EJERCICIO 055 MODELADO.html", tag: "" },
  { title: "Automoción", href: "./EJERCICIOS CP CSS/Ejercicio046/EJERCICIO 046.html", tag: "" },
  { title: "Clásicos", href: "./EJERCICIOS CP CSS/Ejercicio047/INICIO.html", tag: "" },
  { title: "Moda", href: "./EJERCICIOS CP CSS/Ejercicio050/EJERCICIO 050.html", tag: "" },
  { title: "Librería", href: "./EJERCICIOS CP CSS/Ejercicio043/EJERCICIO 043.html", tag: "" },
  { title: "Interiores", href: "./EJERCICIOS CP CSS/Ejercicio044/EJERCICIO 044.html", tag: "" },
  { title: "Acuicultura", href: "./EJERCICIOS CP CSS/Ejercicio049/INICIO.html", tag: "" },
  { title: "Viajar", href: "./EJERCICIOS CP CSS/Ejercicio045/EJERCICIO 045.html", tag: "" },
  { title: "Viajes", href: "./EJERCICIOS CP CSS/Ejercicio048/inicio.html", tag: "" },
]

const diary: DiaryEntry[] = [
  {
    title: "Desarrollo Web",
    date: "Abril, 2024",
    imgAlt: "Captura de HTML",
    imgPreviewSrc:
      "/htmlcaptura.png",
    imgHref: "./htmlcaptura.png",
    paragraphs: [
      "Aprendí a manipular HTML, con la estructura y el diseño de páginas web.",
      "Enfrenté desafíos como, utilizar etiquetas para organizar textos, imágenes o enlaces, saber las bases de HTML me permite crear contenido más estructurado y accesible.",
    ],
  },
  {
    title: "Retos CSS",
    date: "Abril, 2024",
    imgAlt: "Captura de CSS",
    imgPreviewSrc:
      "/csscaptura.png",
    imgHref: "./csscaptura.png",
    paragraphs: [
      "En esta segunda etapa, reflexiono sobre mi progreso en la manipulación de estilos con CSS, He explorado técnicas avanzadas como flex y float, desafiando mis habilidades para crear diseños más complejos y responsivos",
      "Aunque me encontré con dificultades en el manejo de la cascada de estilos y la especificación, estoy motivado por los resultados que estoy logrando",
    ],
  },
]

export default function Page() {
  return (
    <div className="min-h-dvh bg-slate-700 text-emerald-200">
      {/* Barra superior fija / Navbar */}
      <header className="sticky top-0 z-40 border-b bg-slate-500 backdrop-blur supports-[backdrop-filter]:bg-slate-500/90">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-slate-500 text-emerald-200">
              <Sparkles className="h-4 w-4" />
            </span>
            <span>Desarrollador Web</span>
          </a>
          <nav aria-label="Principal" className="hidden gap-6 md:flex">
            <a href="#mi" className="text-sm text-emerald-200 hover:text-slate-900">
              Sobre mí
            </a>
            <a href="#css" className="text-sm text-emerald-200 hover:text-slate-900">
              Ejercicios CSS
            </a>
            <a href="#diario" className="text-sm text-emerald-200 hover:text-slate-900">
              Diario de Desarrollo
            </a>
          </nav>
          <div className="hidden items-center gap-2 md:flex hover:text-slate-900">
            <Button asChild variant="ghost" size="sm">
              <a href="https://linkedin.com/in/esinfotec/" target="_blank" rel="noreferrer" aria-label="LinkedIn de Joel">
                <Linkedin className="mr-2 h-4 w-4 text-sm text-emerald-200 hover:text-slate-900" />
                Sigueme en Linkedin
              </a>
            </Button>
          </div>
        </div>
      </header >
      <main>
        {/* Hello world / Banner */}
        <section
          aria-label="Presentación"
          className="relative overflow-hidden border-b"
        >
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
          >
            <div className="absolute -inset-x-24 -top-40 h-80 rotate-6 bg-gradient-to-r from-slate-700 via-slate-700 to-slate-700 opacity-20 blur-3xl" />
            <div className="absolute -inset-x-24 -bottom-40 h-80 -rotate-6 bg-gradient-to-r from-slate-700 via-slate-700 to-slate-700 opacity-20 blur-3xl" />
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 py-14 md:grid-cols-2 md:py-20">
            <div>
              <h1 className="text-balance text-3xl font-bold leading-tight md:text-5xl">
                Hello World!
                <span className="block text-slate-900 mt-2 text-lg font-semibold md:text-2xl">
                  Desarrollo de páginas web modernas.
                </span>
              </h1>
              <p className="mt-4 max-w-prose text-pretty text-white md:text-lg">
                Con años de experiencia en sistemas, hardware y ahora desarrollo web, disfruto
                resolviendo problemas y creando interfaces accesibles, rápidas y responsivas.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 hover:text-slate-900">
                <Button asChild>
                  <a href="#css">
                    Explorar ejercicios
                    <ArrowRight className="ml-2 h-4 w-4 text-sm text-emerald-200 hover:text-slate-900" />
                  </a>
                </Button>
              </div>
              <div className="mt-2 flex flex-wrap gap-3 hover:text-slate-900">
                <Button asChild variant="outline">
                  <a href="#diario">Ver diario</a>
                </Button>
              </div>
            </div>
            <div className="flex justify-end-safe md:justify-end-safe">
              <img
                src="/descarga.png"
                alt="Retrato de Joel"
                className="h-auto w-full rounded-xl border object-cover shadow-sm ring-3 ring-emerald-200 md:h-90 md:w-108"
              />
            </div>
          </div>
        </section>
        {/* Información Personal / Sobre mi */}
        <section id="mi" className="mx-auto max-w-6xl px-4 bg-slate-700 text-slate-900 py-12 md:py-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl ">
                Información personal ✍️
              </h2>
              <p className="mt-4 text-white">
                Me llamo Joel y soy un entusiasta del mundo digital que ha emprendido un emocionante viaje hacia el desarrollo web.
              </p>
              <p className="mt-3 text-white">
                Con varios años de experiencia en este sector, me encanta sumergirme en este universo donde cada línea de código es
                un nuevo desafío y una oportunidad para aprender y crecer.
              </p>
              <p className="mt-3 text-white">
                Con una trayectoria que abarca desde la instalación técnica hasta el desarrollo web, mi carrera profesional ha
                evolucionado hacia la solución de problemas complejos en el ámbito tecnológico. Actualmente, aplico mis
                competencias en sistemas y hardware para mejorar la infraestructura tecnológica.
              </p>
              <div className="mt-20 flex flex-wrap gap-2 md:justify-start text-emerald-200">
                <Badge variant="secondary">HTML</Badge>
                <Badge variant="secondary">CSS</Badge>
                <Badge variant="secondary">Accesibilidad</Badge>
                <Badge variant="secondary">Responsive</Badge>
              </div>
            </div>
            <div className="flex justify-end-safe md:justify-end-safe">
              <img
                src="/web-dev-coffee.png"
                alt="Ilustración relacionada con desarrollo web"
                className="h-auto w-full max-w-md rounded-lg border object-cover shadow-sm ring-3 ring-emerald-200"
              />
            </div>
          </div>
        </section>
        {/* Mis Ejercicios Practicos / CSS */}
        <section id="css" className="border-t bg-slate-700 text-slate-900 py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold md:text-3xl text-slate-900">Mis ejercicios prácticos 👇</h3>
                <p className="mt-2 text-emerald-200">
                  Desafíos prácticos para fortalecer habilidades de estilos y diseño web.
                </p>
              </div>
              <Button asChild variant="outline" className="hidden sm:inline-flex">
                <a href="#diario" className="text-emerald-200 hover:text-slate-900">
                  Ver diario
                  <ArrowRight className="ml-2 h-4 w-4 text-emerald-200" />
                </a>
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 text-emerald-200">
              {exercises.map((ex, i) => (
                <Card
                  key={i}
                  className="group transition-shadow hover:shadow-md bg-slate-500 hover:bg-slate-600"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{ex.title}</CardTitle>
                      {ex.tag ? <Badge variant="outline">{ex.tag}</Badge> : null}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 text-slate-900 hover:text-emerald-200 transition-colors">
                    <div className="flex items-center justify-between">
                      <Button asChild variant="secondary" size="sm">
                        <a href={ex.href} target="_blank" rel="noreferrer">
                          Push to view
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {/* Diario de desarrollo */}
        <section id="diario" className="mx-auto max-w-6xl px-4 py-12 md:py-10 text-slate-900">
          <h2 className="text-2xl font-semibold md:text-3xl">Diario de Desarrollo</h2>
          <div className="mt-8 space-y-8">
            {diary.map((entry, idx) => (
              <Card key={idx} className="overflow-hidden bg-slate-500">
                <div className="grid grid-cols-1 gap-0 md:grid-cols-[1fr_480px]">
                  <div className="p-10">
                    <div className="flex items-center justify-between text-emerald-200">
                      <CardTitle className="text-xl">{entry.title}</CardTitle>
                      <span className="text-sm text-emerald-200">{entry.date}</span>
                    </div>
                    <div className="mt-3 space-y-3 text-white">
                      {entry.paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                    <div className="mt-10 flex gap-3 text-slate-900 hover:text-emerald-200 transition-colors">
                      <Button asChild variant="outline" size="sm">
                        <a href={entry.imgHref} target="_blank" rel="noreferrer">
                          Ver captura
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                    <div className="mt-5 flex gap-3 text-slate-900 hover:text-emerald-200 transition-colors">
                      <Button asChild size="sm" variant="secondary">
                        <a href="#css">
                          Ir a ejercicios
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  <a
                    href={entry.imgHref}
                    target="_blank"
                    rel="noreferrer"
                    className="block"
                    aria-label={"Abrir " + entry.title + " en tamaño completo"}
                  >
                    <img
                      src={entry.imgPreviewSrc || "/placeholder.svg"}
                      alt={entry.imgAlt}
                      className="h-full w-100 object-contain"
                    />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="mt-8 border-t bg-slate-500 text-emerald-200">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-10 md:grid-cols-3">
          <div>
            <h3 className="font-semibold">Mapa web</h3>
            <ul className="mt-3 space-y-2  text-sm">
              <li>
                <a
                  className="text-slate-900 underline-offset-4 hover:text-emerald-200 hover:underline"
                  href="./EJERCICIOS CP CSS/Ejercicio055/EJERCICIO 055 MODELADO.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  E055
                </a>
              </li>
              <li>
                <a
                  className="text-slate-900 underline-offset-4 hover:text-emerald-200 hover:underline"
                  href="./EJERCICIOS CP CSS/Ejercicio050/EJERCICIO 050.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  E050
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Contacto</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-center gap-2 text-slate-700">
                <span className="select-all text-slate-900">joel@esinfotec.com</span>

              </li>
              <li>
                <a
                  className="inline-flex items-center gap-2 text-slate-900 underline-offset-4 hover:text-emerald-200 hover:underline"
                  href="https://linkedin.com/in/esinfotec/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                  Sígueme en LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="text-sm text-slate-900 md:text-base">
            <p>&copy; {new Date().getFullYear()} Portafolio de Joel — Todos los derechos reservados.</p>
            <p className="mt-2">
              Construido con componentes accesibles, rendimiento y un diseño limpio.
            </p>
          </div>
        </div>
      </footer>
    </div >
  )
}
