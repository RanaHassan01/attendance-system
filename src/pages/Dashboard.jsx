import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Calendar,
  Users,
  ChartBar,
  BookOpen,
  CheckCircle,
  XCircle,
} from "lucide-react";

const Dashboard = () => {
  // Previous data remains the same
  const attendanceData = [
    { month: "Jan", attendance: 92 },
    { month: "Feb", attendance: 88 },
    { month: "Mar", attendance: 95 },
    { month: "Apr", attendance: 89 },
    { month: "May", attendance: 94 },
    { month: "Jun", attendance: 91 },
  ];

  const subjects = [
    { name: "Machine Learning", attendance: 88, total: 45, present: 40 },
    { name: "Data Science", attendance: 92, total: 42, present: 39 },
    { name: "Artificial Intelligence", attendance: 85, total: 40, present: 34 },
    { name: "Expert Systems", attendance: 94, total: 38, present: 36 },
    { name: "Entrepreneurship", attendance: 90, total: 35, present: 32 },
  ];

  // Daily attendance data
  const dailyAttendance = [
    {
      date: "2024-03-11",
      day: "Monday",
      attendance: [
        { subject: "Machine Learning", status: "P" },
        { subject: "Data Science", status: "P" },
        { subject: "Artificial Intelligence", status: "A" },
        { subject: "Expert Systems", status: "--" },
        { subject: "Entrepreneurship", status: "P" },
      ],
    },
    {
      date: "2024-03-12",
      day: "Tuesday",
      attendance: [
        { subject: "Machine Learning", status: "P" },
        { subject: "Data Science", status: "--" },
        { subject: "Artificial Intelligence", status: "P" },
        { subject: "Expert Systems", status: "P" },
        { subject: "Entrepreneurship", status: "A" },
      ],
    },
    {
      date: "2024-03-13",
      day: "Wednesday",
      attendance: [
        { subject: "Machine Learning", status: "--" },
        { subject: "Data Science", status: "P" },
        { subject: "Artificial Intelligence", status: "P" },
        { subject: "Expert Systems", status: "P" },
        { subject: "Entrepreneurship", status: "P" },
      ],
    },
    {
      date: "2024-03-14",
      day: "Thursday",
      attendance: [
        { subject: "Machine Learning", status: "P" },
        { subject: "Data Science", status: "A" },
        { subject: "Artificial Intelligence", status: "P" },
        { subject: "Expert Systems", status: "--" },
        { subject: "Entrepreneurship", status: "P" },
      ],
    },
  ];

  const overallStats = {
    present: 181,
    total: 200,
    percentage: 90.5,
  };

  const COLORS = ["#4F46E5", "#818CF8", "#6366F1", "#4338CA", "#3730A3"];

  // Status badge component
  const StatusBadge = ({ status }) => {
    const getStatusStyle = (status) => {
      switch (status) {
        case "P":
          return "bg-green-100 text-green-800";
        case "A":
          return "bg-red-100 text-red-800";
        default:
          return "bg-gray-100 text-gray-600";
      }
    };

    return (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium ${getStatusStyle(
          status
        )}`}>
        {status}
      </span>
    );
  };

  // Previous JSX remains the same until the last table
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white p-3 sm:p-4 md:p-6 ">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-8 mt-20">
        {/* Total Classes Card */}
        <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-600">
                Total Classes
              </p>
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-indigo-600">
                {overallStats.total}
              </p>
            </div>
            <Calendar className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-indigo-500" />
          </div>
        </div>

        {/* Classes Attended Card */}
        <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-600">
                Classes Attended
              </p>
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-indigo-600">
                {overallStats.present}
              </p>
            </div>
            <CheckCircle className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-green-500" />
          </div>
        </div>

        {/* Attendance Rate Card */}
        <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-600">
                Attendance Rate
              </p>
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-indigo-600">
                {overallStats.percentage}%
              </p>
            </div>
            <ChartBar className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-indigo-500" />
          </div>
        </div>

        {/* Total Subjects Card */}
        <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-600">
                Total Subjects
              </p>
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-indigo-600">
                {subjects.length}
              </p>
            </div>
            <BookOpen className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-indigo-500" />
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-6 md:mb-8">
        {/* Monthly Trend Chart */}
        <div className="bg-white rounded-xl shadow-sm p-4 sm:p-5 md:p-6">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
            Monthly Attendance Trend
          </h2>
          <div className="h-[250px] sm:h-[275px] md:h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="attendance"
                  stroke="#4F46E5"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Subject-wise Chart */}
        <div className="bg-white rounded-xl shadow-sm p-4 sm:p-5 md:p-6">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
            Subject-wise Attendance
          </h2>
          <div className="h-[250px] sm:h-[275px] md:h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={subjects}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="attendance" fill="#4F46E5">
                  {subjects.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Subject Analysis Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-4 sm:mb-6 md:mb-8">
        <div className="p-4 sm:p-5 md:p-6 border-b border-gray-100">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
            Detailed Subject Analysis
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left py-3 sm:py-4 px-4 sm:px-6 text-xs sm:text-sm font-semibold text-gray-900">
                  Subject
                </th>
                <th className="text-center py-3 sm:py-4 px-4 sm:px-6 text-xs sm:text-sm font-semibold text-gray-900">
                  Total Classes
                </th>
                <th className="text-center py-3 sm:py-4 px-4 sm:px-6 text-xs sm:text-sm font-semibold text-gray-900">
                  Attended
                </th>
                <th className="text-center py-3 sm:py-4 px-4 sm:px-6 text-xs sm:text-sm font-semibold text-gray-900">
                  Attendance
                </th>
                <th className="text-center py-3 sm:py-4 px-4 sm:px-6 text-xs sm:text-sm font-semibold text-gray-900">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((subject, index) => (
                <tr
                  key={index}
                  className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-3 sm:py-4 px-4 sm:px-6 text-xs sm:text-sm text-gray-900">
                    {subject.name}
                  </td>
                  <td className="py-3 sm:py-4 px-4 sm:px-6 text-xs sm:text-sm text-center text-gray-700">
                    {subject.total}
                  </td>
                  <td className="py-3 sm:py-4 px-4 sm:px-6 text-xs sm:text-sm text-center text-gray-700">
                    {subject.present}
                  </td>
                  <td className="py-3 sm:py-4 px-4 sm:px-6 text-xs sm:text-sm text-center font-medium text-indigo-600">
                    {subject.attendance}%
                  </td>
                  <td className="py-3 sm:py-4 px-4 sm:px-6 text-center">
                    <span
                      className={`inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium ${
                        subject.attendance >= 85
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}>
                      {subject.attendance >= 85 ? "Good" : "Need Improvement"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Daily Attendance Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-4 md:p-6 border-b border-gray-100">
          <h2 className="text-lg md:text-xl font-semibold text-gray-900">
            Daily Attendance Log
          </h2>
          <p className="text-sm md:text-base text-gray-600 mt-1 md:mt-2">
            Detailed view of your daily attendance records
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-indigo-50">
                <th className="text-left py-2 px-4 md:py-4 md:px-6 font-semibold text-indigo-900 text-xs md:text-sm">
                  Date
                </th>
                <th className="text-left py-2 px-4 md:py-4 md:px-6 font-semibold text-indigo-900 text-xs md:text-sm">
                  Day
                </th>
                {subjects.map((subject, index) => (
                  <th
                    key={index}
                    className="text-center py-2 px-4 md:py-4 md:px-6 font-semibold text-indigo-900 text-xs md:text-sm">
                    {subject.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dailyAttendance.map((day, index) => (
                <tr
                  key={index}
                  className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-2 px-4 md:py-4 md:px-6 text-gray-900 font-medium text-xs md:text-sm">
                    {day.date}
                  </td>
                  <td className="py-2 px-4 md:py-4 md:px-6 text-gray-600 text-xs md:text-sm">
                    {day.day}
                  </td>
                  {day.attendance.map((record, idx) => (
                    <td
                      key={idx}
                      className="py-2 px-4 md:py-4 md:px-6 text-center text-xs md:text-sm">
                      <StatusBadge status={record.status} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
