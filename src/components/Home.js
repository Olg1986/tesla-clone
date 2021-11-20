import React from 'react';
import styled from 'styled-components';
import Section from './Section';
// import {selectSection} from '../features/sec/sectionSlice';
// import {useSelector} from 'react-redux';

function Home() {
     // const sections = useSelector(selectSection);
     // console.log(sections);
    return (
        <Container>
             
           <Section
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="custom order"
                rightBtnText="existing inventory"
                />
           <Section
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="custom order"
                rightBtnText="existing inventory"
           />
           <Section
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="custom order"
                rightBtnText="existing inventory"
           />
           <Section
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="custom order"
                rightBtnText="existing inventory"
           />
           <Section
                title="Lowest Cost Solar Panels in America"
                description="Money-back guaranteee"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn more"
           />
           <Section
                title="Solar for New Roofs"
                description="Solar Roof Costs Less Than a New Roofs"
                backgroundImg="solar-roof.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn more"
           />
           <Section
                title="Accessories"
                description=""
                backgroundImg="accessories.jpg"
                leftBtnText="Shop now"
                
           />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`;
