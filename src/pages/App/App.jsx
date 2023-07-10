import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import SchedulerPage from '../SchedulerPage/SchedulerPage';
import CourseInfoPage from '../CourseInfoPage/CourseInfoPage';
import ReviewPage from '../ReviewPage/ReviewPage';
import AccountPage from '../AccountPage/AccountPage';

import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/courses" element={<CourseInfoPage />} />
              <Route path="/scheduler" element={<SchedulerPage />} />
              <Route path="/account" element={<AccountPage />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
