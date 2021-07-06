import Axios from 'axios';

const developmentDB = process.env.REACT_APP_DB;

export const loginToDB = async (email, password) => {
    try {
        const res = await Axios.post(developmentDB + "/login", { email, password });
        return res;
    } catch (err) {
        return err.response.data.message;
    }
};

export const logoutFromDB = async (token) => {
    try {
        const res = await Axios.post(developmentDB + "/logout", { token }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return res.data
    } catch (err) {
        console.log(err);
    }
}
