import {useEffect, useState} from "react";
import {getCompanyId} from "../../../config";
import moment from "moment";
import {getBookingsByDate} from "../../../services/adminServices/BookingService";
import BookingList from "../shared/BookingList";
import DatePicker from "react-datepicker";
import {getCompanies} from "../../../services/adminServices/CompaniesService";
import {Company} from "../../../interfaces/adminInterfaces/ICompany";
import {Loader} from "../../../views/Loader";

const DayList = () => {

    const id = getCompanyId();

    const [state, setState] = useState({
        date: moment().format('yyyy-MM-DD'),
        company_id: id,
        loading: true,
        bookings: [],
        companies: [] as Company[],
    });

    useEffect(()=> {
        const __init = async () => {
        const data = {
            company_id: state.company_id,
            date: state.date
        }
        const bookings = await getBookingsByDate(data);
        const companies = await getCompanies();

        setState({...state, bookings, companies, loading: false})
    }
        __init()
    },[state.date, state.company_id]);

    const onDateChange = async (val: any) => {
        setState({
            ...state,
            date: moment(val).format('yyyy-MM-DD')
        });
    };

    const onSelectChange = (key: string, val: any) => {
        const value = val.target ? val.target.value : '';

        setState({
                ...state,
                [key]: value
            }
        );
    };

    const renderCompanies = () => {
        return(
            state.companies.map(company => (
                <option value={company.id} key={company.id}>{company.name}</option>
            ))
        )
    }

    if (state.loading) {
        return <>
            <div className="loader-container">
                <Loader color='#3642e8' width={50}/>
            </div>
        </>
    }

    return (
        <>
            <div className={'container-fluid'}>
                <div className={'row'}>
                    <div className={'col-md-12'}>
                        <div className={'d-flex align-items-center p-2'}>
                            <span className="card-title m-3">Day List</span>

                            <span>
                                <DatePicker
                                    className={'form-control'}
                                    onChange={onDateChange}
                                    onSelect={onDateChange}
                                    selected={new Date(state.date)}
                                    dateFormat={'dd.MM.yyyy'}
                                />
                            </span>

                            <span className={'d-flex align-items-center'}>
                                <span className={'mx-3 card-title'}>Company</span>
                                <select
                                    name="type"
                                    id="type"
                                    className={`form-control`}
                                    onChange={(val: any) => onSelectChange('company_id', val)}
                                    value={state.company_id}
                                >
                                    {renderCompanies()}
                                </select>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <BookingList bookings={state.bookings} />
        </>
    );
}

export default DayList;