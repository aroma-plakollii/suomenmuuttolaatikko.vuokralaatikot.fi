export const API = "http://127.0.0.1:8000/api";

export const GMAPKEY = "AIzaSyCzcvmKLAUO3TdD78Pc8Z0sYpJmntfnLc0";

export const HEADERS = {
    'Content-Type': 'application/json',
    // 'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    'Authorization': `Bearer ${localStorage.getItem('token')}`
}

export const getCompanyId = () => {
    let company: any = localStorage.getItem("company");

    return company;
}
