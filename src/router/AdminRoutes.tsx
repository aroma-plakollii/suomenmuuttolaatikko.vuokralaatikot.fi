import DayList from "../components/adminComponents/bookings/DayList";
import MonthList from "../components/adminComponents/bookings/MonthList";
import EditBooking from "../components/adminComponents/bookings/EditBooking";
import CreateBooking from "../components/adminComponents/bookings/CreateBooking";
import CompaniesList from "../components/adminComponents/companies/CompaniesList";
import EditCompany from "../components/adminComponents/companies/EditCompany";
import CreateCompany from "../components/adminComponents/companies/CreateCompany";
import PricesList from "../components/adminComponents/price/PricesList";
import EditPrice from "../components/adminComponents/price/EditPrice";
import CreatePrice from "../components/adminComponents/price/CreatePrice";
import CitiesList from "../components/adminComponents/cities/CitiesList";
import EditCity from "../components/adminComponents/cities/EditCity";
import CreateCity from "../components/adminComponents/cities/CreateCity";
import BlockedDatesList from "../components/adminComponents/BlockedDates/BlockedDatesList";
import EditBlockedDates from "../components/adminComponents/BlockedDates/EditBlockedDates";
import CreateBlockedDates from "../components/adminComponents/BlockedDates/CreateBlockedDates";
import UsersList from "../components/adminComponents/users/UsersList";
import EditUser from "../components/adminComponents/users/EditUser";
import CreateUser from "../components/adminComponents/users/CreateUser";

export const AdminRoutes = [
    // Bookings
    { path:"/day", element: <DayList />},
    { path:"/month" , element: <MonthList />},
    { path:"/bookings/:id", element:<EditBooking />},
    { path:"/bookings/create", element:<CreateBooking />},

    // Companies
    { path:"/companies",  element: <CompaniesList />},
    { path:"/companies/:id", element: <EditCompany />},
    { path:"/companies/create", element: <CreateCompany /> },

    // // Prices
    // { path:"/prices",  element:<PricesList /> },
    // { path:"/prices/:id",  element:<EditPrice /> },
    // { path:"/prices/create",  element:<CreatePrice /> },
    //
    // // Free Cities
    // { path:"/cities",  element: <CitiesList /> },
    // { path:"/cities/:id",  element: <EditCity /> },
    // { path:"/cities/create",  element: <CreateCity /> },
    //
    // // Blocked Dates
    // { path:"/blocked-dates", element:<BlockedDatesList /> },
    // { path:"/blocked-dates/:id", element:<EditBlockedDates /> },
    // { path:"/blocked-dates/create", element:<CreateBlockedDates /> },

    // Users
    { path: "/users", element: <UsersList /> },
    { path: "/users/:id", element: <EditUser /> },
    { path: "/users/create", element: <CreateUser /> },
];