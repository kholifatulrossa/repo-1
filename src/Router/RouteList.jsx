import { createBrowserRouter } from 'react-router-dom';
import Login from '../Pages/Login';
import { Perizinan } from '../Pages/Perizinan';
import DashboardPage from '../Pages/Dashboard2';
import MainDash from '../Components/admin/MainDashboard';
import Izin from '../Components/admin/Izin';
import { DataKelas } from '../Components/admin/DataKelas';
import { DashboardUsers } from '../Components/users/Dashboard';
import CustomTable from '../Pages/TryTable';

const routes = createBrowserRouter ([
    {
        path: '/',
        element: <Login/>,
    },
    // {
    //     path: '/admin',
    //     element: <DashboardPage/>,
    // },
    
    // {
    //     path: '/admin/dashboard', element: <MainDash/>
    // },
    // {
    //     path: '/admin/perizinan',
    //     element: <Izin/>
    // },
    // {
    //     path: '/admin/dataKelas',
    //     element: <DataKelas/>
    // },
    // {
    //     path: 'dashboard',
    //     element: <DashboardUsers/>
    // },
    // {
    //     path: 'tryTable',
    //     element: <CustomTable/>
    // }
    {
        path: '/admin',
        element: <DashboardPage/>,
        children: [
            {path: '/admin/dashboard', element: <MainDash/>},
            {path: '/admin/perizinan', element: <Izin/>},
            {path: '/admin/dataKelas', element: <DataKelas/>},
        ]
    }
]);

export default routes
