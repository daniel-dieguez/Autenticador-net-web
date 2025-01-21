import React from 'react'
import style from '../src/style/bg.module.css'
import Form from './components/Form'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ViewDarta from './components/ViewDarta';


export default function App() {
  return (
    <div className={style.background}>
      <Router> {/* <BrowserRouter> envuelve toda la app */}
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/viewDarta" element={<ViewDarta />} />
        </Routes>
      </Router>
    </div>
  )
}
