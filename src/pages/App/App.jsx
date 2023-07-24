import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import SchedulerPage from '../SchedulerPage/SchedulerPage';
import CourseInfoPage from '../CourseInfoPage/CourseInfoPage';
import CourseListPage from '../CourseListPage/CourseListPage';
import CreateReview from '../CreateReview/CreateReview';
import AccountPage from '../AccountPage/AccountPage';
import Footer from '../../components/Footer/Footer';
import * as coursesAPI from '../../utilities/courses-api';
import * as reservationsAPI from '../../utilities/reservations-api';

import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [courses, setCourses] = useState([]);
  const [myReservations, setMyReservations] = useState([]);

  useEffect(function () {
    async function getCourses() {
      const courses = await coursesAPI.getAll();
      setCourses(courses);
    }
    getCourses();
  }, [])

  useEffect(function () {
    async function getMyReservations() {
      const myReservations = await reservationsAPI.getDetails();
      setMyReservations(myReservations);
    }
    if (user) {
      getMyReservations();
    } else {
      setMyReservations([]);  // no logged in user, set to empty array
    }
  }, [user]);



  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/courses" element={<CourseListPage courses={courses} />} />
            <Route path="/courses/:id" element={<CourseInfoPage user={user} />} />
            <Route path="/scheduler" element={<SchedulerPage user={user} courses={courses} myReservations={myReservations} setMyReservations={setMyReservations} />} />
            <Route path="/account/:id" element={<AccountPage user={user} myReservations={myReservations} setMyReservations={setMyReservations}/>} />
            <Route path="/createReview/:id" element={<CreateReview courses={courses}/>} />
            <Route path="/*" element={<SchedulerPage user={user} courses={courses} myReservations={myReservations} setMyReservations={setMyReservations} />} />

          </Routes>
          <Footer />
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
