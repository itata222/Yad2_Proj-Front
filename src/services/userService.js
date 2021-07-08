import Axios from 'axios';

const developmentDB = process.env.REACT_APP_DB;

export const loginToDB = async (email, password) => {
    try {
        const res = await Axios.post(developmentDB + "/login-user", { email, password });
        return res;
    } catch (err) {
        return err.response.data.message;
    }
};
export const registerToDB = async (email, password) => {

    try {
        const res = await Axios.post(developmentDB + "/create-user", { email, password });
        return res;
    } catch (err) {
        return err.response.data.message;
    }
};

export const logoutFromDB = async (token) => {
    try {
        const res = await Axios.post(developmentDB + "/logout-user", { token }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return res.data
    } catch (err) {
        console.log(err);
    }
}
export const updateUserInfoDB = async (token, newUser) => {
    try {
        const res = await Axios.patch(developmentDB + "/update-user", { token, newUser }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return res.data
    } catch (err) {
        console.log(err);
    }
}
