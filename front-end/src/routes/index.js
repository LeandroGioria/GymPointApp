import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';

import StudentList from '../pages/StudentList';
import StudentForm from '../pages/StudentForm';

import PlanList from '../pages/PlanList';
import PlanForm from '../pages/PlanForm';

import EnrollmentList from '../pages/EnrollmentList';
import EnrollmentForm from '../pages/EnrollmentForm';

import HelpOrderList from '../pages/HelpOrderList';
import Feedback from '../pages/Feedback';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/students" component={StudentList} isPrivate />
      <Route path="/student/form" component={StudentForm} isPrivate />

      <Route path="/plans" component={PlanList} isPrivate />
      <Route path="/plan/form" component={PlanForm} isPrivate />

      <Route path="/enrollments" component={EnrollmentList} isPrivate />
      <Route path="/enrollment/form" component={EnrollmentForm} isPrivate />
      <Route
        path="/enrollment/:studentId"
        component={EnrollmentForm}
        isPrivate
      />

      <Route path="/helps" component={HelpOrderList} isPrivate />
      <Route path="/help/feedback" component={Feedback} isPrivate />
    </Switch>
  );
}
