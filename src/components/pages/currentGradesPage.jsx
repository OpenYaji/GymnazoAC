import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import GradesSummary from '../common/academic/grades/GradesSummary';
import GradesTable from '../common/academic/grades/GradesTable';
import GradeDetailModal from '../common/academic/grades/GradeDetailModal';
import GradeTrendChart from '../common/academic/grades/GradeTrendChart';

// Mock data for the entire page
const gradesData = {
  summary: {
    generalAverage: 87.6,
    attendanceRate: 100,
    academicStanding: 'Excellent',
  },
  subjects: [
    { id: 1, name: 'English', q1: 85.42, q2: 88, q3: null, q4: null, final: null, remarks: 'In Progress', details: { quizzes: 88, assignments: 90, project: 85, exam: 82, comments: 'Excellent participation in class discussions.' } },
    { id: 2, name: 'Math', q1: 85.42, q2: 86, q3: null, q4: null, final: null, remarks: 'In Progress', details: { quizzes: 85, assignments: 88, project: 82, exam: 87, comments: 'Shows strong problem-solving skills.' } },
    { id: 3, name: 'Filipino', q1: 85.42, q2: 90, q3: null, q4: null, final: null, remarks: 'In Progress', details: { quizzes: 92, assignments: 88, project: 90, exam: 89, comments: 'Mahusay sa pagsasalita at pagsusulat.' } },
    { id: 4, name: 'MAPEH', q1: 85.42, q2: 89, q3: null, q4: null, final: null, remarks: 'In Progress', details: { quizzes: 90, assignments: 85, project: 92, exam: 87, comments: 'Very creative in artistic outputs.' } },
    { id: 5, name: 'E.S.P', q1: 85.42, q2: 91, q3: null, q4: null, final: null, remarks: 'In Progress', details: { quizzes: 90, assignments: 92, project: 90, exam: 91, comments: 'Consistently shows good moral character.' } },
  ],
};


const CurrentGradesPage = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
          Current Grades
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
        <GradesSummary data={gradesData.summary} />
        <GradesTable subjects={gradesData.subjects} onSubjectClick={setSelectedSubject} />
        <GradeTrendChart subjects={gradesData.subjects} />
      </div>

      {selectedSubject && (
        <GradeDetailModal 
          subject={selectedSubject}
          onClose={() => setSelectedSubject(null)}
        />
      )}
    </>
  );
};

export default CurrentGradesPage;