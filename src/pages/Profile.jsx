import React, { useState } from "react";
import {
  Calendar as CalendarIcon,
  User,
  Phone,
  GraduationCap,
  Calendar,
  BookOpen,
} from "lucide-react";

const Profile = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Sample student data
  const student = {
    enrollmentNumber: "EN123456",
    name: "Rana Hassan",
    semester: "7th Semester",
    mobileNumber: "+1234567890",
    batchYear: "4th Year",
    dob: "2001-05-15",
  };

  // Sample holiday dates
  const holidays = [
    { date: "2024-01-26", name: "Republic Day" },
    { date: "2024-08-15", name: "Independence Day" },
    { date: "2024-10-02", name: "Gandhi Jayanti" },
  ];

  // Helper function to check if a date is a holiday
  const isHoliday = (date) => {
    return holidays.some((holiday) => holiday.date === date);
  };

  // Get holiday name if exists
  const getHolidayName = (date) => {
    const holiday = holidays.find((h) => h.date === date);
    return holiday ? holiday.name : null;
  };

  // Generate calendar dates
  const generateCalendarDates = () => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    const days = [];
    for (let i = 0; i < startingDay; i++) {
      days.push(null);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(
        i
      ).padStart(2, "0")}`;
      days.push({
        day: i,
        date: dateStr,
        isHoliday: isHoliday(dateStr),
        holidayName: getHolidayName(dateStr),
      });
    }

    return days;
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-16">
      <div className="container mx-auto px-4 mt-10">
        <div className="max-w-6xl mx-auto">
          {/* Profile Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mt-6">
              Student <span className="text-indigo-600">Profile</span>
            </h1>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Profile Card */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center gap-2 mb-6">
                <User className="w-5 h-5 text-indigo-600" />
                <h2 className="text-xl font-semibold text-gray-900">
                  Personal Details
                </h2>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-indigo-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">
                      Enrollment No.
                    </span>
                    <span className="font-semibold text-indigo-600">
                      {student.enrollmentNumber}
                    </span>
                  </div>
                  <div className="text-xl font-bold text-gray-900">
                    {student.name}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="flex items-center gap-3">
                      <GraduationCap className="w-5 h-5 text-indigo-600" />
                      <span className="text-gray-600">Batch Year</span>
                    </div>
                    <span className="font-medium">{student.batchYear}</span>
                  </div>

                  <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-5 h-5 text-indigo-600" />
                      <span className="text-gray-600">Semester</span>
                    </div>
                    <span className="font-medium">{student.semester}</span>
                  </div>

                  <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-indigo-600" />
                      <span className="text-gray-600">Mobile</span>
                    </div>
                    <span className="font-medium">{student.mobileNumber}</span>
                  </div>

                  <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-indigo-600" />
                      <span className="text-gray-600">Date of Birth</span>
                    </div>
                    <span className="font-medium">{student.dob}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Calendar Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 md:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5 text-indigo-600" />
                  <h2 className="text-xl font-semibold text-gray-900">
                    Holiday Calendar
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      setSelectedDate(
                        new Date(
                          selectedDate.getFullYear(),
                          selectedDate.getMonth() - 1
                        )
                      )
                    }
                    className="p-2 hover:bg-indigo-50 rounded-full transition-colors">
                    ←
                  </button>
                  <span className="font-bold text-lg">
                    {monthNames[selectedDate.getMonth()]}{" "}
                    {selectedDate.getFullYear()}
                  </span>
                  <button
                    onClick={() =>
                      setSelectedDate(
                        new Date(
                          selectedDate.getFullYear(),
                          selectedDate.getMonth() + 1
                        )
                      )
                    }
                    className="p-2 hover:bg-indigo-50 rounded-full transition-colors">
                    →
                  </button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                  (day) => (
                    <div
                      key={day}
                      className="text-center font-semibold text-gray-600 p-2">
                      {day}
                    </div>
                  )
                )}
                {generateCalendarDates().map((date, index) => (
                  <div
                    key={index}
                    className={`
                      p-2 min-h-16 border rounded-lg
                      ${!date ? "bg-gray-50" : ""}
                      ${date?.isHoliday ? "bg-indigo-50 border-indigo-200" : ""}
                      hover:border-indigo-300 transition-colors
                    `}>
                    {date && (
                      <>
                        <div
                          className={`text-sm ${
                            date.isHoliday
                              ? "text-indigo-600 font-semibold"
                              : ""
                          }`}>
                          {date.day}
                        </div>
                        {date.isHoliday && (
                          <div className="text-xs text-indigo-600 mt-1">
                            {date.holidayName}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
