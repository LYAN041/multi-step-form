import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Step1 from "./components/step-1";
import Step2 from "./components/step-2";
import Step3 from "./components/step-3";
import Step4 from "./components/step-4";
import Step5 from "./components/step-5";

const Rotas = () => {
    return (
        <React.Fragment>

            <BrowserRouter>

            <Sidebar/>

            <Routes>
            <Route path='/' element={<Step1/>} />
            <Route path='/plan' element={<Step2/>} />
            <Route path='/add-ons' element={<Step3/>} />
            <Route path='/summary' element={<Step4/>} />
            <Route path='/thanks' element={<Step5/>} />
            </Routes>

            </BrowserRouter>

        </React.Fragment>

    )
}

export default Rotas