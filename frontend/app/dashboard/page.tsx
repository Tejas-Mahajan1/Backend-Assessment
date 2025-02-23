'use client';

import React from 'react';
import AdminDashboard from '../../components/Dashboard/AdminDashboard';
import ManagerDashboard from '../../components/Dashboard/ManagerDashboard';
import EmployeeDashboard from '../../components/Dashboard/EmployeeDashboard';

type UserRole = 'Admin' | 'Manager' | 'Employee';

export default function DashboardPage() {
  const userRole: UserRole = 'Admin'; 

  return (
    <div>
      {userRole === 'Admin' && <AdminDashboard />}
      {userRole === 'Manager' && <ManagerDashboard />}
      {userRole === 'Employee' && <EmployeeDashboard />}
    </div>
  );
} 