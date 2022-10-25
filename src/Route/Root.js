import { createBrowserRouter } from 'react-router-dom';
import Login from '../Auth/Login/Login';
import Register from '../Auth/Register/Register';
import Layer from '../Layout/Layer'
import Course from '../Pages/course/Course';
import ErrorPage from '../Pages/Errorpage/ErrorPage'
import Home from '../Pages/Home/Home';
const router = createBrowserRouter([
    {
        path: '/', element: <Layer></Layer>, errorElement: <ErrorPage></ErrorPage>, children: [
            { path: '/', element: <Home></Home> },
            { path: '/home', element: <Home></Home> },
            {
                path: '/course', loader: () => {
                    return fetch('http://localhost:5000/allcourse')
                }, element: <Course></Course>
            },
            { path: '/login', element: <Login></Login> },
            { path: '/sign', element: <Register></Register> }
        ]
    }
])
export default router;