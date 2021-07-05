import Axios from 'axios';

const developmentDB = process.env.REACT_APP_DB;

export const adminloginToDB = async (email, password) => {
    try {
        const res = await Axios.post(developmentDB + "/admin/login", { email, password });
        return res;
    } catch (err) {
        return err.response.data.message;
    }
};

export const adminlogoutFromDB = async (token) => {
    try {
        const res = await Axios.post(developmentDB + "/admin/logout", { token }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return res.data
    } catch (err) {
        console.log(err);
    }
}
