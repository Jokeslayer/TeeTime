import './AccountPage.css';
import { Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import ReservationList from '../../components/ReservationList/ReservationList';
;

export default function AccountPage() {
    return (
        <div>
            <h1>AccountPage</h1>
            
            <ReservationList />

        </div>
    );
}