import { useNavigate } from "react-router-dom";
import { Calendar, Clock, Users, BookOpen, ChartBar, Bell } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Users className="w-6 h-6 text-indigo-500" />,
      title: "Student Management",
      description:
        "Track student information, classes, and attendance history easily",
    },
    {
      icon: <Calendar className="w-6 h-6 text-indigo-500" />,
      title: "Daily Attendance",
      description: "Mark and monitor student attendance with just a few clicks",
    },
    {
      icon: <ChartBar className="w-6 h-6 text-indigo-500" />,
      title: "Attendance Reports",
      description: "Generate detailed reports and analyze attendance patterns",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Hero Section */}
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block">
              <span className="bg-indigo-100 text-indigo-800 text-sm px-4 py-2 rounded-full font-medium">
                Smart Attendance Tracking
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6 mb-6">
              Face Recognition Attendance
              <span className="text-indigo-600"> Management System</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Simplify attendance tracking, generate instant reports, and
              improve student attendance rates with our intuitive system
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => navigate("/dashboard")}
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Go to Dashboard
              </button>
              <button
                onClick={() => navigate("/profile")}
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-all duration-200">
                Go to Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Powerful Features
            </h2>
            <p className="text-gray-600 mt-4">
              Everything you need to manage student attendance effectively
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-indigo-500 transition-all duration-300 hover:shadow-lg group">
                <div className="bg-indigo-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-100 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-indigo-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                5000+
              </div>
              <div className="text-gray-600">Students</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-indigo-600 mb-2">95%</div>
              <div className="text-gray-600">Accuracy Rate</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-indigo-600 mb-2">50+</div>
              <div className="text-gray-600">Schools</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                24/7
              </div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Why Choose EduTrack?
            </h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-2 rounded-full">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-semibold text-lg mb-1">Save Time</h3>
                  <p className="text-gray-600">
                    Automated attendance tracking reduces manual work
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Bell className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-semibold text-lg mb-1">
                    Instant Notifications
                  </h3>
                  <p className="text-gray-600">
                    Real-time alerts for absences and attendance updates
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-2 rounded-full">
                  <ChartBar className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-semibold text-lg mb-1">
                    Detailed Analytics
                  </h3>
                  <p className="text-gray-600">
                    Comprehensive reports and attendance insights
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Streamline Your Attendance Management?
          </h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join thousands of educational institutions already using our system
          </p>
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-50 transition-all duration-200">
            Check Dashboard Demo For now
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-600">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <BookOpen className="h-6 w-6 text-indigo-600" />
              <span className="text-xl font-bold text-indigo-600">
                EduTrack
              </span>
            </div>
            <p className="mb-4">© 2024 EduTrack. All rights reserved.</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-600 hover:text-indigo-600">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-600">
                Terms of Service
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-600">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
