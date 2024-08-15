import {useEffect, useState} from "react";
import {getPriceDetails} from "../services/companyServices/PricesService";

interface PriceDetails {
    perice_per_day: number,
    perice_per_km: number,
    booking_price: number,
    additional_price: number,
    min_days: number,
    max_days: number,
    box_type: string,
}

const Settings = () => {
    const [state, setState] = useState({
        loading: false,
        price_details: {
            perice_per_day: null,
            perice_per_km: null,
            booking_price: null,
            additional_price: null,
            min_days: null,
            max_days: null,
            box_type: null,
        },
        box_type: 'small',
    })

    useEffect(() => {
        const __init = async () => {
            const price_details = await getPriceDetails(state.box_type)
            setState({...state, price_details: price_details})
        }

        __init();
    }, [])


    return (
        <div className="content-header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title text-uppercase">Pricing details</h3>
                            </div>

                            <div className="form-horizontal">
                                <div className="card-body">
                                    <div className="form-group row">
                                        <label htmlFor="perice_per_day" className="col-sm-3 col-form-label">Price per day</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="perice_per_day"
                                                   placeholder="1.00" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="perice_per_km" className="col-sm-3 col-form-label">Price per km</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="perice_per_km"
                                                   placeholder="1.00" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="booking_price" className="col-sm-3 col-form-label">Booking price</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="booking_price"
                                                   placeholder="1.00" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="additional_price" className="col-sm-3 col-form-label">Additional price</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="additional_price"
                                                   placeholder="1.00" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="min_days" className="col-sm-3 col-form-label">Min days</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="min_days"
                                                   placeholder="1" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="max_days" className="col-sm-3 col-form-label">Max days</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="max_days"
                                                   placeholder="10" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="box_type" className="col-sm-3 col-form-label">Box type</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="box_type"
                                                   placeholder="small" />
                                        </div>
                                    </div>

                                </div>

                                <div className="card-footer">
                                    <button type="submit" className="btn btn-info" onClick={() => {}}>Save changes</button>
                                    <button type="submit" className="btn btn-default float-right">Cancel</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings;