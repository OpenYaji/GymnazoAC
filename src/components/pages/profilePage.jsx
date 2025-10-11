import React from 'react';
import ProfileHeader from '../common/account/ProfileHeader';
import PersonalInfo from '../common/account/PersonalInfo';
import ParentGuardianInfo from '../common/account/ParentGuardianInfo';
import MedicalInfo from '../common/account/MedicalInfo';

const studentData = {
  personal: {
    fullName: 'Zhego Ian B. Co',
    email: 'jhego.co@gmail.com',
    age: 10,
    birthday: 'August 1, 2015',
    address: 'Sauyo, Quezon City, Metro Manila',
    phone: '+63 91-4556-9875',
    gender: 'Male',
    birthPlace: 'Quezon City',
    nationality: 'Filipino',
    motherTongue: 'Tagalog',
    religion: 'Roman Catholic',
  },
  academic: {
    gradeSection: '4 - St. Peter',
    adviser: 'Marlyn Shedeson',
    status: 'Enrolled',
  },
  parentGuardian: {
    fatherName: 'Juan Dacayo',
    motherName: 'Maria Dacayo',
    guardianName: 'Maria Dacayo',
    guardianRelationship: 'Mother',
    contactNumber: '+63 917-123-4567',
    email: 'maria.dacayo@email.com',
  },
  medical: {
    weight: '35',
    height: '140',
    allergies: 'None',
    conditions: 'None',
    emergencyContactPerson: 'Maria Dacayo',
    emergencyContactNumber: '+63 917-123-4567',
  }
};


const ProfilePage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
        My Account
      </h1>

      <div className="flex flex-col gap-8">
        <ProfileHeader user={studentData.personal} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 flex flex-col gap-8">
            <PersonalInfo personalData={studentData.personal} academicData={studentData.academic} />
            <ParentGuardianInfo data={studentData.parentGuardian} />
          </div>

          <div className="lg:col-span-1">
            <MedicalInfo data={studentData.medical} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;