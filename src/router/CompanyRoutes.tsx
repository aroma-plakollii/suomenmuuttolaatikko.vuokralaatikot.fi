import DayList from "../components/companyComponents/bookings/DayList";
import React from "react";
import MonthList from "../components/companyComponents/bookings/MonthList";
import BlockedDatesList from "../components/companyComponents/BlockedDates/BlockedDatesList";
import EditBlockedDates from "../components/companyComponents/BlockedDates/EditBlockedDates";
import CreateBlockedDates from "../components/companyComponents/BlockedDates/CreateBlockedDates";
import EditBooking from "../components/companyComponents/bookings/EditBooking";
import CreateBooking from "../components/companyComponents/bookings/CreateBooking";
import CompaniesList from "../components/companyComponents/companies/CompaniesList";
import EditCompany from "../components/companyComponents/companies/EditCompany";
import PricesList from "../components/companyComponents/price/PricesList";
import EditPrice from "../components/companyComponents/price/EditPrice";
import CreatePrice from "../components/companyComponents/price/CreatePrice";
import CitiesList from "../components/companyComponents/cities/CitiesList";
import EditCity from "../components/companyComponents/cities/EditCity";
import CreateCity from "../components/companyComponents/cities/CreateCity";

export const CompanyRoutes = [
    // Companies
    { path:"/companies",  element: <CompaniesList />},
    { path:"/companies/:id", element: <EditCompany />},

    // Bookings
    { path: "/day", element: <DayList /> },
    { path: "/month", element: <MonthList /> },
    { path: "/bookings/:id", element: <EditBooking /> },
    { path: "/bookings/create", element: <CreateBooking /> },

    // Blocked Dates
    { path: "/blocked-dates", element: <BlockedDatesList /> },
    { path: "/blocked-dates/:id", element: <EditBlockedDates /> },
    { path: "/blocked-dates/create", element: <CreateBlockedDates /> },

    // Prices
    { path:"/prices",  element:<PricesList /> },
    { path:"/prices/:id",  element:<EditPrice /> },
    { path:"/prices/create",  element:<CreatePrice /> },

    // Free Cities
    { path:"/cities",  element: <CitiesList /> },
    { path:"/cities/:id",  element: <EditCity /> },
    { path:"/cities/create",  element: <CreateCity /> },
];