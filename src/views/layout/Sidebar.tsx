import {role} from "../../services/AuthenticationService";
import {AdminNavLinks} from "./AdminNavLinks";
import {CompanyNavLinks} from "./CompanyNavLinks";

const Sidebar = () => {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <a href="javascript:void(0)" className="brand-link text-center">
                {role === 'admin' && <span className="brand-text font-weight-light">Moving Boxes</span>}
                {role === 'company' && <span className="brand-text font-weight-light">Suomenmuuttolaatikko</span>}
            </a>

            <div className="sidebar">
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column p-2" data-widget="treeview" role="menu"
                        data-accordion="false">
                        {role === 'admin' && <AdminNavLinks />}
                        {role === "company" && <CompanyNavLinks />}
                    </ul>
                </nav>
            </div>
        </aside>
    )
}

export default Sidebar;