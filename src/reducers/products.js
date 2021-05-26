let initialState = [
    // {
    //     id: 1,
    //     name:'Iphone 11',
    //     price: 2400,
    //     status: true
    // },
    // {
    //     id: 1,
    //     name:'Iphone 12',
    //     price: 900,
    //     status: false
    // },
    // {
    //     id: 1,
    //     name:'Iphone XS MAX',
    //     price: 1400,
    //     status: true
    // }
];
const products = (state = initialState, action) => {
    switch (action.type) {
        default:
            return [...state];
    }
}

export default products