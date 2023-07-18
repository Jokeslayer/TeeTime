import './App.css';
import { useState, useEffect, useRef } from 'react';
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
  const [reservations, setReservations] = useState([]);

  useEffect(function () {
    async function getCourses() {
      const courses = await coursesAPI.getAll();
      setCourses(courses);
    }
    getCourses();
  }, [])

  useEffect(function () {
    async function getReservations() {
      const reservations = await reservationsAPI.getAll();
      setReservations(reservations);
    }
    getReservations();
  }, [])

  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/courses" element={<CourseListPage courses={courses} />} />
            <Route path="/courses/:id" element={<CourseInfoPage />} />
            <Route path="/scheduler" element={<SchedulerPage courses={courses} reservations={reservations} setReservations={setReservations} />} />
            <Route path="/account" element={<AccountPage user={user} reservations={reservations} setReservations={setReservations}/>} />
            <Route path="/createReview" element={<CreateReview courses={courses}/>} />
          </Routes>
          <Footer />
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
