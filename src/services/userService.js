import Axios from 'axios';
import citiesStreets from "../components/main/search/dropdowns/streetsGraph"
import cities from "../components/main/search/dropdowns/citiesArray"

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
        const res = await Axios.post(developmentDB + "/user/logout-user", { token }, {
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
        const res = await Axios.patch(developmentDB + "/user/update-user", { token, newUser }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return res.data
    } catch (err) {
        console.log(err);
    }
}


export const getCitiesResults = (searchValue) => {
    const citiesFiltered = cities.filter((city) => city.includes(searchValue))
    return citiesFiltered;
}

export const getStreetsOfCity = (city, searchValue) => {
    const streets = [];
    for (let i = 0; i < Object.keys(citiesStreets).length; i++) {
        if (Object.keys(citiesStreets)[i].includes(city)) {
            console.log(Object.values(citiesStreets)[i])
            for (let street of Object.values(citiesStreets)[i]) {
                if (street.includes(searchValue))
                    streets.push(street)
            }
        }
    }
    console.log(streets)
    return streets;
}