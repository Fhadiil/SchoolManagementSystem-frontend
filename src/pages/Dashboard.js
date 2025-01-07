import React, { useState } from "react";
import {
  Users,
  Book,
  Calendar,
  ChartBar,
  Bell,
  Settings,
  GraduationCap,
  FileText,
  Clock,
  UserCircle,
  Mail,
  CheckCircle,
  AlertCircle,
  TrendingUp,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Alert,
  AlertDescription,
} from "../components/ui-components";

const Dashboard = ({ userType = "admin" }) => {
  const [selectedView, setSelectedView] = useState("overview");

  // Sample data - In a real app, this would come from your backend
  const stats = {
    admin: [
      { title: "Total Students", value: "2,856", icon: Users, trend: "+12%" },
      {
        title: "Total Teachers",
        value: "142",
        icon: GraduationCap,
        trend: "+4%",
      },
      {
        title: "Attendance Rate",
        value: "95%",
        icon: CheckCircle,
        trend: "+2%",
      },
      { title: "Revenue", value: "$284,560", icon: TrendingUp, trend: "+8%" },
    ],
    teacher: [
      { title: "My Students", value: "156", icon: Users, trend: "" },
      { title: "Classes Today", value: "4", icon: Book, trend: "" },
      { title: "Assignments", value: "12", icon: FileText, trend: "" },
      { title: "Attendance", value: "98%", icon: CheckCircle, trend: "" },
    ],
    student: [
      { title: "Attendance", value: "92%", icon: CheckCircle, trend: "" },
      { title: "Assignments Due", value: "3", icon: FileText, trend: "" },
      { title: "Current Grade", value: "A-", icon: TrendingUp, trend: "" },
      { title: "Next Class", value: "Math", icon: Clock, trend: "" },
    ],
  };

  const recentActivities = {
    admin: [
      { title: "New student registration", time: "2 hours ago", type: "info" },
      { title: "Updated school policy", time: "4 hours ago", type: "success" },
      { title: "Teacher meeting scheduled", time: "Yesterday", type: "info" },
      { title: "Budget report generated", time: "Yesterday", type: "success" },
    ],
    teacher: [
      {
        title: "Assignment submitted by John Doe",
        time: "1 hour ago",
        type: "info",
      },
      { title: "Class schedule updated", time: "3 hours ago", type: "success" },
      { title: "Parent meeting scheduled", time: "Yesterday", type: "info" },
      { title: "Grades updated", time: "Yesterday", type: "success" },
    ],
    student: [
      { title: "New assignment posted", time: "30 minutes ago", type: "info" },
      { title: "Quiz grade posted", time: "2 hours ago", type: "success" },
      { title: "Class canceled tomorrow", time: "Today", type: "warning" },
      { title: "Homework due reminder", time: "Today", type: "error" },
    ],
  };

  const upcomingEvents = [
    { title: "Staff Meeting", date: "Today, 2:00 PM", type: "meeting" },
    { title: "Science Fair", date: "Tomorrow, 9:00 AM", type: "event" },
    {
      title: "Parent-Teacher Conference",
      date: "Jan 10, 3:00 PM",
      type: "conference",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 gap-6">
        {/* Welcome Section */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Welcome back,{" "}
              {userType === "admin"
                ? "Administrator"
                : userType === "teacher"
                ? "Ms. Smith"
                : "John"}
            </h1>
            <p className="text-gray-600">Here's what's happening today</p>
          </div>
          <div className="flex space-x-2">
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
              <Bell className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
              <Settings className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats[userType].map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      {stat.title}
                    </p>
                    <div className="flex items-center mt-2">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {stat.value}
                      </h3>
                      {stat.trend && (
                        <span className="ml-2 text-sm font-medium text-green-600">
                          {stat.trend}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="p-3 bg-blue-100 rounded-full">
                    <stat.icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activities */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities[userType].map((activity, index) => (
                  <Alert
                    key={index}
                    variant={
                      activity.type === "success" ? "default" : "destructive"
                    }
                  >
                    <div className="flex justify-between items-center">
                      <AlertDescription>
                        {activity.title}
                        <span className="text-sm text-gray-500 ml-2">
                          {activity.time}
                        </span>
                      </AlertDescription>
                    </div>
                  </Alert>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 bg-gray-50 rounded-lg"
                  >
                    <Calendar className="h-5 w-5 text-blue-600 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">{event.title}</p>
                      <p className="text-sm text-gray-500">{event.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          {userType === "admin" && (
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { title: "Add Student", icon: UserCircle },
                    { title: "Send Announcement", icon: Mail },
                    { title: "Generate Report", icon: FileText },
                    { title: "View Schedule", icon: Calendar },
                  ].map((action, index) => (
                    <button
                      key={index}
                      className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors flex flex-col items-center justify-center"
                    >
                      <action.icon className="h-6 w-6 text-blue-600 mb-2" />
                      <span className="text-sm font-medium text-gray-900">
                        {action.title}
                      </span>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
