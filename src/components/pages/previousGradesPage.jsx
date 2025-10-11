import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PreviousGradesFilters from '../common/academic/previous-grades/PreviousGradesFilters';
import PreviousGradesSummary from '../common/academic/previous-grades/PreviousGradesSummary';
import PreviousGradesTable from '../common/academic/previous-grades/PreviousGradesTable';
import YearPerformanceChart from '../common/academic/previous-grades/YearPerformanceChart';

// Mock data for multiple school years
const historicalData = {
  "2023-2024": {
    gradeLevel: 'Grade 4',
    summary: { finalAverage: 88.5, attendanceRate: 98, academicStanding: 'Promoted' },
    subjects: [
      { id: 1, name: 'English', q1: 86, q2: 88, q3: 90, q4: 91, final: 88.75, remarks: 'Passed' },
      { id: 2, name: 'Math', q1: 85, q2: 84, q3: 83, q4: 86, final: 84.5, remarks: 'Passed' },
      { id: 3, name: 'Filipino', q1: 87, q2: 89, q3: 90, q4: 88, final: 88.5, remarks: 'Passed' },
      { id: 4, name: 'MAPEH', q1: 90, q2: 92, q3: 91, q4: 94, final: 91.75, remarks: 'Passed' },
      { id: 5, name: 'E.S.P', q1: 83, q2: 85, q3: 84, q4: 86, final: 84.5, remarks: 'Passed' },
    ],
  },
  "2022-2023": {
    gradeLevel: 'Grade 3',
    summary: { finalAverage: 86.2, attendanceRate: 97, academicStanding: 'Promoted' },
    subjects: [
      { id: 1, name: 'English', q1: 85, q2: 87, q3: 88, q4: 89, final: 87.25, remarks: 'Passed' },
      { id: 2, name: 'Math', q1: 82, q2: 83, q3: 85, q4: 84, final: 83.5, remarks: 'Passed' },
      { id: 3, name: 'Filipino', q1: 86, q2: 88, q3: 87, q4: 89, final: 87.5, remarks: 'Passed' },
    ],
  },
};

const allYearsPerformance = [
    { year: '2022-2023', 'Final Average': 86.2 },
    { year: '2023-2024', 'Final Average': 88.5 },
];


const PreviousGradesPage = () => {
  const [selectedYear, setSelectedYear] = useState("2023-2024");
  const selectedYearData = historicalData[selectedYear];

  return (
    <>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
          Previous Grades
        </h1>
        <Link 
          to="/student-dashboard/academic"
          className="flex items-center gap-2 text-sm font-semibold bg-white dark:bg-slate-700 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors border border-gray-200 dark:border-slate-600"
        >
          <ArrowLeft size={16} />
          Back to Academic
        </Link>
      </div>

      <div className="flex flex-col gap-8">
        <PreviousGradesFilters 
            schoolYears={Object.keys(historicalData)} 
            selectedYear={selectedYear}
            onYearChange={setSelectedYear}
            gradeLevel={selectedYearData.gradeLevel}
        />
        <PreviousGradesSummary data={selectedYearData.summary} />
        <PreviousGradesTable subjects={selectedYearData.subjects} />
        <YearPerformanceChart data={allYearsPerformance} />
      </div>
    </>
  );
};

export default PreviousGradesPage;