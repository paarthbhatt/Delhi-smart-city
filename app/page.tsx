"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import {
  Car,
  Zap,
  Shield,
  Trash2,
  Leaf,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  TrendingDown,
  MapPin,
  Clock,
  Thermometer,
  Wind,
  Droplets,
  Activity,
  Wifi,
  Satellite,
  Settings,
  BarChart3,
  Globe,
  Building,
  Users,
  Bell,
  Menu,
  Search,
  User,
  Mail,
  Phone,
  MapIcon,
  Facebook,
  Twitter,
  Linkedin,
  Github,
  Building2,
  Network,
} from "lucide-react"
import dynamic from "next/dynamic"

// Dynamically import 3D components to avoid SSR issues
const Canvas = dynamic(() => import("@react-three/fiber").then((mod) => ({ default: mod.Canvas })), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-lg flex items-center justify-center">
      <div className="text-white text-sm">Loading 3D visualization...</div>
    </div>
  ),
})

const OrbitControls = dynamic(() => import("@react-three/drei").then((mod) => ({ default: mod.OrbitControls })), {
  ssr: false,
})

const Environment = dynamic(() => import("@react-three/drei").then((mod) => ({ default: mod.Environment })), {
  ssr: false,
})

const Text = dynamic(() => import("@react-three/drei").then((mod) => ({ default: mod.Text })), {
  ssr: false,
})

const Box = dynamic(() => import("@react-three/drei").then((mod) => ({ default: mod.Box })), {
  ssr: false,
})

const Sphere = dynamic(() => import("@react-three/drei").then((mod) => ({ default: mod.Sphere })), {
  ssr: false,
})

const Cylinder = dynamic(() => import("@react-three/drei").then((mod) => ({ default: mod.Cylinder })), {
  ssr: false,
})

// Enhanced Logo Component
const SmartCityLogo = ({ size = "default" }) => {
  const dimensions = {
    small: { container: "w-8 h-8", icon: "h-5 w-5", text: "text-sm" },
    default: { container: "w-12 h-12", icon: "h-7 w-7", text: "text-xl" },
    large: { container: "w-16 h-16", icon: "h-10 w-10", text: "text-2xl" },
  }

  const { container, icon } = dimensions[size]

  return (
    <div
      className={`${container} relative bg-gradient-to-br from-blue-500 via-purple-500 to-violet-600 rounded-xl flex items-center justify-center shadow-lg`}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-white/10 rounded-xl">
        <div className="absolute inset-1 border border-white/20 rounded-lg"></div>
      </div>

      {/* Main icon */}
      <div className="relative z-10 flex items-center justify-center">
        <Building2 className={`${icon} text-white`} />
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
      </div>
    </div>
  )
}

