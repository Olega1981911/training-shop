import React from 'react';
import {Route} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/header/Header";
import "./style/base.scss"
import MainPage from "./components/main-blocks/MainPage";
import Women from "./pages/Women";
import Men from "./pages/Men";
import {ReactNode} from "react";

function Routes(props: { children: ReactNode }) {
    return <MainPage />;
}

const App = () => {
    return (
            <div className="wrapper app" data-test-id='app'>
                <Header />
                <Routes >
                    <Route index element = {<MainPage />} />
                    <Route path='/' element={<MainPage />} />
                    <Route path='women' element={<Women />} />
                    <Route path='men' element={<Men />} />
                </Routes>
                <AppRouter />
            </div>
    );
};


export default App;