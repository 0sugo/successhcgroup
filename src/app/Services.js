import Image from "next/image"
import { MoveUpRight, Shield, Heart, Users, HandHelping } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const Services = () => {
  const servicesList = [
    {
      image: "/serviceOne.jpg",
      title: "Community Nursing",
      description: "Professional nursing care in community settings",
      icon: Shield,
    },
    {
      image: "/serviceTwo.jpg",
      title: "Daily Personal Activities",
      description: "Support with everyday personal care needs",
      icon: Heart,
    },
    {
      image: "/serviceThree.jpg",
      title: "Behaviour Support",
      description: "Specialized assistance with behavioral management",
      icon: Users,
    },
    {
      image: "/serviceFour.jpg",
      title: "Accommodation SIL/MTA/STA",
      description: "Supported independent living arrangements",
      icon: HandHelping,
    },
    {
      image: "/servicefive.jpg",
      title: "Community Access",
      description: "Assistance to participate in community activities",
      icon: Users,
    },
    {
      image: "/serviceSeven.jpg",
      title: "Level 2 Support Coordination",
      description: "Coordinated support for complex needs",
      icon: HandHelping,
    },
  ]

  return (
    <div className="container mx-auto py-16 px-4 md:px-6">
      {/* Header with decorative element */}
      <div className="relative mb-16">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl -z-10"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                SERVICES
              </span>
            </h1>
            <p className="text-lg text-gray-600">Elevating Lives with Top-Notch Services</p>
          </div>

          <Button className="group bg-primary hover:bg-primary/90 text-white px-6 py-6 h-auto rounded-xl shadow-md">
            <span className="text-base">Discover more</span>
            <MoveUpRight className="ml-2 h-5 w-5 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Button>
        </div>

        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-secondary rounded-full"></div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesList.map((service, index) => (
          <Card
            key={index}
            className="group overflow-hidden border-0 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="relative h-56 overflow-hidden">
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                width={500}
                height={300}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Icon overlay */}
              <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-md">
                <service.icon className="h-5 w-5 text-primary" />
              </div>
            </div>

            <CardContent className="p-6 bg-gradient-to-br from-white to-slate-50">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>

              <div className="mt-4 flex justify-end">
                <Button variant="ghost" size="sm" className="group p-0 hover:bg-transparent">
                  <span className="text-primary text-sm">Learn more</span>
                  <MoveUpRight className="ml-1 h-4 w-4 text-primary transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Decorative element */}
      <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
    </div>
  )
}

export default Services

