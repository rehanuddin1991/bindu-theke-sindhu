import React from 'react'
import * as ReactDOM from "react-dom/client";

import { createBrowserRouter,
  RouterProvider } from "react-router-dom";
import { ROUTES } from "./routes";
import MainLayout from '../layout/MainLayout';
import HomePage from '../pages/HomePage';
import Course from '../pages/Course';
import FAQ from '../components/FAQ';
import CourseDetailsPage from '../pages/CourseDetailsPage';
import LoginPage from '../pages/LoginPage';
import NoPageFound from '../../NoPageFound';  
import RegisterPage from '../pages/RegisterPage';
 

    const router = createBrowserRouter([
        {
          path:"/",
          element:  <MainLayout/>  ,

          children: [
            {
              path: `${ROUTES.HOME}`,
              element: <HomePage />,
            },
            {
              path: "*",
              element: <NoPageFound />,
            },
            {
              path: `${ROUTES.COURSE}`,
              element: <Course />,
            }
      
            ,
            {
              path: `${ROUTES.LOGIN}`,
              element: <LoginPage />,
            }
      
            ,
            {
              path: `${ROUTES.REGISTER}`,
              element: <RegisterPage />,
            }
      
            ,
            
            {
              path: `${ROUTES.FAQ}`,
              element: <FAQ />,
            }
            
            ,
            
            {
              path: "/course/:courseId",
              element: <CourseDetailsPage />,
            },
          ],
         
        },
      ]);

      
   
  
 

export default router