import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const About = () => {
  return (
    <div className="container mx-auto py-16 px-4 md:px-6">
      {/* Mission & Vision Section */}
      <Card className="mb-16 border-0 shadow-md bg-gradient-to-br from-white to-slate-50">
        <CardContent className="pt-8 pb-6 px-6 md:px-10">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                  Mission & Vision
                </span>
              </h2>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-secondary rounded-full"></div>
            </div>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Success Healthcare Group's Mission is to deliver services guided by each person's aspirations for the life
              they want to lead. We support individuals to be the best version of themselves.
            </p>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              We are committed to providing a safe space for people with disabilities to grow and experience their full
              potential. We understand that what matters to you as a participant is important, and we promise to be
              beside you as you strive to achieve it. You shall never walk alone.
              <span className="font-semibold">Success Healthcare Group is a CALD SERVICE PROVIDER.</span>
            </p>

            <div className="text-center pt-4">
              <Button variant="ghost" className="group text-primary hover:text-primary/90 hover:bg-transparent">
                <span>Know more</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Image & Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image with decorative elements */}
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/10 rounded-full -z-10"></div>
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/serviceOne.jpg"
              alt="Compassionate healthcare professionals supporting individuals with disabilities"
              width={600}
              height={400}
              className="w-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full -z-10"></div>
        </div>

        {/* Text Content */}
        <Card className="border-0 shadow-md bg-white">
          <CardContent className="p-8">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                Enhancing lives with compassionate care
              </h2>

              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Success Healthcare Services provides quality and safe services to all our participants. We aspire to put
                our participants first and central to all our services because a win for them is a win for us too.
              </p>

              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                We are committed to creating a safe space for people with disabilities to grow and reach their full
                potential. Your goals matter, and we promise to be beside you as you strive to achieve them.
              </p>

              <div className="pt-4">
                <Button variant="ghost" className="group text-primary hover:text-primary/90 hover:bg-transparent pl-0">
                  <span>Know more</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default About

