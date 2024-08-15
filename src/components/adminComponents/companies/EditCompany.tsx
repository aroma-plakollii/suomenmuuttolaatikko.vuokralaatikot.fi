import {useEffect, useState} from "react";
import {getCompany} from "../../../services/adminServices/CompaniesService";
import {getUsers} from "../../../services/adminServices/UserService";
import {Link, useParams, useNavigate} from "react-router-dom";
import {saveDetails} from "../../../services/adminServices/CompaniesService";
import {Loader} from "../../../views/Loader";
import Autocomplete from "react-google-autocomplete";
import {GMAPKEY} from "../../../config";

const EditCompany = () => {
    const [state, setState] = useState({
        hasError: false,
        loading: true,
        company: {
            name: '',
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            business_number: '',
            private_key: '',
            secret_key: '',
            api_key: '',
            status: '',
        },
    });

    const [address, setAddress] = useState<string>('')
    let { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        const __init = async () => {
            const company = await getCompany(id);
            setState({...state, company, loading: false,})
            setAddress(company.address);
        }

        __init();

    }, []);

    const onInputChange = (key: string, val: any) => {
        const value = val.target ? val.target.value : '';

        console.log(state.company.name)
        setState({
            ...state, company: {
                ...state.company,
                [key]: value
            }
        })
    }

    const onAddressChange = (place: any) => {
        let city = "";
        place.address_components.forEach((addressComponent: any) => {
            if (addressComponent.types[0] === "locality") {
                city = addressComponent.long_name;
            }
        });

        console.log(place.formatted_address);
        setAddress(place.formatted_address);
    };

    const onSave = async (id: any) => {
        setState({...state, hasError: false, loading: true});

        if (
            !state.company.first_name ||
            !state.company.last_name ||
            !state.company.email ||
            !state.company.phone
        ){
            setState({
                ...state,
                hasError: true
            })

            return;
        }

        if (!state.hasError){
            const data = {
                first_name: state.company.first_name,
                last_name: state.company.last_name,
                name: state.company.name,
                email: state.company.email,
                phone: state.company.phone,
                address,
                business_number: state.company.business_number,
                private_key: state.company.private_key,
                api_key: state.company.api_key,
                status: state.company.status,
            }

            const res = await saveDetails(id, data);

            if (res) {
                setState({...state, loading: false});
                navigate('/companies');
            }
        }
    };

    if (state.loading) {
        return <>
            <div className="loader-container">
                <Loader color='#3642e8' width={50}/>
            </div>
        </>
    }

    return (
        <div className="content-header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title text-uppercase">Company Details</h3>
                            </div>

                            <div className="form-horizontal">
                                <div className="card-body">
                                    <div className="form-group row">
                                        <label htmlFor="first_name" className="col-sm-3 col-form-label">First name</label>
                                        <div className="col-sm-9">
                                            <input type="text" className={`form-control ${state.hasError && !state.company.first_name ? 'is-invalid' : ''}`} id="first_name"
                                                   placeholder="John" defaultValue={state.company.first_name} onChange={(val: any) => onInputChange('first_name', val)} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="last_name" className="col-sm-3 col-form-label">Last name</label>
                                        <div className="col-sm-9">
                                            <input type="text" className={`form-control ${state.hasError && !state.company.last_name ? 'is-invalid' : ''}`} id="last_name"
                                                   placeholder="Doe" defaultValue={state.company.last_name} onChange={(val: any) => onInputChange('last_name', val)} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="name" className="col-sm-3 col-form-label">Company Name</label>
                                        <div className="col-sm-9">
                                            <input type="text" className={`form-control ${state.hasError && !state.company.name ? 'is-invalid' : ''}`} id="name"
                                                   placeholder="John" onChange={(val: any) => onInputChange('name', val)} defaultValue={state.company.name} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="email" className="col-sm-3 col-form-label">E-mail</label>
                                        <div className="col-sm-9">
                                            <input type="email" className={`form-control ${state.hasError && !state.company.email ? 'is-invalid' : ''}`} id="email"
                                                   placeholder="john.doe@email.com" defaultValue={state.company.email} onChange={(val: any) => onInputChange('email', val)} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="phone" className="col-sm-3 col-form-label">Phone</label>
                                        <div className="col-sm-9">
                                            <input type="text" className={`form-control ${state.hasError && !state.company.phone ? 'is-invalid' : ''}`} id="phone"
                                                   placeholder="045000000" defaultValue={state.company.phone} onChange={(val: any) => onInputChange('phone', val)} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="address" className="col-sm-3 col-form-label">Address</label>
                                        <div className="col-sm-9">
                                            <Autocomplete
                                                apiKey={GMAPKEY}
                                                onPlaceSelected={onAddressChange}
                                                options={{
                                                    types: ["address"],
                                                    componentRestrictions: {country: "fi"},
                                                }}
                                                defaultValue={address}
                                                id="address"
                                                placeholder="Esimerkikatu 1, Helsinki"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="business_number" className="col-sm-3 col-form-label">Business
                                            number</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="business_number"
                                                   placeholder="100000000" defaultValue={state.company.business_number}
                                                   onChange={(val: any) => onInputChange('business_number', val)}/>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="private_key" className="col-sm-3 col-form-label">Private key</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="private_key"
                                                   placeholder="Private key" defaultValue={state.company.private_key} onChange={(val: any) => onInputChange('private_key', val)} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="api_key" className="col-sm-3 col-form-label">API key</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="api_key"
                                                   placeholder="Api key" defaultValue={state.company.api_key} onChange={(val: any) => onInputChange('api_key', val)} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="secrete_key" className="col-sm-3 col-form-label">Secrete key</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="secrete_key" disabled={true}
                                                   placeholder="Secret key" defaultValue={state.company.secret_key} onChange={(val: any) => onInputChange('secret_key', val)} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="status" className="col-sm-3 col-form-label">Status</label>
                                        <div className="col-sm-9">
                                            <select className={`form-control`} name="status" id="status"
                                                    value={state.company.status}
                                                    onChange={(val: any) => onInputChange('status', val)} >
                                                <option selected={true}>-- Select Status --</option>
                                                <option value={'1'}>ACTIVE</option>
                                                <option value={'0'}>INACTIVE</option>
                                            </select>
                                        </div>
                                    </div>

                                </div>

                                <div className="card-footer">
                                    <button type="submit" className="btn btn-info" onClick={() => onSave(id)}>
                                        {state.loading ? 'Saving...' : 'Save changes'}
                                    </button>
                                    <Link to={'/companies'} className="btn btn-default float-right">Cancel</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default EditCompany;