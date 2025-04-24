import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-muted/50 py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-6">Blog & Resources</h1>
            <p className="text-xl text-muted-foreground">
              Insights, trends, and expertise on AI implementation and digital 
              transformation for Mexican businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          {/* Featured Article */}
          <div className="mb-16">
            <div className="bg-card rounded-lg overflow-hidden shadow-md">
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-3 h-64 md:h-auto relative">
                  <Image 
                    src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg" 
                    alt="AI in Mexican Business"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="md:col-span-2 p-6 md:p-10 flex flex-col justify-center">
                  <Badge className="mb-4 w-fit">Featured</Badge>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                    The State of AI Adoption in Mexican Enterprises: 2025 Outlook
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    An in-depth analysis of how Mexican enterprises are adopting AI technologies,
                    current challenges, and future trends that will shape the market.
                  </p>
                  <div className="flex items-center mb-6">
                    <div className="flex-shrink-0 mr-3">
                      <Image 
                        src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg" 
                        alt="Ana R Sierra"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Ana R Sierra</p>
                      <p className="text-xs text-muted-foreground">June 15, 2025 • 12 min read</p>
                    </div>
                  </div>
                  <Button asChild className="w-fit">
                    <Link href="/blog/ai-adoption-mexico-2025">
                      Read Article <ArrowRight className="ml-2 h-4 w-4" />
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
                  src="https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg" 
                  alt="Digital Transformation"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <Badge variant="outline">Digital Transformation</Badge>
                  <span className="text-xs text-muted-foreground">May 28, 2025</span>
                </div>
                <CardTitle className="line-clamp-2">5 Critical Steps for Digital Transformation in Manufacturing</CardTitle>
                <CardDescription>
                  A practical guide for Mexican manufacturing companies looking to 
                  digitize their operations and remain competitive.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex items-center">
                  <div className="flex-shrink-0 mr-3">
                    <Image 
                      src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg" 
                      alt="Ana R Sierra"
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  </div>
                  <p className="text-sm font-medium">Ana R Sierra</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/blog/digital-transformation-manufacturing">
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="overflow-hidden flex flex-col h-full">
              <div className="relative h-48">
                <Image 
                  src="https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg" 
                  alt="AI Implementation"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <Badge variant="outline">AI Implementation</Badge>
                  <span className="text-xs text-muted-foreground">May 14, 2025</span>
                </div>
                <CardTitle className="line-clamp-2">Building an Effective AI Strategy for Mexican Financial Institutions</CardTitle>
                <CardDescription>
                  How Mexican banks and financial services companies can leverage AI
                  to enhance customer experience and improve operational efficiency.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex items-center">
                  <div className="flex-shrink-0 mr-3">
                    <Image 
                      src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg" 
                      alt="Ana R Sierra"
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  </div>
                  <p className="text-sm font-medium">Ana R Sierra</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/blog/ai-strategy-financial-institutions">
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="overflow-hidden flex flex-col h-full">
              <div className="relative h-48">
                <Image 
                  src="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg" 
                  alt="Data Analytics"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <Badge variant="outline">Data Analytics</Badge>
                  <span className="text-xs text-muted-foreground">May 3, 2025</span>
                </div>
                <CardTitle className="line-clamp-2">Unlocking Business Value with Advanced Analytics in Retail</CardTitle>
                <CardDescription>
                  How Mexican retailers can use data analytics to understand customer behavior,
                  optimize inventory, and create personalized shopping experiences.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex items-center">
                  <div className="flex-shrink-0 mr-3">
                    <Image 
                      src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg" 
                      alt="Ana R Sierra"
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  </div>
                  <p className="text-sm font-medium">Ana R Sierra</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/blog/advanced-analytics-retail">
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="overflow-hidden flex flex-col h-full">
              <div className="relative h-48">
                <Image 
                  src="https://images.pexels.com/photos/8728556/pexels-photo-8728556.jpeg" 
                  alt="Cloud Migration"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <Badge variant="outline">Cloud Migration</Badge>
                  <span className="text-xs text-muted-foreground">April 21, 2025</span>
                </div>
                <CardTitle className="line-clamp-2">Secure Cloud Migration Strategies for Mexican Enterprises</CardTitle>
                <CardDescription>
                  Best practices for Mexican companies to securely migrate their infrastructure
                  and applications to the cloud while ensuring compliance with local regulations.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex items-center">
                  <div className="flex-shrink-0 mr-3">
                    <Image 
                      src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg" 
                      alt="Ana R Sierra"
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  </div>
                  <p className="text-sm font-medium">Ana R Sierra</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/blog/cloud-migration-strategies">
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="overflow-hidden flex flex-col h-full">
              <div className="relative h-48">
                <Image 
                  src="https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg" 
                  alt="Change Management"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <Badge variant="outline">Change Management</Badge>
                  <span className="text-xs text-muted-foreground">April 12, 2025</span>
                </div>
                <CardTitle className="line-clamp-2">Neuroscience-Based Approaches to Digital Transformation Change Management</CardTitle>
                <CardDescription>
                  How understanding neuroscience can help Mexican companies implement
                  more effective change management during digital transformation initiatives.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex items-center">
                  <div className="flex-shrink-0 mr-3">
                    <Image 
                      src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg" 
                      alt="Ana R Sierra"
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  </div>
                  <p className="text-sm font-medium">Ana R Sierra</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/blog/neuroscience-change-management">
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="overflow-hidden flex flex-col h-full">
              <div className="relative h-48">
                <Image 
                  src="https://images.pexels.com/photos/7656128/pexels-photo-7656128.jpeg" 
                  alt="Industry 4.0"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <Badge variant="outline">Industry 4.0</Badge>
                  <span className="text-xs text-muted-foreground">March 30, 2025</span>
                </div>
                <CardTitle className="line-clamp-2">Industry 4.0 Implementation Roadmap for Mexican Manufacturers</CardTitle>
                <CardDescription>
                  A practical guide for Mexican manufacturing companies to implement
                  Industry 4.0 technologies and remain competitive in the global market.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex items-center">
                  <div className="flex-shrink-0 mr-3">
                    <Image 
                      src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg" 
                      alt="Ana R Sierra"
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  </div>
                  <p className="text-sm font-medium">Ana R Sierra</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/blog/industry-4-roadmap">
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/blog/archive">
                View All Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-muted-foreground mb-8">
              Stay updated with the latest insights, case studies, and trends in AI implementation
              and digital transformation for Mexican businesses.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="flex-grow"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}