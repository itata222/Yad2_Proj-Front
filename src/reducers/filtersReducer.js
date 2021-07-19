export const filtersInitialState = {
    sort: null,
};

const filtersReducer = (filters, action) => {
    switch (action.type) {
        case 'SET_SORT':
            return { ...filters, sort: action.sort };
        case 'SET_WITH_PRICE':
            return { ...filters, fromPrice: action.fromPrice };
        default:
            return { ...filters };
    }
};

export default filtersReducer;