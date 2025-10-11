import React from 'react';
import { TrendingUp, Users, Calendar, Award } from 'lucide-react';

const OverallPerformanceCard = () => {
  const performanceData = {
    studentName: "Zhego Ian B. Co",
    gradeLevel: "Grade 4",
    section: "St. Peter",
    generalAverage: 92.5,
    remark: "Very Satisfactory",
    attendance: 98,
    attendanceRemark: "Perfect Attendance",
    totalDaysPresent: 58,
    totalDays: 60,     
    schoolYear: "2024-2025",
    quarter: "1st Quarter"
  };

  const getGradeColor = (average) => {
    if (average >= 90) return "from-green-500 to-emerald-600";
    if (average >= 85) return "from-blue-500 to-cyan-600";
    if (average >= 80) return "from-yellow-500 to-amber-600";
    return "from-gray-500 to-slate-600";
  };

  return (
    <div className="bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-[#F4D77D] dark:bg-slate-700 rounded-xl">
            <Award className="w-8 h-8 text-gray-800 dark:text-amber-300" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              {performanceData.studentName}
            </h2>
            <div className="flex items-center gap-3 mt-1">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {performanceData.gradeLevel} - {performanceData.section}
              </span>
              <span className="text-sm px-3 py-1 bg-[#F4D77D]/20 dark:bg-slate-700 text-gray-700 dark:text-amber-300 rounded-full font-medium">
                {performanceData.quarter}
              </span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            S.Y. {performanceData.schoolYear}
          </span>
        </div>
      </div>

      {/* Performance Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* General Average */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-700/50 dark:to-slate-700/30 p-6 border border-gray-200 dark:border-slate-600">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 bg-white dark:bg-slate-800 rounded-lg">
                <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                General Average
              </span>
            </div>
            
            <div className="flex items-end gap-3 mb-3">
              <div className={`text-5xl font-bold bg-gradient-to-r ${getGradeColor(performanceData.generalAverage)} bg-clip-text text-transparent`}>
                {performanceData.generalAverage}
              </div>
              <div className="text-2xl font-semibold text-gray-400 dark:text-gray-500 mb-1">
                /100
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-bold">
                {performanceData.remark}
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-green-400/10 to-emerald-400/10 dark:from-green-600/10 dark:to-emerald-600/10 rounded-full blur-2xl"></div>
        </div>

        {/* Attendance */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-700/50 dark:to-slate-700/30 p-6 border border-gray-200 dark:border-slate-600">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 bg-white dark:bg-slate-800 rounded-lg">
                <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Attendance
              </span>
            </div>
            
            <div className="flex items-center gap-4 mb-3">
              {/* Circular Progress */}
              <div className="relative w-20 h-20">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="40"
                    cy="40"
                    r="36"
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="transparent"
                    className="text-gray-200 dark:text-slate-600"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="36"
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="transparent"
                    strokeDasharray={`${2 * Math.PI * 36}`}
                    strokeDashoffset={`${2 * Math.PI * 36 * (1 - performanceData.attendance / 100)}`}
                    className="text-blue-500 dark:text-blue-400 transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold text-gray-800 dark:text-gray-100">
                    {performanceData.attendance}%
                  </span>
                </div>
              </div>
              
              <div>
                <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                  {performanceData.totalDaysPresent}/{performanceData.totalDays}
                </div>
                {/* --- MODIFIED LINE --- */}
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {performanceData.quarter === '1st Quarter' ? 'August - October' : 'Days Present'}
                </div>
                {/* --- END OF MODIFICATION --- */}
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-xs font-bold">
                {performanceData.attendanceRemark}
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 dark:from-blue-600/10 dark:to-cyan-600/10 rounded-full blur-2xl"></div>
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-700/50 dark:to-slate-700/30 p-6 border border-gray-200 dark:border-slate-600">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 bg-white dark:bg-slate-800 rounded-lg">
                <Users className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Class Participation
              </span>
            </div>
            
            <div className="mb-3">
              <div className="flex items-center gap-2 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-8 h-8"
                    fill={i < 4 ? "currentColor" : "none"}
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      className="text-[#F4D77D] dark:text-amber-400"
                    />
                  </svg>
                ))}
              </div>
              <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                {performanceData.participation}
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-xs font-bold">
                Excellent
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-pink-400/10 dark:from-purple-600/10 dark:to-pink-600/10 rounded-full blur-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default OverallPerformanceCard;