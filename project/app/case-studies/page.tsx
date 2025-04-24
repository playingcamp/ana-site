import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-muted/50 py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-6">Case Studies</h1>
            <p className="text-xl text-muted-foreground">
              Discover how we've helped Mexican companies transform their 
              businesses through AI implementation and digital innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/5 rounded-lg blur-sm"></div>
            <div className="relative bg-card rounded-lg overflow-hidden shadow-md">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="h-full relative">
                  <Image 
                    src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg" 
                    alt="Manufacturing company"
                    width={800}
                    height={600}
                    className="h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/80 md:bg-gradient-to-t" />
                </div>
                <div className="p-6 md:p-12 flex flex-col justify-center">
                  <Badge className="mb-4 w-fit">Manufacturing</Badge>
                  <h2 className="text-3xl font-bold tracking-tight mb-4">
                    35% Efficiency Gain for Nacional Manufacturing
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Learn how we helped a leading Mexican manufacturing company 
                    implement AI-powered predictive maintenance and process optimization,
                    resulting in a 35% efficiency gain and millions in cost savings.
                  </p>
                  <Button asChild className="w-fit">
                    <Link href="/case-studies/nacional-manufacturing">
                      Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden flex flex-col h-full">
              <div className="relative h-48">
                <Image 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" 
                  alt="Financial services"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <CardHeader>
                <Badge className="mb-2 w-fit">Financial Services</Badge>
                <CardTitle>AI-Powered Fraud Detection for Banco Nacional</CardTitle>
                <CardDescription>
                  Implementing advanced ML algorithms for real-time fraud detection,
                  reducing fraudulent transactions by 67%.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 67% reduction in fraudulent transactions</li>
                  <li>• 89% accuracy in fraud prediction</li>
                  <li>• $4.5M USD annual savings</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/case-studies/banco-nacional">
                    Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="overflow-hidden flex flex-col h-full">
              <div className="relative h-48">
                <Image 
                  src="https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg" 
                  alt="Ecommerce"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <CardHeader>
                <Badge className="mb-2 w-fit">Retail</Badge>
                <CardTitle>Digital Transformation for MexShop</CardTitle>
                <CardDescription>
                  Complete digital transformation from traditional retail to omnichannel 
                  commerce leader in Mexican market.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 230% increase in online sales</li>
                  <li>• Seamless omnichannel experience</li>
                  <li>• 42% improvement in customer satisfaction</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/case-studies/mexshop">
                    Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="overflow-hidden flex flex-col h-full">
              <div className="relative h-48">
                <Image 
                  src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg" 
                  alt="Healthcare"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <CardHeader>
                <Badge className="mb-2 w-fit">Healthcare</Badge>
                <CardTitle>AI Diagnostic Support for Clínica México</CardTitle>
                <CardDescription>
                  Implementation of AI-powered diagnostic tools to improve
                  patient outcomes and operational efficiency.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 28% increase in diagnostic accuracy</li>
                  <li>• 45% reduction in report generation time</li>
                  <li>• Improved patient outcomes</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/case-studies/clinica-mexico">
                    Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="overflow-hidden flex flex-col h-full">
              <div className="relative h-48">
                <Image 
                  src="https://images.pexels.com/photos/247671/pexels-photo-247671.jpeg" 
                  alt="Supply chain"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <CardHeader>
                <Badge className="mb-2 w-fit">Logistics</Badge>
                <CardTitle>Supply Chain Optimization for LogisticaMX</CardTitle>
                <CardDescription>
                  AI-powered supply chain optimization for one of Mexico's
                  largest logistics providers.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 22% reduction in delivery times</li>
                  <li>• 18% fuel savings across fleet</li>
                  <li>• Real-time tracking and analytics</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/case-studies/logisticamx">
                    Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="overflow-hidden flex flex-col h-full">
              <div className="relative h-48">
                <Image 
                  src="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg" 
                  alt="Energy"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <CardHeader>
                <Badge className="mb-2 w-fit">Energy</Badge>
                <CardTitle>Predictive Maintenance for Energía Renovable</CardTitle>
                <CardDescription>
                  Implementing IoT and AI solutions for predictive maintenance
                  at a leading renewable energy provider.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 53% reduction in unplanned downtime</li>
                  <li>• 31% maintenance cost savings</li>
                  <li>• 8% increase in energy production</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/case-studies/energia-renovable">
                    Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="overflow-hidden flex flex-col h-full">
              <div className="relative h-48">
                <Image 
                  src="https://images.pexels.com/photos/3184337/pexels-photo-3184337.jpeg" 
                  alt="Hospitality"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <CardHeader>
                <Badge className="mb-2 w-fit">Hospitality</Badge>
                <CardTitle>Digital Guest Experience for Hotel Peninsula</CardTitle>
                <CardDescription>
                  Complete digital transformation of guest experience at a
                  premium hotel chain in Mexico.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 62% increase in guest satisfaction</li>
                  <li>• 28% boost in repeat bookings</li>
                  <li>• Personalized guest interactions</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/case-studies/hotel-peninsula">
                    Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="mb-8 text-primary-foreground/80">
              Contact us today to discuss how we can help your company achieve 
              similar results through AI implementation and digital transformation.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}