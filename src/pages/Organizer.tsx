
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, ArrowLeft, Calendar, CheckSquare, FileText, Folder, Clock, Target } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

const Organizer = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth?service=organizer');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-300 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-black mb-1">My OS (Organizer)</h1>
                <p className="text-sm text-gray-600">Organize your development workflow with smart tools</p>
              </div>
            </div>
            <Link to="/" className="flex items-center ml-auto">
              <span className="text-sm text-gray-600 mr-2">Back to DHRC</span>
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-6">
          <p className="text-gray-600">Welcome back, {user.email}!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Task Manager */}
          <Card className="border border-gray-200 bg-gradient-to-br from-green-50 to-emerald-100">
            <CardHeader>
              <CheckSquare className="w-8 h-8 text-green-600 mb-2" />
              <CardTitle className="text-xl">Task Manager</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Organize and track your development tasks with smart prioritization.
              </p>
              <Button className="w-full">
                Manage Tasks
              </Button>
            </CardContent>
          </Card>

          {/* Project Calendar */}
          <Card className="border border-gray-200">
            <CardHeader>
              <Calendar className="w-8 h-8 text-blue-600 mb-2" />
              <CardTitle className="text-xl">Project Calendar</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Schedule and track your project milestones and deadlines.
              </p>
              <Button variant="outline" className="w-full">
                View Calendar
              </Button>
            </CardContent>
          </Card>

          {/* Notes & Documentation */}
          <Card className="border border-gray-200">
            <CardHeader>
              <FileText className="w-8 h-8 text-purple-600 mb-2" />
              <CardTitle className="text-xl">Notes & Docs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Keep all your development notes and documentation organized.
              </p>
              <Button variant="outline" className="w-full">
                Open Notes
              </Button>
            </CardContent>
          </Card>

          {/* File Organizer */}
          <Card className="border border-gray-200">
            <CardHeader>
              <Folder className="w-8 h-8 text-orange-600 mb-2" />
              <CardTitle className="text-xl">File Organizer</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Smart file organization for your development resources.
              </p>
              <Button variant="outline" className="w-full">
                Organize Files
              </Button>
            </CardContent>
          </Card>

          {/* Time Tracker */}
          <Card className="border border-gray-200">
            <CardHeader>
              <Clock className="w-8 h-8 text-red-600 mb-2" />
              <CardTitle className="text-xl">Time Tracker</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Track time spent on different projects and tasks.
              </p>
              <Button variant="outline" className="w-full">
                Start Tracking
              </Button>
            </CardContent>
          </Card>

          {/* Goal Setting */}
          <Card className="border border-gray-200">
            <CardHeader>
              <Target className="w-8 h-8 text-indigo-600 mb-2" />
              <CardTitle className="text-xl">Goal Setting</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Set and track your development goals and milestones.
              </p>
              <Button variant="outline" className="w-full">
                Set Goals
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Productivity Tips */}
        <Card className="mt-8 border border-gray-200 bg-gray-50">
          <CardHeader>
            <CardTitle className="text-xl font-serif text-black">Productivity Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Daily Workflow</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Start with high-priority tasks</li>
                  <li>• Use time-blocking for focused work</li>
                  <li>• Take regular breaks to maintain focus</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Organization</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Keep a clean workspace and file system</li>
                  <li>• Document your progress regularly</li>
                  <li>• Review and adjust goals weekly</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Organizer;
