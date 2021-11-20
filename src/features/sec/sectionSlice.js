import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    sec: [
        {
            id: 1,
            title: "Model S",
            desc: "Order Online for Touchless Delivery",
            bgImg: "model-s.jpg",
            leftBtnText: "custom order",
            rightBtnText: "existing inventory"
        },
        {
            id: 2,
            title:"Model Y",
            desc: "Order Online for Touchless Delivery",
            bgImg: "model-y.jpg",
            leftBtnText:"custom order",
            rightBtnText: "existing inventory"
        },
        {
            id: 3,
            title: "Model 3",
            desc: "Order Online for Touchless Delivery",
            bgImg: "model-3.jpg",
            leftBtnText: "custom order",
            rightBtnText: "existing inventory"
        },
        {
            id: 4,
            title: "Model X",
            desc: "Order Online for Touchless Delivery",
            bgImg: "model-x.jpg",
            leftBtnText: "custom order",
            rightBtnText: "existing inventory"
        },
        {
            id: 5,
            title: "Lowest Cost Solar Panels in America",
            desc: "Money-back guaranteee",
            bgImg: "solar-panel.jpg",
            leftBtnText: "Order now",
            rightBtnText: "Learn more"
        },
        {
            id: 6,
            title: "Solar for New Roofs",
            desc: "Solar Roof Costs Less Than a New Roofs",
            bgImg: "solar-roof.jpg",
            leftBtnText: "Order now",
            rightBtnText: "Learn more"
        },
        {
            id: 7,
            title: "Accessories",
            desc: "",
            bgImg: "accessories.jpg",
            leftBtnText: "Shop now"
        }
    ]
}

const sectionSlice = createSlice({
    name: "sectionCar",
    initialState,
    reducers: {}

})

export const selectSection = state => state.sectionCar.sec

export default sectionSlice.reducer