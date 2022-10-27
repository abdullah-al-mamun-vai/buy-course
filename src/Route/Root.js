import { createBrowserRouter } from 'react-router-dom';
import Login from '../Auth/Login/Login';
import Register from '../Auth/Register/Register';
import Layer from '../Layout/Layer'
import Blog from '../Pages/Blog/Blog';
import Checkout from '../Pages/course/Checkout';
import Course from '../Pages/course/Course';
import CourseDetails from '../Pages/course/CourseDetails';
import ErrorPage from '../Pages/Errorpage/ErrorPage'
import FAQ from '../Pages/FAQ/FAQ';
import Home from '../Pages/Home/Home';
import LockRoute from './LockRoute';
const router = createBrowserRouter([
    {
        path: '/', element: <Layer></Layer>, errorElement: <ErrorPage></ErrorPage>, children: [
            { path: '/', element: <Home></Home> },
            { path: '/home', element: <Home></Home> },
            {
                path: '/courses', loader: () => {
                    return fetch('https://courses-server.vercel.app/allcourse')
                }, element: <Course></Course>
            },
            {
                path: '/course/:id', loader: ({ params }) => {
                    return fetch(`https://courses-server.vercel.app/course/${params.id}`)
                }, element: <LockRoute><CourseDetails></CourseDetails></LockRoute>,
            },
            {
                path: 'courses/course/:id', loader: ({ params }) => {
                    return fetch(`https://courses-server.vercel.app/course/${params.id}`)
                }, element: <LockRoute><CourseDetails></CourseDetails></LockRoute>,
            },
            {
                path: '/checkout/:id', loader: ({ params }) => {
                    return fetch(`https://courses-server.vercel.app/course/${params.id}`)
                }, element: <Checkout></Checkout>
            },
            { path: '/blog', element: <Blog></Blog> },
            { path: '/faq', element: <FAQ></FAQ> },
            { path: '/login', element: <Login></Login> },
            { path: '/sign', element: <Register></Register> }
        ]
    }
])
export default router;