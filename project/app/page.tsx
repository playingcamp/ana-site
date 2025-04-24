import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BrainCircuit, Building, CheckCircle, Globe, LineChart, Server, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        {/* Background with overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 dark:from-primary/10 dark:to-primary/5 z-0" />
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg')] bg-cover bg-center opacity-20 dark:opacity-10 z-[-1]" />
        
        <div className="container relative mx-auto px-4 py-32 md:py-40 md:px-6 z-10">
          <div className="max-w-3xl">
            <h1 className="animate-fade-up text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Transformando Empresas Mexicanas 
              <span className="text-primary"> a través de IA y Digitalización</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground">
              Consultoría especializada ayudando a empresas mexicanas medianas y grandes
              a aprovechar la inteligencia artificial y la transformación digital para
              ganar ventaja competitiva en el mercado actual en constante evolución.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="animate-fade-up [animation-delay:200ms]">
                <Link href="/contact">
                  Programar una Consulta
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="animate-fade-up [animation-delay:400ms]">
                <Link href="/case-studies">
                  Ver Casos de Éxito
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Nuestros Servicios</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Soluciones integrales de IA y digitalización adaptadas para 
              empresas mexicanas que buscan innovar y crecer.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group transition-all duration-300 hover:shadow-lg">
              <CardHeader className="pb-3">
                <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <BrainCircuit className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Implementación de IA</CardTitle>
                <CardDescription>
                  Integre soluciones de IA de vanguardia en sus operaciones empresariales.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">Desarrollo de estrategia de IA personalizada</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">Implementación de modelos de machine learning</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">Soluciones de procesamiento de lenguaje natural</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">Sistemas de apoyo a la decisión basados en IA</span>
                  </li>
                </ul>
                <Button variant="link" className="px-0 mt-4 group-hover:text-primary">
                  Saber Más <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            
            <Card className="group transition-all duration-300 hover:shadow-lg">
              <CardHeader className="pb-3">
                <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Transformación Digital</CardTitle>
                <CardDescription>
                  Modernice sus procesos empresariales para la era digital.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">Optimización de procesos empresariales</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">Modernización de sistemas heredados</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">Estrategia y ejecución de migración a la nube</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">Implementación de lugar de trabajo digital</span>
                  </li>
                </ul>
                <Button variant="link" className="px-0 mt-4 group-hover:text-primary">
                  Saber Más <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            
            <Card className="group transition-all duration-300 hover:shadow-lg">
              <CardHeader className="pb-3">
                <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Estrategia de Datos y Analítica</CardTitle>
                <CardDescription>
                  Aproveche el poder de sus datos para la inteligencia empresarial.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">Diseño de arquitectura de datos</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">Tableros de inteligencia empresarial</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">Implementación de analítica predictiva</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">Marcos de gobierno de datos</span>
                  </li>
                </ul>
                <Button variant="link" className="px-0 mt-4 group-hover:text-primary">
                  Saber Más <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                ¿Por qué elegir Ana R Sierra Consulting?
              </h2>
              <p className="text-muted-foreground mb-8">
                Con más de una década de experiencia en operaciones empresariales y 
                transformación digital, aportamos una perspectiva única que combina 
                una profunda comprensión empresarial con experiencia técnica.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Experiencia en Negocios Mexicanos</h3>
                    <p className="text-sm text-muted-foreground">
                      Profunda comprensión de la cultura empresarial mexicana, regulaciones y dinámica del mercado.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Building className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Experiencia Empresarial</h3>
                    <p className="text-sm text-muted-foreground">
                      Historial probado trabajando con empresas medianas y grandes.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <LineChart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Resultados Medibles</h3>
                    <p className="text-sm text-muted-foreground">
                      Enfoque en entregar resultados empresariales cuantificables y ROI.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-transparent rounded-xl z-0" />
              <Image 
                src="https://images.pexels.com/photos/8636621/pexels-photo-8636621.jpeg" 
                alt="Reunión de negocios"
                width={600}
                height={400}
                className="rounded-lg object-cover object-center relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Testimonios de Clientes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Escuche lo que nuestros clientes tienen que decir sobre su viaje de transformación con nosotros.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-card">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar>
                    <AvatarImage src="https://i.pravatar.cc/150?img=33" alt="Cliente" />
                    <AvatarFallback>CM</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Carlos Mendoza</p>
                    <p className="text-sm text-muted-foreground">CTO, GrupoTech</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "El equipo de Ana nos ayudó a implementar soluciones de IA que redujeron 
                  nuestros costos operativos en un 35%. Su comprensión tanto de la tecnología 
                  como de las prácticas empresariales mexicanas hizo que la transición fuera perfecta."
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar>
                    <AvatarImage src="https://i.pravatar.cc/150?img=24" alt="Cliente" />
                    <AvatarFallback>LR</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Luisa Ramírez</p>
                    <p className="text-sm text-muted-foreground">CEO, Innovación MX</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "Trabajar con Ana en nuestro viaje de transformación digital ha sido invaluable. 
                  La experiencia de su equipo nos ayudó a modernizar sistemas heredados y mejorar 
                  la satisfacción del cliente en un 42%."
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar>
                    <AvatarImage src="https://i.pravatar.cc/150?img=65" alt="Cliente" />
                    <AvatarFallback>MH</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Miguel Hernández</p>
                    <p className="text-sm text-muted-foreground">COO, Distribuidora Nacional</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "La consultoría de Ana aportó un nivel de experiencia en implementación de IA 
                  que no pudimos encontrar en otro lugar. Sus soluciones nos ayudaron a optimizar 
                  nuestra cadena de suministro, ahorrando millones de pesos anualmente."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              ¿Listo para Transformar su Empresa?
            </h2>
            <p className="mb-8 text-primary-foreground/80">
              Hablemos sobre cómo la IA y la transformación digital pueden ayudar a su 
              empresa a mantenerse competitiva en el mercado actual en rápida evolución.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                Programar una Consulta Gratuita
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}