// Header Component
const Header = ({ notificationCount, onNotificationClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/10 bg-slate-900/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <SmartCityLogo size="default" />
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-white">New Delhi Smart City</h1>
              <p className="text-xs text-gray-300">Command Center</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#overview" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Overview
            </a>
            <a href="#analytics" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Analytics
            </a>
            <a href="#reports" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Reports
            </a>
            <a href="#settings" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Settings
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white h-8 w-8 p-0">
              <Search className="h-4 w-4" />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="text-gray-300 hover:text-white relative h-8 w-8 p-0"
              onClick={onNotificationClick}
            >
              <Bell className="h-4 w-4" />
              {notificationCount > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {notificationCount > 9 ? "9+" : notificationCount}
                </span>
              )}
            </Button>

            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white h-8 w-8 p-0">
              <User className="h-4 w-4" />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-gray-300 hover:text-white h-8 w-8 p-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200/10">
            <nav className="flex flex-col space-y-2 mt-4">
              <a href="#overview" className="text-gray-300 hover:text-white transition-colors py-2 text-sm">
                Overview
              </a>
              <a href="#analytics" className="text-gray-300 hover:text-white transition-colors py-2 text-sm">
                Analytics
              </a>
              <a href="#reports" className="text-gray-300 hover:text-white transition-colors py-2 text-sm">
                Reports
              </a>
              <a href="#settings" className="text-gray-300 hover:text-white transition-colors py-2 text-sm">
                Settings
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

// Footer Component
const Footer = () => {
  return (
    <footer className="border-t border-gray-200/10 bg-slate-900/50 backdrop-blur-xl mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <SmartCityLogo size="small" />
              <span className="text-base font-bold text-white">New Delhi Smart City</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Advanced AI-powered urban management system for sustainable smart cities of the future.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-4 w-4 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-4 w-4 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="h-4 w-4 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Github className="h-4 w-4 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Traffic Management
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Energy Optimization
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Public Safety
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Waste Management
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Environmental Monitoring
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Support Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm">Contact</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-3 w-3 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300 text-xs">contact@newdelhismart.gov.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-3 w-3 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300 text-xs">+91 11 2345 6789</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapIcon className="h-3 w-3 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300 text-xs">New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200/10 mt-6 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs">
          <p className="text-gray-400">© 2024 New Delhi Smart City. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Notification Panel Component
const NotificationPanel = ({ notifications, isOpen, onClose }) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-[350px] sm:w-[400px] bg-slate-900/95 backdrop-blur-xl border-gray-200/10">
        <SheetHeader>
          <SheetTitle className="text-white flex items-center text-base">
            <Bell className="h-4 w-4 mr-2" />
            Notifications
          </SheetTitle>
          <SheetDescription className="text-gray-300 text-sm">Recent system alerts and updates</SheetDescription>
        </SheetHeader>
        <div className="mt-4 space-y-3 max-h-[calc(100vh-150px)] overflow-y-auto">
          {notifications.length === 0 ? (
            <p className="text-gray-400 text-center py-8 text-sm">No new notifications</p>
          ) : (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className="p-3 rounded-lg border border-gray-200/10 bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-start space-x-3">
                  <div className={`p-1.5 rounded-full ${notification.color} flex-shrink-0`}>
                    <notification.icon className="h-3 w-3 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white">{notification.message}</p>
                    <p className="text-xs text-gray-400 mt-1">{notification.timestamp}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}

// Optimized 3D Components with SSR safety
const CityModel = () => {
  return (
    <group>
      {/* Buildings - Reduced complexity */}
      {[...Array(8)].map((_, i) => (
        <Box
          key={i}
          position={[(Math.random() - 0.5) * 6, Math.random() * 1.5 + 0.5, (Math.random() - 0.5) * 6]}
          scale={[0.3, Math.random() * 1.2 + 0.4, 0.3]}
          material-color={`hsl(${210 + Math.random() * 20}, 50%, ${35 + Math.random() * 15}%)`}
        />
      ))}

      {/* Traffic indicators */}
      {[...Array(3)].map((_, i) => (
        <Sphere
          key={`traffic-${i}`}
          position={[Math.sin(i * 2) * 1.5, 0.1, Math.cos(i * 2) * 1.5]}
          scale={0.06}
          material-color="#3b82f6"
        />
      ))}

      <Text position={[0, 2.5, 0]} fontSize={0.3} color="#ffffff" anchorX="center" anchorY="middle">
        New Delhi 2024
      </Text>
    </group>
  )
}

const TrafficFlow3D = () => {
  return (
    <group>
      <Box position={[0, -0.05, 0]} scale={[4, 0.05, 0.6]} material-color="#374151" />
      <Box position={[0, -0.05, 0]} scale={[0.6, 0.05, 4]} material-color="#374151" />

      {[...Array(3)].map((_, i) => (
        <Box
          key={i}
          position={[Math.sin(Date.now() * 0.0006 + i) * 1.5, 0.05, Math.cos(Date.now() * 0.0006 + i) * 1.5]}
          scale={[0.15, 0.1, 0.3]}
          material-color={i % 2 === 0 ? "#3b82f6" : "#10b981"}
        />
      ))}
    </group>
  )
}

const EnergyGrid3D = () => {
  return (
    <group>
      {[...Array(4)].map((_, i) => (
        <Box
          key={`solar-${i}`}
          position={[((i % 2) - 0.5) * 1.2, 0.05, Math.floor(i / 2) * 1.2 - 0.6]}
          scale={[1, 0.05, 0.6]}
          material-color="#fbbf24"
        />
      ))}

      {[...Array(2)].map((_, i) => (
        <group key={`wind-${i}`} position={[(i - 0.5) * 2, 0, -1.5]}>
          <Cylinder scale={[0.06, 1.5, 0.06]} material-color="#e5e7eb" />
          <Box position={[0, 1.5, 0]} scale={[1.2, 0.04, 0.04]} material-color="#e5e7eb" />
        </group>
      ))}
    </group>
  )
}

// Simulated real-time data with stable initial values
const useRealTimeData = () => {
  const [data, setData] = useState({
    traffic: {
      congestionLevel: 65,
      avgSpeed: 28,
      incidents: 3,
      publicTransportDelay: 2,
      activeVehicles: 15420,
    },
    energy: {
      consumption: 847,
      renewable: 34,
      gridLoad: 78,
      savings: 12,
      solarOutput: 245,
      windOutput: 156,
    },
    safety: {
      emergencyResponse: 4.2,
      crimeRate: -8,
      activeCameras: 1247,
      alerts: 2,
      patrolUnits: 47,
    },
    waste: {
      collectionEfficiency: 92,
      recyclingRate: 67,
      fullBins: 23,
      routeOptimization: 15,
      totalWaste: 1250,
    },
    environment: {
      airQuality: 78,
      temperature: 22,
      humidity: 58,
      windSpeed: 12,
      noiseLevel: 45,
    },
    infrastructure: {
      bridgeHealth: 87,
      roadCondition: 91,
      waterSystem: 94,
      maintenanceAlerts: 5,
    },
    population: {
      totalCitizens: 32900000,
      activeUsers: 24500000,
      satisfaction: 87,
    },
  })

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const interval = setInterval(() => {
      setData((prev) => ({
        ...prev,
        traffic: {
          ...prev.traffic,
          congestionLevel: Math.max(20, Math.min(100, prev.traffic.congestionLevel + (Math.random() - 0.5) * 6)),
          avgSpeed: Math.max(15, Math.min(60, prev.traffic.avgSpeed + (Math.random() - 0.5) * 3)),
        },
        energy: {
          ...prev.energy,
          consumption: Math.max(500, Math.min(1200, prev.energy.consumption + (Math.random() - 0.5) * 30)),
          renewable: Math.max(20, Math.min(80, prev.energy.renewable + (Math.random() - 0.5) * 3)),
        },
        environment: {
          ...prev.environment,
          airQuality: Math.max(30, Math.min(100, prev.environment.airQuality + (Math.random() - 0.5) * 3)),
          temperature: Math.max(15, Math.min(35, prev.environment.temperature + (Math.random() - 0.5) * 1)),
        },
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [isClient])

  return data
}

// Notification System Hook with stable initial state
const useNotifications = () => {
  const [notifications, setNotifications] = useState([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const notificationTypes = [
      { type: "traffic", message: "Traffic congestion detected on Ring Road", icon: Car, color: "bg-red-500" },
      { type: "energy", message: "Solar panel efficiency increased by 12%", icon: Zap, color: "bg-yellow-500" },
      { type: "safety", message: "Emergency response time improved in CP area", icon: Shield, color: "bg-green-500" },
      { type: "waste", message: "Waste collection route optimized in Dwarka", icon: Trash2, color: "bg-blue-500" },
      { type: "environment", message: "Air quality improved in Lodhi Gardens", icon: Leaf, color: "bg-emerald-500" },
    ]

    const interval = setInterval(() => {
      const randomNotification = notificationTypes[Math.floor(Math.random() * notificationTypes.length)]

      setNotifications((prev) => [
        {
          id: Date.now(),
          ...randomNotification,
          timestamp: new Date().toLocaleTimeString(),
        },
        ...prev.slice(0, 19), // Keep only last 20 notifications
      ])
    }, 12000)

    return () => clearInterval(interval)
  }, [isClient])

  return notifications
}

const MetricCard = ({ title, value, unit, icon: Icon, trend, status = "normal", delay = 0, subtitle }) => {
  const statusColors = {
    normal: "text-emerald-500",
    warning: "text-amber-500",
    critical: "text-red-500",
  }

  return (
    <Card
      className="border border-gray-200/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 h-full group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-gray-300 mb-1 truncate">{title}</p>
            {subtitle && <p className="text-xs text-gray-400 truncate">{subtitle}</p>}
          </div>
          <Icon
            className={`h-5 w-5 ${statusColors[status]} flex-shrink-0 ml-2 group-hover:scale-105 transition-transform`}
          />
        </div>

        <div className="space-y-2">
          <p className="text-xl font-bold text-white truncate">
            {value}
            <span className="text-sm ml-1">{unit}</span>
          </p>

          {trend && (
            <div className="flex items-center">
              {trend > 0 ? (
                <TrendingUp className="h-3 w-3 text-emerald-500 mr-1 flex-shrink-0" />
              ) : (
                <TrendingDown className="h-3 w-3 text-red-500 mr-1 flex-shrink-0" />
              )}
              <span className={`text-xs ${trend > 0 ? "text-emerald-500" : "text-red-500"} truncate`}>
                {Math.abs(trend)}% vs last period
              </span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

const AnimatedProgress = ({ value, className = "", label }) => {
  const [animatedValue, setAnimatedValue] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedValue(value), 300)
    return () => clearTimeout(timer)
  }, [value])

  return (
    <div className="space-y-2">
      {label && (
        <div className="flex justify-between text-sm">
          <span className="text-gray-300 truncate">{label}</span>
          <span className="text-white font-semibold flex-shrink-0">{value}%</span>
        </div>
      )}
      <Progress value={animatedValue} className={`h-2 ${className}`} />
    </div>
  )
}

// Client-side time component to avoid hydration mismatch
const ClientTime = () => {
  const [time, setTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString())
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  if (!time) {
    return <span>--:--:--</span>
  }

  return <span>{time}</span>
}

export default function SmartCityDashboard() {
  const data = useRealTimeData()
  const notifications = useNotifications()
  const [activeTab, setActiveTab] = useState("overview")
  const [isNotificationOpen, setIsNotificationOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-950">
      {/* Subtle Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-blue-950/30 to-violet-950/20">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-40" />

        {/* Gentle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-slate-950/30" />
      </div>

      {/* Header */}
      <Header notificationCount={notifications.length} onNotificationClick={() => setIsNotificationOpen(true)} />

      {/* Notification Panel */}
      <NotificationPanel
        notifications={notifications}
        isOpen={isNotificationOpen}
        onClose={() => setIsNotificationOpen(false)}
      />

      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Hero Section */}
          <section className="text-center mb-12">
            <div className="mb-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-violet-400 bg-clip-text text-transparent mb-4">
                New Delhi Smart City Command Center
              </h1>
              <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                Advanced AI-powered urban management system providing real-time insights and predictive analytics for
                sustainable city operations across the National Capital Territory
              </p>
            </div>

            {/* City Stats Overview */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
              <div className="text-center p-4 rounded-xl border border-gray-200/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                <Users className="h-8 w-8 mx-auto mb-2 text-blue-400 group-hover:scale-105 transition-transform" />
                <p className="text-xl font-bold text-white">{(data.population.totalCitizens / 1000000).toFixed(1)}M</p>
                <p className="text-xs text-gray-300">Citizens</p>
              </div>
              <div className="text-center p-4 rounded-xl border border-gray-200/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                <Building className="h-8 w-8 mx-auto mb-2 text-purple-400 group-hover:scale-105 transition-transform" />
                <p className="text-xl font-bold text-white">1,247</p>
                <p className="text-xs text-gray-300">Smart Buildings</p>
              </div>
              <div className="text-center p-4 rounded-xl border border-gray-200/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                <Network className="h-8 w-8 mx-auto mb-2 text-emerald-400 group-hover:scale-105 transition-transform" />
                <p className="text-xl font-bold text-white">25.8K</p>
                <p className="text-xs text-gray-300">IoT Sensors</p>
              </div>
              <div className="text-center p-4 rounded-xl border border-gray-200/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                <Globe className="h-8 w-8 mx-auto mb-2 text-cyan-400 group-hover:scale-105 transition-transform" />
                <p className="text-xl font-bold text-white">{data.population.satisfaction}%</p>
                <p className="text-xs text-gray-300">Satisfaction</p>
              </div>
            </div>

            {/* Status indicators */}
            <div className="flex items-center justify-center flex-wrap gap-3 mb-8">
              <Badge
                variant="outline"
                className="border-emerald-500/30 text-emerald-300 px-3 py-1 text-xs hover:bg-emerald-500/10 transition-colors"
              >
                <CheckCircle className="h-3 w-3 mr-1" />
                All Systems Operational
              </Badge>
              <Badge
                variant="outline"
                className="border-blue-500/30 text-blue-300 px-3 py-1 text-xs hover:bg-blue-500/10 transition-colors"
              >
                <Activity className="h-3 w-3 mr-1" />
                Live Data Stream
              </Badge>
              <Badge
                variant="outline"
                className="border-purple-500/30 text-purple-300 px-3 py-1 text-xs hover:bg-purple-500/10 transition-colors"
              >
                <Satellite className="h-3 w-3 mr-1" />
                Satellite Connected
              </Badge>
              <Badge
                variant="outline"
                className="border-gray-500/30 text-gray-300 px-3 py-1 text-xs hover:bg-gray-500/10 transition-colors"
              >
                <Clock className="h-3 w-3 mr-1" />
                {isClient && <ClientTime />}
              </Badge>
            </div>
          </section>

          {/* Section Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-300/20 to-transparent mb-10" />

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-6 bg-white/5 backdrop-blur-sm border border-gray-200/10 rounded-xl p-1 max-w-3xl w-full">
                {[
                  { id: "overview", label: "Overview", icon: BarChart3 },
                  { id: "mobility", label: "Mobility", icon: Car },
                  { id: "energy", label: "Energy", icon: Zap },
                  { id: "safety", label: "Safety", icon: Shield },
                  { id: "waste", label: "Waste", icon: Trash2 },
                  { id: "environment", label: "Environment", icon: Leaf },
                ].map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white transition-all duration-300 hover:bg-white/10 rounded-lg py-2 px-3 text-xs font-medium flex items-center gap-1.5"
                  >
                    <tab.icon className="h-3 w-3" />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value="overview" className="space-y-12">
              {/* 3D City Visualization */}
              <section>
                <Card className="border border-gray-200/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-white flex items-center text-lg">
                      <Globe className="h-5 w-5 mr-2 text-blue-400" />
                      3D City Overview
                    </CardTitle>
                    <CardDescription className="text-gray-300 text-sm">
                      Interactive 3D visualization of New Delhi smart city infrastructure
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 rounded-lg overflow-hidden border border-gray-200/10 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
                      {isClient && (
                        <Canvas camera={{ position: [6, 4, 6], fov: 50 }}>
                          <ambientLight intensity={0.5} />
                          <pointLight position={[8, 8, 8]} intensity={0.6} />
                          <CityModel />
                          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
                          <Environment preset="night" />
                        </Canvas>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Key Metrics Overview */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-6 text-center">Key Performance Indicators</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <MetricCard
                    title="Traffic Flow"
                    subtitle="Real-time monitoring"
                    value={data.traffic.congestionLevel}
                    unit="%"
                    icon={Car}
                    trend={-5}
                    status={
                      data.traffic.congestionLevel > 80
                        ? "critical"
                        : data.traffic.congestionLevel > 60
                          ? "warning"
                          : "normal"
                    }
                    delay={0}
                  />
                  <MetricCard
                    title="Energy Efficiency"
                    subtitle="Renewable usage"
                    value={data.energy.renewable}
                    unit="%"
                    icon={Zap}
                    trend={8}
                    status="normal"
                    delay={100}
                  />
                  <MetricCard
                    title="Air Quality"
                    subtitle="Environmental health"
                    value={data.environment.airQuality}
                    unit="AQI"
                    icon={Leaf}
                    trend={3}
                    status={
                      data.environment.airQuality < 50
                        ? "critical"
                        : data.environment.airQuality < 75
                          ? "warning"
                          : "normal"
                    }
                    delay={200}
                  />
                  <MetricCard
                    title="Waste Collection"
                    subtitle="Efficiency rate"
                    value={data.waste.collectionEfficiency}
                    unit="%"
                    icon={Trash2}
                    trend={2}
                    status="normal"
                    delay={300}
                  />
                </div>
              </section>

              {/* Detailed Analytics Grid */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-6 text-center">System Analytics</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Alerts Panel */}
                  <Card className="border border-gray-200/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center text-white text-base">
                        <AlertTriangle className="h-4 w-4 mr-2 text-amber-500" />
                        Active Alerts
                        <Badge className="ml-auto bg-red-500/20 text-red-300 text-xs">{data.safety.alerts}</Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Alert className="bg-amber-500/10 border-amber-500/30 hover:bg-amber-500/20 transition-colors">
                        <AlertTriangle className="h-3 w-3 text-amber-400" />
                        <AlertTitle className="text-amber-300 text-sm">Traffic Congestion</AlertTitle>
                        <AlertDescription className="text-amber-200 text-xs">
                          Heavy traffic detected on Ring Road. AI routing system activated.
                        </AlertDescription>
                      </Alert>
                      <Alert className="bg-orange-500/10 border-orange-500/30 hover:bg-orange-500/20 transition-colors">
                        <Trash2 className="h-3 w-3 text-orange-400" />
                        <AlertTitle className="text-orange-300 text-sm">Waste Collection</AlertTitle>
                        <AlertDescription className="text-orange-200 text-xs">
                          {data.waste.fullBins} smart bins at capacity in Dwarka sector.
                        </AlertDescription>
                      </Alert>
                    </CardContent>
                  </Card>

                  {/* Performance Highlights */}
                  <Card className="border border-gray-200/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center text-white text-base">
                        <TrendingUp className="h-4 w-4 mr-2 text-emerald-500" />
                        Performance Highlights
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="space-y-2">
                        <div className="flex justify-between items-center p-2 rounded-lg border border-emerald-500/20 bg-emerald-500/10 hover:bg-emerald-500/20 transition-colors">
                          <span className="text-xs font-medium text-gray-200">Emergency Response</span>
                          <span className="text-xs text-emerald-400 font-bold">↓ 15% faster</span>
                        </div>
                        <div className="flex justify-between items-center p-2 rounded-lg border border-blue-500/20 bg-blue-500/10 hover:bg-blue-500/20 transition-colors">
                          <span className="text-xs font-medium text-gray-200">Renewable Energy</span>
                          <span className="text-xs text-blue-400 font-bold">↑ 8% increase</span>
                        </div>
                        <div className="flex justify-between items-center p-2 rounded-lg border border-purple-500/20 bg-purple-500/10 hover:bg-purple-500/20 transition-colors">
                          <span className="text-xs font-medium text-gray-200">Recycling Rate</span>
                          <span className="text-xs text-purple-400 font-bold">↑ 12% improvement</span>
                        </div>
                        <div className="flex justify-between items-center p-2 rounded-lg border border-cyan-500/20 bg-cyan-500/10 hover:bg-cyan-500/20 transition-colors">
                          <span className="text-xs font-medium text-gray-200">Citizen Satisfaction</span>
                          <span className="text-xs text-cyan-400 font-bold">↑ 5% this month</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* System Health */}
                  <Card className="border border-gray-200/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center text-white text-base">
                        <Settings className="h-4 w-4 mr-2 text-purple-400" />
                        System Health
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <AnimatedProgress value={data.infrastructure.bridgeHealth} label="Bridge Infrastructure" />
                      <AnimatedProgress value={data.infrastructure.roadCondition} label="Road Conditions" />
                      <AnimatedProgress value={data.infrastructure.waterSystem} label="Water System" />
                      <AnimatedProgress value={95} label="Network Connectivity" />

                      <div className="pt-3">
                        <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-sm">
                          <BarChart3 className="h-3 w-3 mr-1" />
                          Detailed Analytics
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>
            </TabsContent>

            <TabsContent value="mobility" className="space-y-12">
              {/* Traffic Hero Section */}
              <section>
                <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden border border-gray-200/10 group">
                  <img
                    src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=1400&h=500&fit=crop&crop=center"
                    alt="Delhi Traffic Management System"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent flex items-center">
                    <div className="p-6 sm:p-8">
                      <h3 className="text-2xl sm:text-4xl font-bold text-white mb-3">Intelligent Traffic Flow</h3>
                      <p className="text-sm sm:text-lg text-gray-200 mb-4">
                        AI-powered traffic optimization with predictive routing across Delhi NCR
                      </p>
                      <div className="flex items-center flex-wrap gap-2">
                        <Badge className="bg-green-500/20 text-green-300 border border-green-500/30 px-2 py-1 text-xs hover:bg-green-500/30 transition-colors">
                          {data.traffic.activeVehicles.toLocaleString()} Active Vehicles
                        </Badge>
                        <Badge className="bg-blue-500/20 text-blue-300 border border-blue-500/30 px-2 py-1 text-xs hover:bg-blue-500/30 transition-colors">
                          Real-time Monitoring
                        </Badge>
                        <Badge className="bg-purple-500/20 text-purple-300 border border-purple-500/30 px-2 py-1 text-xs hover:bg-purple-500/30 transition-colors">
                          Metro Integration
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* 3D Traffic Visualization */}
                <Card className="border border-gray-200/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-white flex items-center text-base">
                      <Car className="h-4 w-4 mr-2 text-blue-400" />
                      3D Traffic Flow
                    </CardTitle>
                    <CardDescription className="text-gray-300 text-sm">
                      Real-time vehicle movement visualization
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-60 rounded-lg overflow-hidden border border-gray-200/10 bg-gradient-to-br from-blue-900/20 to-cyan-900/20">
                      {isClient && (
                        <Canvas camera={{ position: [3, 3, 3], fov: 50 }}>
                          <ambientLight intensity={0.6} />
                          <pointLight position={[8, 8, 8]} intensity={0.7} />
                          <TrafficFlow3D />
                          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
                        </Canvas>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Traffic Analytics */}
                <Card className="border border-gray-200/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-white flex items-center text-base">
                      <Activity className="h-4 w-4 mr-2 text-blue-400" />
                      Traffic Analytics
                    </CardTitle>
                    <CardDescription className="text-gray-300 text-sm">
                      Comprehensive traffic flow analysis
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <AnimatedProgress value={data.traffic.congestionLevel} label="Congestion Level" />

                    <div className="grid grid-cols-2 gap-3">
                      <div className="text-center p-3 rounded-lg border border-blue-500/20 bg-blue-500/10 hover:bg-blue-500/20 transition-colors">
                        <p className="text-xs text-gray-300 mb-1">Avg Speed</p>
                        <p className="text-lg font-bold text-blue-400">{data.traffic.avgSpeed}</p>
                        <p className="text-xs text-gray-400">km/h</p>
                      </div>
                      <div className="text-center p-3 rounded-lg border border-red-500/20 bg-red-500/10 hover:bg-red-500/20 transition-colors">
                        <p className="text-xs text-gray-300 mb-1">Incidents</p>
                        <p className="text-lg font-bold text-red-400">{data.traffic.incidents}</p>
                        <p className="text-xs text-gray-400">active</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-2 rounded-lg border border-emerald-500/20 bg-emerald-500/10 hover:bg-emerald-500/20 transition-colors">
                        <span className="text-xs text-gray-300">Metro Efficiency</span>
                        <span className="text-emerald-400 font-bold text-xs">94%</span>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded-lg border border-amber-500/20 bg-amber-500/10 hover:bg-amber-500/20 transition-colors">
                        <span className="text-xs text-gray-300">Avg Delay</span>
                        <span className="text-amber-400 font-bold text-xs">
                          {data.traffic.publicTransportDelay} min
                        </span>
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 text-sm">
                      <MapPin className="h-3 w-3 mr-1" />
                      View Live Traffic Map
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Additional Traffic Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border border-gray-200/10 bg-white/5 backdrop-blur-sm overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop&crop=center"
                      alt="Delhi Metro System"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-white font-semibold text-lg">Metro Network</h3>
                      <p className="text-gray-200 text-sm">Integrated public transport system</p>
                    </div>
                  </div>
                </Card>
                <Card className="border border-gray-200/10 bg-white/5 backdrop-blur-sm overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&crop=center"
                      alt="Smart Traffic Signals"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-white font-semibold text-lg">Smart Signals</h3>
                      <p className="text-gray-200 text-sm">AI-powered traffic management</p>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="energy" className="space-y-12">
              {/* Energy Hero Section */}
              <section>
                <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden border border-gray-200/10 group">
                  <img
                    src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1400&h=500&fit=crop&crop=center"
                    alt="Delhi Smart Energy Grid"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/70 to-transparent flex items-center">
                    <div className="p-6 sm:p-8">
                      <h3 className="text-2xl sm:text-4xl font-bold text-white mb-3">Smart Energy Grid</h3>
                      <p className="text-sm sm:text-lg text-gray-200 mb-4">
                        Renewable energy optimization and intelligent distribution across Delhi
                      </p>
                      <div className="flex items-center flex-wrap gap-2">
                        <Badge className="bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 px-2 py-1 text-xs hover:bg-yellow-500/30 transition-colors">
                          {data.energy.solarOutput}MW Solar
                        </Badge>
                        <Badge className="bg-blue-500/20 text-blue-300 border border-blue-500/30 px-2 py-1 text-xs hover:bg-blue-500/30 transition-colors">
                          {data.energy.windOutput}MW Wind
                        </Badge>
                        <Badge className="bg-green-500/20 text-green-300 border border-green-500/30 px-2 py-1 text-xs hover:bg-green-500/30 transition-colors">
                          Smart Grid Active
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {/* 3D Energy Grid */}
                <Card className="border border-gray-200/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-white flex items-center text-base">
                      <Zap className="h-4 w-4 mr-2 text-yellow-400" />
                      3D Energy Grid
                    </CardTitle>
                    <CardDescription className="text-gray-300 text-sm">
                      Interactive renewable energy infrastructure
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-60 rounded-lg overflow-hidden border border-gray-200/10 bg-gradient-to-br from-yellow-900/20 to-orange-900/20">
                      {isClient && (
                        <Canvas camera={{ position: [4, 3, 4], fov: 50 }}>
                          <ambientLight intensity={0.6} />
                          <pointLight position={[8, 8, 8]} intensity={0.7} />
                          <EnergyGrid3D />
                          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
                        </Canvas>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Energy Distribution */}
                <Card className="border border-gray-200/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-white flex items-center text-base">
                      <BarChart3 className="h-4 w-4 mr-2 text-emerald-400" />
                      Energy Distribution
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-yellow-400 mb-1">{data.energy.consumption}MW</p>
                      <p className="text-gray-300 text-sm">Current Consumption</p>
                    </div>

                    <div className="space-y-3">
                      <AnimatedProgress value={data.energy.renewable} label="Renewable Sources" />
                      <AnimatedProgress value={data.energy.gridLoad} label="Grid Load" />

                      <div className="grid grid-cols-3 gap-2 mt-4">
                        <div className="text-center p-2 rounded-lg border border-yellow-500/20 bg-yellow-500/10 hover:bg-yellow-500/20 transition-colors">
                          <p className="text-sm font-bold text-yellow-400">18%</p>
                          <p className="text-xs text-gray-300">Solar</p>
                        </div>
                        <div className="text-center p-2 rounded-lg border border-blue-500/20 bg-blue-500/10 hover:bg-blue-500/20 transition-colors">
                          <p className="text-sm font-bold text-blue-400">12%</p>
                          <p className="text-xs text-gray-300">Wind</p>
                        </div>
                        <div className="text-center p-2 rounded-lg border border-cyan-500/20 bg-cyan-500/10 hover:bg-cyan-500/20 transition-colors">
                          <p className="text-sm font-bold text-cyan-400">4%</p>
                          <p className="text-xs text-gray-300">Hydro</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Energy Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <MetricCard
                  title="Energy Consumption"
                  subtitle="Real-time monitoring"
                  value={data.energy.consumption}
                  unit="MW"
                  icon={Zap}
                  trend={-3}
                  status="normal"
                />
                <MetricCard
                  title="Renewable Energy"
                  subtitle="Clean energy %"
                  value={data.energy.renewable}
                  unit="%"
                  icon={Leaf}
                  trend={8}
                  status="normal"
                />
                <MetricCard
                  title="Energy Savings"
                  subtitle="Efficiency gains"
                  value={data.energy.savings}
                  unit="%"
                  icon={TrendingUp}
                  trend={12}
                  status="normal"
                />
              </div>

              {/* Additional Energy Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border border-gray-200/10 bg-white/5 backdrop-blur-sm overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop&crop=center"
                      alt="Solar Power Plant Delhi"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-white font-semibold text-lg">Solar Infrastructure</h3>
                      <p className="text-gray-200 text-sm">Large-scale renewable energy generation</p>
                    </div>
                  </div>
                </Card>
                <Card className="border border-gray-200/10 bg-white/5 backdrop-blur-sm overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop&crop=center"
                      alt="Smart Grid Infrastructure"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-white font-semibold text-lg">Smart Grid</h3>
                      <p className="text-gray-200 text-sm">Intelligent energy distribution network</p>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="safety" className="space-y-12">
              {/* Safety Hero Section */}
              <section>
                <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden border border-gray-200/10 group">
                  <img
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1400&h=500&fit=crop&crop=center"
                    alt="Delhi Smart Security System"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-red-900/70 to-transparent flex items-center">
                    <div className="p-6 sm:p-8">
                      <h3 className="text-2xl sm:text-4xl font-bold text-white mb-3">AI Security Network</h3>
                      <p className="text-sm sm:text-lg text-gray-200 mb-4">
                        Advanced surveillance and emergency response system for Delhi NCR
                      </p>
                      <div className="flex items-center flex-wrap gap-2">
                        <Badge className="bg-green-500/20 text-green-300 border border-green-500/30 px-2 py-1 text-xs hover:bg-green-500/30 transition-colors">
                          {data.safety.activeCameras} Active Cameras
                        </Badge>
                        <Badge className="bg-blue-500/20 text-blue-300 border border-blue-500/30 px-2 py-1 text-xs hover:bg-blue-500/30 transition-colors">
                          {data.safety.patrolUnits} Patrol Units
                        </Badge>
                        <Badge className="bg-purple-500/20 text-purple-300 border border-purple-500/30 px-2 py-1 text-xs hover:bg-purple-500/30 transition-colors">
                          24/7 Monitoring
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <MetricCard
                  title="Emergency Response"
                  subtitle="Avg response time"
                  value={data.safety.emergencyResponse}
                  unit=" min"
                  icon={Shield}
                  trend={-15}
                  status="normal"
                />
                <MetricCard
                  title="Crime Rate Change"
                  subtitle="Monthly comparison"
                  value={data.safety.crimeRate}
                  unit="%"
                  icon={TrendingDown}
                  trend={8}
                  status="normal"
                />
                <MetricCard
                  title="Active Cameras"
                  subtitle="Surveillance network"
                  value={data.safety.activeCameras}
                  unit=""
                  icon={Activity}
                  status="normal"
                />
                <MetricCard
                  title="System Coverage"
                  subtitle="Area monitoring"
                  value={98}
                  unit="%"
                  icon={Wifi}
                  status="normal"
                />
              </div>

              {/* Additional Safety Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border border-gray-200/10 bg-white/5 backdrop-blur-sm overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop&crop=center"
                      alt="CCTV Surveillance Network"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-white font-semibold text-lg">Surveillance Network</h3>
                      <p className="text-gray-200 text-sm">AI-powered monitoring system</p>
                    </div>
                  </div>
                </Card>
                <Card className="border border-gray-200/10 bg-white/5 backdrop-blur-sm overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center"
                      alt="Emergency Response Center"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-white font-semibold text-lg">Emergency Response</h3>
                      <p className="text-gray-200 text-sm">24/7 command and control center</p>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="waste" className="space-y-12">
              {/* Waste Hero Section */}
              <section>
                <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden border border-gray-200/10 group">
                  <img
                    src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1400&h=500&fit=crop&crop=center"
                    alt="Delhi Smart Waste Management"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-transparent flex items-center">
                    <div className="p-6 sm:p-8">
                      <h3 className="text-2xl sm:text-4xl font-bold text-white mb-3">Smart Waste System</h3>
                      <p className="text-sm sm:text-lg text-gray-200 mb-4">
                        AI-optimized collection and recycling management across Delhi
                      </p>
                      <div className="flex items-center flex-wrap gap-2">
                        <Badge className="bg-green-500/20 text-green-300 border border-green-500/30 px-2 py-1 text-xs hover:bg-green-500/30 transition-colors">
                          {data.waste.totalWaste}T Daily Collection
                        </Badge>
                        <Badge className="bg-blue-500/20 text-blue-300 border border-blue-500/30 px-2 py-1 text-xs hover:bg-blue-500/30 transition-colors">
                          Smart Bin Network
                        </Badge>
                        <Badge className="bg-purple-500/20 text-purple-300 border border-purple-500/30 px-2 py-1 text-xs hover:bg-purple-500/30 transition-colors">
                          Route Optimization
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <MetricCard
                  title="Collection Efficiency"
                  subtitle="Route completion"
                  value={data.waste.collectionEfficiency}
                  unit="%"
                  icon={Trash2}
                  trend={2}
                  status="normal"
                />
                <MetricCard
                  title="Recycling Rate"
                  subtitle="Waste recycling %"
                  value={data.waste.recyclingRate}
                  unit="%"
                  icon={Activity}
                  trend={12}
                  status="normal"
                />
                <MetricCard
                  title="Route Optimization"
                  subtitle="Fuel savings"
                  value={data.waste.routeOptimization}
                  unit="%"
                  icon={TrendingUp}
                  trend={15}
                  status="normal"
                />
              </div>

              {/* Additional Waste Management Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border border-gray-200/10 bg-white/5 backdrop-blur-sm overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop&crop=center"
                      alt="Smart Waste Bins"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-white font-semibold text-lg">Smart Bins</h3>
                      <p className="text-gray-200 text-sm">IoT-enabled waste collection points</p>
                    </div>
                  </div>
                </Card>
                <Card className="border border-gray-200/10 bg-white/5 backdrop-blur-sm overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600&h=400&fit=crop&crop=center"
                      alt="Recycling Facility"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-white font-semibold text-lg">Recycling Centers</h3>
                      <p className="text-gray-200 text-sm">Advanced waste processing facilities</p>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="environment" className="space-y-12">
              {/* Environment Hero Section */}
              <section>
                <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden border border-gray-200/10 group">
                  <img
                    src="https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=1400&h=500&fit=crop&crop=center"
                    alt="Delhi Environmental Monitoring"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/70 to-transparent flex items-center">
                    <div className="p-6 sm:p-8">
                      <h3 className="text-2xl sm:text-4xl font-bold text-white mb-3">Environmental Intelligence</h3>
                      <p className="text-sm sm:text-lg text-gray-200 mb-4">
                        Real-time air quality and climate monitoring network across Delhi NCR
                      </p>
                      <div className="flex items-center flex-wrap gap-2">
                        <Badge className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-1 text-xs hover:bg-emerald-500/30 transition-colors">
                          AQI: {data.environment.airQuality}
                        </Badge>
                        <Badge className="bg-blue-500/20 text-blue-300 border border-blue-500/30 px-2 py-1 text-xs hover:bg-blue-500/30 transition-colors">
                          {data.environment.noiseLevel}dB Noise Level
                        </Badge>
                        <Badge className="bg-purple-500/20 text-purple-300 border border-purple-500/30 px-2 py-1 text-xs hover:bg-purple-500/30 transition-colors">
                          Real-time Monitoring
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <MetricCard
                  title="Air Quality Index"
                  subtitle="Environmental health"
                  value={data.environment.airQuality}
                  unit=""
                  icon={Leaf}
                  trend={3}
                  status={
                    data.environment.airQuality < 50
                      ? "critical"
                      : data.environment.airQuality < 75
                        ? "warning"
                        : "normal"
                  }
                />
                <MetricCard
                  title="Temperature"
                  subtitle="Current weather"
                  value={data.environment.temperature}
                  unit="°C"
                  icon={Thermometer}
                  status="normal"
                />
                <MetricCard
                  title="Humidity"
                  subtitle="Atmospheric moisture"
                  value={data.environment.humidity}
                  unit="%"
                  icon={Droplets}
                  status="normal"
                />
                <MetricCard
                  title="Wind Speed"
                  subtitle="Current conditions"
                  value={data.environment.windSpeed}
                  unit=" km/h"
                  icon={Wind}
                  status="normal"
                />
              </div>

              {/* Additional Environmental Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border border-gray-200/10 bg-white/5 backdrop-blur-sm overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600&h=400&fit=crop&crop=center"
                      alt="Air Quality Monitoring Station"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-white font-semibold text-lg">Air Quality Stations</h3>
                      <p className="text-gray-200 text-sm">Real-time pollution monitoring network</p>
                    </div>
                  </div>
                </Card>
                <Card className="border border-gray-200/10 bg-white/5 backdrop-blur-sm overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop&crop=center"
                      alt="Green Spaces Delhi"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-white font-semibold text-lg">Green Infrastructure</h3>
                      <p className="text-gray-200 text-sm">Urban parks and environmental zones</p>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
