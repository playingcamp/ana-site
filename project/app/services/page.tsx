import Link from "next/link"
import { ArrowRight, BrainCircuit, Building2, ChartBarIcon, CloudCog, Database, Globe, Layers, LayoutDashboard, LineChart, Server, Shield, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-muted/50 py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive AI and digitalization solutions tailored for 
              medium and large Mexican companies.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12">
            {/* AI Implementation */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <BrainCircuit className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">AI Implementation</h2>
                <p className="text-muted-foreground mb-6">
                  Harness the power of artificial intelligence to optimize operations,
                  enhance decision-making, and drive innovation within your organization.
                  Our AI implementation services are tailored specifically for the Mexican market.
                </p>
                <Button asChild>
                  <Link href="/contact">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">AI Strategy Development</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Custom AI roadmaps aligned with your business goals and 
                      Mexican market conditions, prioritizing high-impact opportunities.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Machine Learning Solutions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Custom ML models for predictive analytics, demand forecasting, 
                      customer segmentation, and operational optimization.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Natural Language Processing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Implement NLP solutions tailored for Mexican Spanish to automate 
                      customer service, analyze feedback, and extract document insights.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Digital Transformation */}
            <div className="grid md:grid-cols-2 gap-8 items-center md:order-2">
              <div className="md:order-2">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">Digital Transformation</h2>
                <p className="text-muted-foreground mb-6">
                  Modernize your organization with comprehensive digital transformation 
                  strategies that enhance efficiency, improve customer experience, and 
                  create new business opportunities in the Mexican market.
                </p>
                <Button asChild>
                  <Link href="/contact">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              
              <div className="grid grid-cols-1 gap-4 md:order-1">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Business Process Optimization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Redesign and digitize core business processes to eliminate inefficiencies,
                      reduce costs, and improve service delivery.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Legacy System Modernization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Transform outdated systems into modern, agile platforms that can
                      respond quickly to changing market demands and technology advancements.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Digital Workplace Implementation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Create collaborative, efficient digital workplaces that enhance 
                      productivity and employee experience across your organization.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Data Strategy & Analytics */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Database className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">Data Strategy & Analytics</h2>
                <p className="text-muted-foreground mb-6">
                  Develop a comprehensive data strategy that turns your organization's data
                  into actionable insights, driving informed decision-making and enabling
                  competitive advantage in the Mexican market.
                </p>
                <Button asChild>
                  <Link href="/contact">
                    Explore Options <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Data Architecture Design</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Create robust data infrastructures that enable efficient data collection,
                      storage, processing, and accessibility across your organization.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Business Intelligence Solutions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Implement powerful BI tools and dashboards that translate complex data
                      into clear visualizations for better business decision-making.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Predictive Analytics Implementation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Leverage advanced analytics to forecast trends, identify opportunities,
                      and prepare for potential challenges in the Mexican market.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Services */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Additional Specialized Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Complementary services that enhance your digital transformation journey.
            </p>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <CloudCog className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Cloud Migration</CardTitle>
                <CardDescription>
                  Strategic cloud migration planning and execution
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Develop and implement comprehensive cloud migration strategies
                  tailored to Mexican business requirements and regulatory considerations.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Cybersecurity</CardTitle>
                <CardDescription>
                  Comprehensive security for digital assets
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Protect your organization with cybersecurity solutions designed
                  for the unique threats facing Mexican businesses during digital transformation.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Change Management</CardTitle>
                <CardDescription>
                  Ensure successful adoption of new technologies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Neuroscience-informed change management approaches to ensure
                  successful adoption of new technologies and processes across your organization.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Innovation Consulting</CardTitle>
                <CardDescription>
                  Foster a culture of innovation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Develop innovation frameworks and processes that enable your organization
                  to continuously ideate, test, and implement innovative business solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Industry Experience */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Industry Experience</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our expertise spans across multiple industries in the Mexican market.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex flex-col p-6 bg-muted rounded-lg">
              <Layers className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-medium mb-2">Manufacturing</h3>
              <p className="text-sm text-muted-foreground">
                Helping Mexican manufacturing companies implement Industry 4.0 
                technologies, optimize production processes, and enhance supply chain visibility.
              </p>
            </div>
            
            <div className="flex flex-col p-6 bg-muted rounded-lg">
              <LineChart className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-medium mb-2">Financial Services</h3>
              <p className="text-sm text-muted-foreground">
                Supporting financial institutions with digital banking transformations,
                fraud detection systems, and AI-powered customer insights.
              </p>
            </div>
            
            <div className="flex flex-col p-6 bg-muted rounded-lg">
              <LayoutDashboard className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-medium mb-2">Retail & E-commerce</h3>
              <p className="text-sm text-muted-foreground">
                Enabling retail businesses to thrive in the digital economy with
                omnichannel strategies, personalization engines, and inventory optimization.
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
              Ready to Start Your Digital Transformation?
            </h2>
            <p className="mb-8 text-primary-foreground/80">
              Contact us today to discuss how our services can help your 
              organization thrive in the digital era.
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