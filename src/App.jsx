import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import React from "react";
import { Counter } from "./features/counter/Counter";
import Home from "./pages/Home";
import "./App.css";
import Signup from './features/auth/components/Signup';
import Login from './features/auth/components/Login';
import { Slideshow } from './features/slideshow/Slideshow';
import Page404 from './features/errorpage/Page404';
import AboutUs from './features/about/AboutUs';
import { ClientDashboard } from './pages/ClientDashboard';
import { SearchLawyerPage } from './pages/SearchLawyerPage';
import { PetitionFilingPage } from './pages/PetitionFilingPage';
import { Protected } from './features/auth/components/Protected';
import { DocumentSubmissionPage } from './pages/DocumentSubmissionPage';
import { MtsHomePage } from './pages/MtsHomePage';
import { ProtectedMTS } from './features/auth/components/ProtectedMTS';
import { LawyerHomePage } from './pages/lawyer/LawyerHomePage';
import { ProtectedLawyer } from './features/auth/components/ProtectedLawyer';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Page404 />
  },
  {
    path: "/counter",
    element: <Counter></Counter>
  },
  {
    path: "/signup",
    element: <Signup></Signup>
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/about",
    element: <AboutUs></AboutUs>
  },
  {
    path: "/clientdashboard",
    element:
      <Protected>
        <ClientDashboard></ClientDashboard>
      </Protected>
  },
  {
    path: "/searchlawyer",
    element: <Protected>
      <SearchLawyerPage></SearchLawyerPage>
    </Protected>
  },
  {
    path: "/petitionfiling",
    element: <Protected>
      <PetitionFilingPage></PetitionFilingPage>
    </Protected>
  },
  {
    path: "/submit-document",
    element: <Protected>
      <DocumentSubmissionPage></DocumentSubmissionPage>
    </Protected>
  },
  {
    path: "/mts/home",
    element:
      <ProtectedMTS>
        <MtsHomePage></MtsHomePage>
      </ProtectedMTS>
  }
  ,
  {
    path: "/lawyer/home",
    element:
      <ProtectedLawyer>
        <LawyerHomePage></LawyerHomePage>
      </ProtectedLawyer>
  }
])


function App() {
  return (
    <div className="App">
      {/* This is for React router, Expect this line clear all line inside of App class */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
