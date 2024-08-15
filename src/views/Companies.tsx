import CompaniesList from "../components/adminComponents/companies/CompaniesList";

const Companies = () => {
    return (
        <div className="content-header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <CompaniesList />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Companies;