import { createBrowserRouter } from 'react-router-dom';
import Login from '../Auth/Login/Login';
import Register from '../Auth/Register/Register';
import Layer from '../Layout/Layer'
import Checkout from '../Pages/course/Checkout';
import Course from '../Pages/course/Course';
import CourseDetails from '../Pages/course/CourseDetails';
import ErrorPage from '../Pages/Errorpage/ErrorPage'
import Home from '../Pages/Home/Home';
const router = createBrowserRouter([
    {
        path: '/', element: <Layer></Layer>, errorElement: <ErrorPage></ErrorPage>, children: [
            { path: '/', element: <Home></Home> },
            { path: '/home', element: <Home></Home> },
            {
                path: '/courses', loader: () => {
                    return fetch('http://localhost:5000/allcourse')
                }, element: <Course></Course>
            },
            {
                path: '/course/:id', loader: ({ params }) => {
                    return fetch(`http://localhost:5000/course/${params.id}`)
                }, element: <CourseDetails></CourseDetails>,
            },
            {
                path: '/checkout/:id', loader: ({ params }) => {
                    return fetch(`http://localhost:5000/course/${params.id}`)
                }, element: <Checkout></Checkout>
            },
            { path: '/login', element: <Login></Login> },
            { path: '/sign', element: <Register></Register> }
        ]
    }
])
export default router;