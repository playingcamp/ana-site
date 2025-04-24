import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, BookOpen, Briefcase, Calendar, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-muted/50 py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight mb-6">About Ana R Sierra</h1>
              <p className="text-xl text-muted-foreground mb-6">
                Business Strategist & AI Implementation Expert
              </p>
              <p className="text-muted-foreground">
                Ana R Sierra is a seasoned business consultant specializing in AI implementation 
                and digital transformation for medium and large-sized Mexican companies.
                With a background spanning operations, customer relationship management, and 
                business development, Ana brings a holistic approach to helping businesses 
                leverage technology for competitive advantage.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-transparent rounded-xl z-0" />
              <Image 
                src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg"
                alt="Ana R Sierra"
                width={500}
                height={500}
                className="rounded-lg relative z-10 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Background and Expertise */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Experience & Expertise</h2>
          
          <div className="space-y-12 max-w-3xl mx-auto">
            <div className="flex gap-6">
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <h3 className="text-xl font-medium">COO / Chief of Public Relations</h3>
                  <div className="ml-auto flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    2018 - 2021
                  </div>
                </div>
                <p className="text-muted-foreground mb-2">RO Senior Advisors (GRUPO RO)</p>
                <p className="text-sm">
                  Led operations for payroll services and managed public relations, focusing on high-level
                  customer relationships with directors and company owners. Resolved complex HR administration
                  conflicts and deepened understanding of high-performance leadership habits.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <h3 className="text-xl font-medium">Sales Manager & Public Relations</h3>
                  <div className="ml-auto flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    2011 - 2018
                  </div>
                </div>
                <p className="text-muted-foreground mb-2">RO Senior Advisors (GRUPO RO)</p>
                <p className="text-sm">
                  Managed sales, customer acquisition, retention, and public relations. Developed expertise
                  in understanding customer needs and implementing solutions that drive business growth.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <h3 className="text-xl font-medium">Business Owner</h3>
                  <div className="ml-auto flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    2006 - 2009
                  </div>
                </div>
                <p className="text-muted-foreground mb-2">La Cura Bar</p>
                <p className="text-sm">
                  Managed all aspects of business operations for a bar in Playa del Carmen, Mexico.
                  Gained hands-on experience in business management, customer service, and team leadership.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <h3 className="text-xl font-medium">Education</h3>
                </div>
                <p className="text-sm mb-4">
                  Postgraduate studies in Cognitive Neuroscience and Neuroanatomy, which informs her
                  approach to business psychology and implementing effective change management practices
                  during digital transformation initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Ana */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Why Choose Ana for Your Digital Transformation</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Mexican Business Expertise</h3>
              <p className="text-muted-foreground">
                Deep understanding of Mexican business culture, regulatory environment, 
                and market dynamics from over a decade of experience working with Mexican enterprises.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Neuroscience-Informed Approach</h3>
              <p className="text-muted-foreground">
                Unique integration of cognitive neuroscience principles to facilitate 
                organizational change management during digital transformation initiatives.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Practical Business Experience</h3>
              <p className="text-muted-foreground">
                Combines technical knowledge with real-world business operations experience,
                ensuring AI and digital solutions address actual business challenges.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Ready to Work with Ana?
            </h2>
            <p className="mb-8 text-primary-foreground/80">
              Schedule a consultation to discuss how Ana's expertise can help 
              transform your business through AI and digital innovation.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                Contact Ana Today <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}