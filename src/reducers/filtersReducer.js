export const filtersInitialState = {
    sort: null,
    propType: '',
    condition: '',
    city: '',
    street: '',
    houseNumber: -1,
    floor: -1,
    floorsInBuilding: -1,
    onBars: false,
    neighborhood: '',
    area: '',
    rooms: -1,
    parking: -1,
    balcony: -1,
    airCondition: false,
    mamad: false,
    warehouse: false,
    pandor: false,
    furnished: false,
    accessible: false,
    elevator: false,
    tadiran: false,
    remaked: false,
    kasher: false,
    sunEnergy: false,
    bars: false,
    description: '',
    buildMr: -1,
    totalMr: -1,
    price: -1,
    entryDate: -1,
    immidiate: false,
    photos: [],
    video: -1,
    contactName: '',
    contactPhone: '',
    contactEmail: ''
};

const filtersReducer = (filters, action) => {
    switch (action.type) {
        case 'SET_SORT':
            return { ...filters, sort: action.sort };
        default:
            return { ...filters };
    }
};

export default filtersReducer;