"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import {
  CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Upload,
  Briefcase,
  User,
  GraduationCap,
  FileText,
  Users,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function JobApplicationPage() {
  const [step, setStep] = useState(1)
  const [dob, setDob] = useState()
  const [dateCompleted, setDateCompleted] = useState()
  const [expectedCompletionDate, setExpectedCompletionDate] = useState()
  const [dateStarted1, setDateStarted1] = useState()
  const [dateFinished1, setDateFinished1] = useState()
  const [dateStarted2, setDateStarted2] = useState()
  const [dateFinished2, setDateFinished2] = useState()

  const totalSteps = 5

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#0055c2]/5 to-[#ED19A6]/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-dots-pattern opacity-5 -z-10"></div>

        <div className="container mx-auto px-4 md:px-6 text-center">
          <Badge className="bg-[#0055c2]/10 text-[#0055c2] hover:bg-[#0055c2]/20 px-4 py-1 text-sm mb-6">Join Our Team</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Career Opportunities
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Join our team of dedicated professionals making a difference in the lives of people with disabilities.
          </p>

          <Tabs defaultValue="openings" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="openings">Current Openings</TabsTrigger>
              <TabsTrigger value="application">Application Form</TabsTrigger>
            </TabsList>
            <TabsContent value="openings" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Registered Nurse",
                    type: "Full-time / Part-time",
                    location: "Perth",
                    description:
                      "We're seeking experienced Registered Nurses to provide high-quality clinical care to our NDIS participants.",
                  },
                  {
                    title: "Disability Support Worker",
                    type: "Full-time / Part-time / Casual",
                    location: "Perth",
                    description:
                      "Join our team of support workers providing daily assistance and community access support.",
                  },
                  {
                    title: "Behavior Support Practitioner",
                    type: "Full-time",
                    location: "Perth",
                    description:
                      "Experienced practitioners needed to develop and implement positive behavior support plans.",
                  },
                  {
                    title: "Support Coordinator",
                    type: "Part-time",
                    location: "Perth",
                    description: "Help our participants navigate the NDIS and connect with appropriate services.",
                  },
                ].map((job, index) => (
                  <Card
                    key={index}
                    className="border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold">{job.title}</h3>
                          <p className="text-gray-600 text-sm">{job.type}</p>
                        </div>
                        <Badge className="bg-[#0055c2]/10 text-[#0055c2]">{job.location}</Badge>
                      </div>
                      <p className="text-gray-700 mb-4">{job.description}</p>
                      <div className="flex justify-end">
                        <Button
                          variant="outline"
                          className="text-[#0055c2] border-[#0055c2] hover:bg-[#0055c2]/5"
                          onClick={() =>
                            document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" })
                          }
                        >
                          Apply Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="application" className="mt-8">
              <p className="text-center text-gray-700 mb-8">
                Please complete the application form below to apply for a position with Success Healthcare Group. All
                fields marked with (Required) are mandatory.
              </p>
              <Button
                className="mx-auto block bg-[#0055c2] hover:bg-[#0055c2]/90 text-white"
                onClick={() => document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" })}
              >
                Go to Application Form
              </Button>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Application Form</h2>
              <div className="h-1 w-20 bg-[#ED19A6] mx-auto mb-8 rounded-full"></div>
              <p className="text-lg text-gray-700">Please complete all required fields to submit your application.</p>
            </div>

            {/* Progress Indicator */}
            <div className="mb-10">
              <div className="flex justify-between items-center mb-2">
                {Array.from({ length: totalSteps }).map((_, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-center w-10 h-10 rounded-full ${
                      step > index + 1
                        ? "bg-[#0055c2] text-white"
                        : step === index + 1
                          ? "bg-[#0055c2]/20 text-[#0055c2] border border-[#0055c2]"
                          : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>
              <div className="relative h-2 bg-gray-100 rounded-full">
                <div
                  className="absolute top-0 left-0 h-full bg-[#0055c2] rounded-full transition-all duration-300"
                  style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-2 text-sm text-gray-500">
                <div>Personal Info</div>
                <div>Qualifications</div>
                <div>Employment</div>
                <div>Documents</div>
                <div>References</div>
              </div>
            </div>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <form className="space-y-8">
                  {/* Step 1: Personal Information */}
                  {step === 1 && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-2 mb-6">
                        <User className="h-5 w-5 text-[#0055c2]" />
                        <h3 className="text-xl font-bold">Personal Information</h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <Label htmlFor="title">Title</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select title" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="mr">Mr</SelectItem>
                              <SelectItem value="mrs">Mrs</SelectItem>
                              <SelectItem value="miss">Miss</SelectItem>
                              <SelectItem value="ms">Ms</SelectItem>
                              <SelectItem value="dr">Dr</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="firstName">
                            First Name <span className="text-red-500">*</span>
                          </Label>
                          <Input id="firstName" required />
                        </div>
                        <div>
                          <Label htmlFor="lastName">
                            Last Name <span className="text-red-500">*</span>
                          </Label>
                          <Input id="lastName" required />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <Label>Address</Label>
                        <Input placeholder="Street Address" />
                        <Input placeholder="Address Line 2" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Input placeholder="City" />
                          <Input placeholder="State / Province / Region" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Input placeholder="ZIP / Postal Code" />
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Country" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="australia">Australia</SelectItem>
                              <SelectItem value="new-zealand">New Zealand</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label>Sex</Label>
                        <RadioGroup defaultValue="male" className="flex space-x-4 mt-2">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="male" id="male" />
                            <Label htmlFor="male">Male</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="female" id="female" />
                            <Label htmlFor="female">Female</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="other" id="other" />
                            <Label htmlFor="other">Other</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="mobilePhone">
                            Mobile Phone <span className="text-red-500">*</span>
                          </Label>
                          <Input id="mobilePhone" required />
                        </div>
                        <div>
                          <Label htmlFor="homePhone">Home Phone</Label>
                          <Input id="homePhone" />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email">
                          Email <span className="text-red-500">*</span>
                        </Label>
                        <Input id="email" type="email" required />
                      </div>

                      <div>
                        <Label htmlFor="dob">
                          Date of Birth <span className="text-red-500">*</span>
                        </Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant={"outline"} className="w-full justify-start text-left font-normal">
                              {dob ? format(dob, "MM/dd/yyyy") : <span className="text-gray-500">MM/DD/YYYY</span>}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar mode="single" selected={dob} onSelect={setDob} initialFocus />
                          </PopoverContent>
                        </Popover>
                      </div>

                      <div>
                        <Label htmlFor="nationality">
                          Nationality <span className="text-red-500">*</span>
                        </Label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select nationality" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="australian">Australian</SelectItem>
                            <SelectItem value="new-zealander">New Zealander</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label>
                          Do you have the right to work in Australia? <span className="text-red-500">*</span>
                        </Label>
                        <RadioGroup defaultValue="yes" className="flex space-x-4 mt-2">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id="work-yes" />
                            <Label htmlFor="work-yes">Yes</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="work-no" />
                            <Label htmlFor="work-no">No</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div>
                        <Label htmlFor="visaRestrictions">
                          Visa Restrictions <span className="text-red-500">*</span>
                        </Label>
                        <Input id="visaRestrictions" placeholder="EG Student Visa 20 hours" required />
                      </div>

                      <div>
                        <Label>Do you have a car?</Label>
                        <RadioGroup defaultValue="yes" className="flex space-x-4 mt-2">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id="car-yes" />
                            <Label htmlFor="car-yes">Yes</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="car-no" />
                            <Label htmlFor="car-no">No</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div>
                        <Label>Are you willing to do regional blocks?</Label>
                        <RadioGroup defaultValue="yes" className="flex space-x-4 mt-2">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id="regional-yes" />
                            <Label htmlFor="regional-yes">Yes</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="regional-no" />
                            <Label htmlFor="regional-no">No</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div>
                        <Label>
                          Position Applying For <span className="text-red-500">*</span>
                        </Label>
                        <RadioGroup defaultValue="rn" className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="rn" id="rn" />
                            <Label htmlFor="rn">Registered Nurse</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="en" id="en" />
                            <Label htmlFor="en">Enrolled Nurse Med Comp</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="ain" id="ain" />
                            <Label htmlFor="ain">AIN Assistant in Nursing</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="domestic" id="domestic" />
                            <Label htmlFor="domestic">Domestic Home Carer</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="admin" id="admin" />
                            <Label htmlFor="admin">Administration</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="physio" id="physio" />
                            <Label htmlFor="physio">Physiotherapist</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="exercise" id="exercise" />
                            <Label htmlFor="exercise">Exercise Physiologist</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="ot" id="ot" />
                            <Label htmlFor="ot">Occupational Therapist</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="ota" id="ota" />
                            <Label htmlFor="ota">OTA</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="pta" id="pta" />
                            <Label htmlFor="pta">PTA</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="other" id="other-position" />
                            <Label htmlFor="other-position">Other Allied Health</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div>
                        <Label>Status</Label>
                        <RadioGroup defaultValue="fulltime" className="flex space-x-4 mt-2">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="fulltime" id="fulltime" />
                            <Label htmlFor="fulltime">Fulltime</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="parttime" id="parttime" />
                            <Label htmlFor="parttime">Parttime</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="casual" id="casual" />
                            <Label htmlFor="casual">Casual</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div>
                        <Label>Availability</Label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2">
                          {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                            <div key={day} className="flex items-center space-x-2">
                              <Checkbox id={day.toLowerCase()} />
                              <Label htmlFor={day.toLowerCase()}>{day}</Label>
                            </div>
                          ))}
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
                          {[
                            "Mainly Mornings",
                            "Mainly Afternoons",
                            "Mainly Nights",
                            "Anytime (only tick this is available 24/7)",
                          ].map((time) => (
                            <div key={time} className="flex items-center space-x-2">
                              <Checkbox id={time.toLowerCase().replace(/\s+/g, "-")} />
                              <Label htmlFor={time.toLowerCase().replace(/\s+/g, "-")}>{time}</Label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Qualifications */}
                  {step === 2 && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-2 mb-6">
                        <GraduationCap className="h-5 w-5 text-[#0055c2]" />
                        <h3 className="text-xl font-bold">Qualifications</h3>
                      </div>

                      <div>
                        <Label htmlFor="qualificationsCompleted">
                          Qualifications Completed <span className="text-red-500">*</span>
                        </Label>
                        <Textarea id="qualificationsCompleted" required className="min-h-[100px]" />
                      </div>

                      <div>
                        <Label htmlFor="dateCompleted">Date Completed</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant={"outline"} className="w-full justify-start text-left font-normal">
                              {dateCompleted ? (
                                format(dateCompleted, "MM/dd/yyyy")
                              ) : (
                                <span className="text-gray-500">MM/DD/YYYY</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar mode="single" selected={dateCompleted} onSelect={setDateCompleted} initialFocus />
                          </PopoverContent>
                        </Popover>
                      </div>

                      <div>
                        <Label htmlFor="qualificationsStudying">
                          Qualifications Currently Being Studied <span className="text-red-500">*</span>
                        </Label>
                        <Textarea id="qualificationsStudying" required className="min-h-[100px]" />
                      </div>

                      <div>
                        <Label htmlFor="expectedCompletionDate">Expected Completion Date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant={"outline"} className="w-full justify-start text-left font-normal">
                              {expectedCompletionDate ? (
                                format(expectedCompletionDate, "MM/dd/yyyy")
                              ) : (
                                <span className="text-gray-500">MM/DD/YYYY</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={expectedCompletionDate}
                              onSelect={setExpectedCompletionDate}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Employment History */}
                  {step === 3 && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-2 mb-6">
                        <Briefcase className="h-5 w-5 text-[#0055c2]" />
                        <h3 className="text-xl font-bold">Employment History</h3>
                      </div>

                      <div className="space-y-8">
                        <div className="space-y-4 p-6 bg-gray-50 rounded-lg">
                          <h4 className="font-semibold text-lg">Previous Employment #1</h4>

                          <div>
                            <Label htmlFor="businessName1">Business Name</Label>
                            <Input id="businessName1" />
                          </div>

                          <div>
                            <Label htmlFor="position1">Position</Label>
                            <Input id="position1" />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="dateStarted1">Date Started</Label>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <Button variant={"outline"} className="w-full justify-start text-left font-normal">
                                    {dateStarted1 ? (
                                      format(dateStarted1, "MM/dd/yyyy")
                                    ) : (
                                      <span className="text-gray-500">MM/DD/YYYY</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                  <Calendar
                                    mode="single"
                                    selected={dateStarted1}
                                    onSelect={setDateStarted1}
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                            </div>

                            <div>
                              <Label htmlFor="dateFinished1">Date Finished</Label>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <Button variant={"outline"} className="w-full justify-start text-left font-normal">
                                    {dateFinished1 ? (
                                      format(dateFinished1, "MM/dd/yyyy")
                                    ) : (
                                      <span className="text-gray-500">MM/DD/YYYY</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                  <Calendar
                                    mode="single"
                                    selected={dateFinished1}
                                    onSelect={setDateFinished1}
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4 p-6 bg-gray-50 rounded-lg">
                          <h4 className="font-semibold text-lg">Previous Employment #2</h4>

                          <div>
                            <Label htmlFor="businessName2">Business Name</Label>
                            <Input id="businessName2" />
                          </div>

                          <div>
                            <Label htmlFor="position2">Position</Label>
                            <Input id="position2" />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="dateStarted2">Date Started</Label>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <Button variant={"outline"} className="w-full justify-start text-left font-normal">
                                    {dateStarted2 ? (
                                      format(dateStarted2, "MM/dd/yyyy")
                                    ) : (
                                      <span className="text-gray-500">MM/DD/YYYY</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                  <Calendar
                                    mode="single"
                                    selected={dateStarted2}
                                    onSelect={setDateStarted2}
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                            </div>

                            <div>
                              <Label htmlFor="dateFinished2">Date Finished</Label>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <Button variant={"outline"} className="w-full justify-start text-left font-normal">
                                    {dateFinished2 ? (
                                      format(dateFinished2, "MM/dd/yyyy")
                                    ) : (
                                      <span className="text-gray-500">MM/DD/YYYY</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                  <Calendar
                                    mode="single"
                                    selected={dateFinished2}
                                    onSelect={setDateFinished2}
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 4: Documents */}
                  {step === 4 && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-2 mb-6">
                        <FileText className="h-5 w-5 text-[#0055c2]" />
                        <h3 className="text-xl font-bold">Documents</h3>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <Label htmlFor="resume">
                            Resume <span className="text-red-500">*</span>
                          </Label>
                          <div className="mt-2">
                            <div className="flex items-center justify-center w-full">
                              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                  <Upload className="w-8 h-8 mb-3 text-gray-400" />
                                  <p className="mb-2 text-sm text-gray-500">
                                    <span className="font-semibold">Click to upload</span> or drag and drop
                                  </p>
                                  <p className="text-xs text-gray-500">PDF, DOC, DOCX (MAX. 10MB)</p>
                                </div>
                                <input id="resume" type="file" className="hidden" required />
                              </label>
                            </div>
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="coverLetter">
                            Cover Letter <span className="text-red-500">*</span>
                          </Label>
                          <div className="mt-2">
                            <div className="flex items-center justify-center w-full">
                              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                  <Upload className="w-8 h-8 mb-3 text-gray-400" />
                                  <p className="mb-2 text-sm text-gray-500">
                                    <span className="font-semibold">Click to upload</span> or drag and drop
                                  </p>
                                  <p className="text-xs text-gray-500">PDF, DOC, DOCX (MAX. 10MB)</p>
                                </div>
                                <input id="coverLetter" type="file" className="hidden" required />
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 5: References */}
                  {step === 5 && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-2 mb-6">
                        <Users className="h-5 w-5 text-[#0055c2]" />
                        <h3 className="text-xl font-bold">References</h3>
                      </div>

                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                        <p className="text-sm text-yellow-700">
                          <strong>Note:</strong> Referees must be someone who has been your direct supervisor, manager
                          or trainer in this field. If you have not got a direct supervisor please contact us to
                          discuss.
                        </p>
                      </div>

                      <div className="space-y-8">
                        <div className="space-y-4 p-6 bg-gray-50 rounded-lg">
                          <h4 className="font-semibold text-lg">
                            Referee 1 <span className="text-red-500">*</span>
                          </h4>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="referee1First">First Name</Label>
                              <Input id="referee1First" required />
                            </div>
                            <div>
                              <Label htmlFor="referee1Last">Last Name</Label>
                              <Input id="referee1Last" required />
                            </div>
                          </div>

                          <div>
                            <Label htmlFor="referee1Email">Email - Preferred</Label>
                            <Input id="referee1Email" type="email" />
                          </div>

                          <div>
                            <Label htmlFor="referee1Phone">Phone</Label>
                            <Input id="referee1Phone" />
                          </div>

                          <div>
                            <Label htmlFor="referee1Position">Position</Label>
                            <Input id="referee1Position" />
                          </div>
                        </div>

                        <div className="space-y-4 p-6 bg-gray-50 rounded-lg">
                          <h4 className="font-semibold text-lg">
                            Referee 2 <span className="text-red-500">*</span>
                          </h4>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="referee2First">First Name</Label>
                              <Input id="referee2First" required />
                            </div>
                            <div>
                              <Label htmlFor="referee2Last">Last Name</Label>
                              <Input id="referee2Last" required />
                            </div>
                          </div>

                          <div>
                            <Label htmlFor="referee2Email">Email - Preferred</Label>
                            <Input id="referee2Email" type="email" />
                          </div>

                          <div>
                            <Label htmlFor="referee2Phone">Phone</Label>
                            <Input id="referee2Phone" />
                          </div>

                          <div>
                            <Label htmlFor="referee2Position">Position</Label>
                            <Input id="referee2Position" />
                          </div>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="hearAboutUs">
                          How did you hear about us? <span className="text-red-500">*</span>
                        </Label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="website">Website</SelectItem>
                            <SelectItem value="social-media">Social Media</SelectItem>
                            <SelectItem value="friend">Friend or Colleague</SelectItem>
                            <SelectItem value="job-board">Job Board</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={prevStep}
                      disabled={step === 1}
                      className="flex items-center"
                    >
                      <ChevronLeft className="mr-2 h-4 w-4" />
                      Previous
                    </Button>

                    {step < totalSteps ? (
                      <Button
                        type="button"
                        onClick={nextStep}
                        className="bg-[#0055c2] hover:bg-[#0055c2]/90 text-white flex items-center"
                      >
                        Next
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    ) : (
                      <Button type="submit" className="bg-[#0055c2] hover:bg-[#0055c2]/90 text-white">
                        Submit Application
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}