import { Accessibility, HandHeart, Scale, UserCheck, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const Values = () => {
  const valuesList = [
    {
      icon: Scale,
      label: "Fairness",
      description: "Equal treatment and opportunities for all individuals we serve.",
    },
    {
      icon: HandHeart,
      label: "Hope",
      description: "Inspiring optimism and possibility in every person's journey.",
    },
    {
      icon: Accessibility,
      label: "Courage",
      description: "Embracing challenges with strength and determination.",
    },
    {
      icon: UserCheck,
      label: "Integrity",
      description: "Maintaining honesty and ethical standards in all our actions.",
    },
    {
      icon: Users,
      label: "Perseverance",
      description: "Persistent dedication to achieving positive outcomes.",
    },
  ]

  return (
    <div className="pt-16 pb-32 px-4 md:px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header with decorative elements */}
        <div className="relative text-center mb-8">
          <div className="absolute top-1/2 left-0 w-full h-px bg-gray-200 -z-10"></div>
          <h2 className="inline-block px-8 py-2 bg-white text-3xl md:text-4xl font-bold relative z-10">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              Our Values
            </span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            The principles that guide our approach to compassionate care and service excellence
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {valuesList.map((value, index) => (
            <Card
              key={index}
              className="group border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-primary/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out"></div>
                  <div className="relative bg-primary/5 rounded-full p-4 transition-colors duration-300 group-hover:bg-primary/10">
                    <value.icon size={40} className="text-primary" />
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-800">{value.label}</h3>

                <p className="text-gray-600 text-sm">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Visual accent */}
        <div className="flex justify-center">
          <div className="w-20 h-1 bg-secondary rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

export default Values

