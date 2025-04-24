import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-12 md:py-16 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold">Ana R Sierra</h3>
            <p className="text-sm text-muted-foreground">
              Consultoría experta en implementación de IA y transformación digital 
              para empresas medianas y grandes mexicanas.
            </p>
          </div>
          
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold">Enlaces Rápidos</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
                Inicio
              </Link>
              <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground">
                Servicios
              </Link>
              <Link href="/case-studies" className="text-sm text-muted-foreground hover:text-foreground">
                Casos de Éxito
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                Sobre Mí
              </Link>
            </nav>
          </div>
          
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold">Recursos</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
                Blog
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                Contacto
              </Link>
              <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground">
                Política de Privacidad
              </Link>
              <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-foreground">
                Términos de Servicio
              </Link>
            </nav>
          </div>
          
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold">Contacto</h3>
            <p className="text-sm text-muted-foreground">
              Burgos, Castilla y León, España
            </p>
            <p className="text-sm text-muted-foreground">
              info@anarsierraconsulting.com
            </p>
            <div className="flex space-x-4">
              <Link href="https://linkedin.com" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://twitter.com" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://facebook.com" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t pt-6">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Ana R Sierra Consulting. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}