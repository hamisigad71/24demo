"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Calendar, MessageCircle, CreditCard, Bell, Download, Eye, Clock, LogOut, Phone } from "lucide-react"

export default function ClientPortalPage() {
  const [user, setUser] = useState<{ email: string; name: string } | null>(null)
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    const userEmail = localStorage.getItem("userEmail")
    const userName = localStorage.getItem("userName")

    if (!isLoggedIn) {
      router.push("/login")
      return
    }

    setUser({
      email: userEmail || "",
      name: userName || userEmail || "Client",
    })
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("userEmail")
    localStorage.removeItem("userName")
    router.push("/")
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-slate flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-crimson border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  const cases = [
    {
      id: "CASE-2024-001",
      title: "Personal Injury Claim",
      status: "Active",
      attorney: "Sarah Johnson",
      nextAppointment: "Jan 15, 2024",
      progress: 75,
    },
    {
      id: "CASE-2024-002",
      title: "Contract Review",
      status: "Completed",
      attorney: "Michael Chen",
      nextAppointment: null,
      progress: 100,
    },
  ]

  const documents = [
    { name: "Settlement Agreement.pdf", date: "Jan 10, 2024", size: "2.4 MB" },
    { name: "Medical Records.pdf", date: "Jan 8, 2024", size: "1.8 MB" },
    { name: "Insurance Correspondence.pdf", date: "Jan 5, 2024", size: "856 KB" },
  ]

  const messages = [
    { from: "Sarah Johnson", subject: "Case Update", date: "Jan 12, 2024", unread: true },
    { from: "Legal Assistant", subject: "Document Request", date: "Jan 10, 2024", unread: false },
    { from: "Michael Chen", subject: "Contract Review Complete", date: "Jan 8, 2024", unread: false },
  ]

  return (
    <div className="min-h-screen bg-slate">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-navy">Client Portal</h1>
              <p className="text-gray-600">Welcome back, {user.name}</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="icon" className="relative bg-transparent">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-crimson rounded-full"></span>
              </Button>
              <Button variant="outline" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-crimson/10 rounded-lg flex items-center justify-center">
                  <FileText className="h-6 w-6 text-crimson" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-navy">2</p>
                  <p className="text-sm text-gray-600">Active Cases</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-light/10 rounded-lg flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-blue-light" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-navy">1</p>
                  <p className="text-sm text-gray-600">Upcoming Appointments</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-navy" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-navy">1</p>
                  <p className="text-sm text-gray-600">Unread Messages</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-crimson/10 rounded-lg flex items-center justify-center">
                  <CreditCard className="h-6 w-6 text-crimson" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-navy">$0</p>
                  <p className="text-sm text-gray-600">Outstanding Balance</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Cases */}
            <Card>
              <CardHeader>
                <CardTitle className="text-navy">My Cases</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {cases.map((case_) => (
                    <div key={case_.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-navy">{case_.title}</h3>
                          <p className="text-sm text-gray-600">Case ID: {case_.id}</p>
                          <p className="text-sm text-gray-600">Attorney: {case_.attorney}</p>
                        </div>
                        <Badge
                          className={case_.status === "Active" ? "bg-blue-light text-white" : "bg-green-500 text-white"}
                        >
                          {case_.status}
                        </Badge>
                      </div>

                      <div className="mb-3">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span>{case_.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-crimson h-2 rounded-full" style={{ width: `${case_.progress}%` }}></div>
                        </div>
                      </div>

                      {case_.nextAppointment && (
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="h-4 w-4 mr-2" />
                          Next appointment: {case_.nextAppointment}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Documents */}
            <Card>
              <CardHeader>
                <CardTitle className="text-navy">Recent Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {documents.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <FileText className="h-5 w-5 text-crimson" />
                        <div>
                          <p className="font-medium text-navy">{doc.name}</p>
                          <p className="text-sm text-gray-600">
                            {doc.date} • {doc.size}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Messages */}
            <Card>
              <CardHeader>
                <CardTitle className="text-navy">Messages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`p-3 border rounded-lg ${message.unread ? "bg-blue-50 border-blue-200" : ""}`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="font-medium text-navy text-sm">{message.from}</p>
                          <p className="text-sm text-gray-600">{message.subject}</p>
                          <p className="text-xs text-gray-500 mt-1">{message.date}</p>
                        </div>
                        {message.unread && <div className="w-2 h-2 bg-crimson rounded-full"></div>}
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4 bg-navy hover:bg-navy/90 text-white">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  View All Messages
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-navy">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-crimson hover:bg-crimson/90 text-white">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Appointment
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-navy text-navy hover:bg-navy hover:text-white bg-transparent"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Upload Document
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-navy text-navy hover:bg-navy hover:text-white bg-transparent"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-navy text-navy hover:bg-navy hover:text-white bg-transparent"
                >
                  <CreditCard className="h-4 w-4 mr-2" />
                  View Invoices
                </Button>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="bg-crimson/5 border-crimson/20">
              <CardHeader>
                <CardTitle className="text-crimson">Emergency Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Need immediate legal assistance? Our emergency hotline is available 24/7.
                </p>
                <Button className="w-full bg-crimson hover:bg-crimson/90 text-white">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Emergency Line
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
