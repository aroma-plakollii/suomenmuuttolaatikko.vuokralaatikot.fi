import {useEffect, useState} from "react";
import {getCompanies, getCompany} from "../../../services/adminServices/CompaniesService";
import {Link} from "react-router-dom";
import {deletePrice, getPrices} from "../../../services/adminServices/PricesService";
import {Company} from "../../../interfaces/adminInterfaces/ICompany";

const PricesList = () => {
    const [state, setState] = useState({
        prices: [],
        companies: [] as Company[],
        loading: false,
        isDeleted: false,
    });

    const __init = async () => {
        const prices = await getPrices();
        const companies = await getCompanies();
        setState({...state, prices, companies})
    }

    const onDelete = async (id: number) => {
        const isDeleted = await deletePrice(id);

        if (isDeleted){
            setState({...state, isDeleted: true});
        }
    };

    useEffect(()=> {
        __init()
    },[state.isDeleted]);

    const renderPrices = () => {
        return (
            state.prices.map((price: any) =>{

                const company = state.companies.find((company) => company.id === price.company_id);
                const companyName = company ? company.name : '';

                return (
                    <tr key={price.id}>
                        <td>{companyName}</td>
                        <td>{price.price_per_km}</td>
                        <td>{price.price_per_day}</td>
                        <td>{price.price_per_package}</td>
                        <td>{price.booking_price}</td>
                        <td>{price.additional_price}</td>
                        <td>{price.additional_package_price}</td>
                        <td>{price.package_days}</td>
                        <td>{price.included_km}</td>
                        <td>{price.min_boxes}</td>
                        <td>{price.type}</td>
                        <td>
                            <div className="btn-group btn-group-sm">
                                <Link to={`/prices/${price.id}`} className="btn btn-warning"><i className="fas fa-edit"></i></Link>
                                <a href="javascript:void(0)" className="btn btn-danger" onClick={() => onDelete(price.id)}><i className="fas fa-trash"></i></a>
                            </div>
                        </td>
                    </tr>
                )
            })
        );
    }

    return (
        <div className="content-header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title text-uppercase">Prices list</h3>
                            </div>

                            <div className="card-body table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                    <tr>
                                        <th>Company</th>
                                        <th>Price per Km</th>
                                        <th>Price per Day</th>
                                        <th>Price per Package</th>
                                        <th>Booking Price</th>
                                        <th>Additional Price</th>
                                        <th>Additional Package Price</th>
                                        <th>Package Days</th>
                                        <th>Included Km</th>
                                        <th>Min Boxes</th>
                                        <th>Box type</th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {renderPrices()}
                                    </tbody>
                                </table>
                            </div>

                            <div className="card-footer">
                                <Link to={'/prices/create'} className="btn btn-info">
                                    Create new
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PricesList;