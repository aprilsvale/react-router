import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './Layout';
import About from './pages/About';
import Feedback from './pages/Feedback';
import Feed from './pages/Feed';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Feed />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/feedback',
                element: <Feedback />,
            }
        ]
    }
]);

export default function App() {
    return <RouterProvider router={router} />;
}
