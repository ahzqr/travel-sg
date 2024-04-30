# Travel SG Web

## Project Brief
**MVP - Minimum Viable Product** 
- Use 3rd party API and Airtable
- Use React framework to build your application with at least
    - 5 components
    - 4 props
    - 2 useStates
    - 2 react router routes
    - 1 lifting state, which is used to implement CRUD on the client side
- Be styled such that the app looks and feels similar to apps we use on a daily basis - in other words, it should have a consistent and polished user interface.
- Be deployed online (Vercel).
- Have at least 1 CUD (Creates, Updates, Delete) implementation using Airtable.

**Stretch Goals (Not Mandatory)**
- Use more than 1 API
- Use more than 1 model with Airtable
- Have suitable validations and/or fetch loading states
- Use a React component library like Ant Design or Material UI
- Use a CSS Framework from a list or a design system like Tailwind CSS

## Timeframe
2 weeks

<br>

## User Story
As a commuter in Singapore and a tourist to Singapore, I want to easily access transportation information such as bus arrival times, carpark availability, and MRT maps, so that I can plan my journeys efficiently and navigate the city with ease.

<br>

## Key Features
1. Bus Arrival Times: As a user, I want to be able to see real-time bus arrival times at my desired bus stops so that I can plan my journey accordingly. This feature will provide accurate and up-to-date information on when the next bus will arrive, helping me avoid long waits at the bus stop.
2. Carpark Availability: I want to know the availability of parking spaces at various locations across Singapore, including malls, attractions, and public carparks. This feature will help me plan my travel by car more effectively, ensuring that I can find parking easily and avoid unnecessary delays.
3. MRT Map: As a commuter, I want access to a clear and detailed MRT map of Singapore's public transportation system. This feature will help me visualize the MRT network, plan my routes, and understand the connections between different lines and stations.
4. Community Page: As a tourist, I would like to be able to access recent travelers' itinerary to help me plan my day.

<br>

## Deployment
The game is deployed on Vercel: https://travelsg.vercel.app/

<br>

## Ideation Sketch

![Wireframe](https://github.com/ahzqr/travel-sg/blob/6452ca799d40e4b514c2b7cf7511f45f8cc157a2/public/Wireframe.png)

<br>

## API

1. Bus Stop API: (https://data.busrouter.sg/v1/stops.min.json)
![Bus Stop](https://github.com/ahzqr/travel-sg/blob/a8d68ae84c383749b452ad7185c1386ae20e9400/public/Bus%20Stop%20API.png)

2. Bus Arrival API: (https://arrivelah2.busrouter.sg/?id={bus.id})
![Bus Arrival](https://github.com/ahzqr/travel-sg/blob/a8d68ae84c383749b452ad7185c1386ae20e9400/public/Bus%20Arrival%20API.png)

3. Carpark API: (https://api.data.gov.sg/v1/transport/carpark-availability)
![Carpark Availability](https://github.com/ahzqr/travel-sg/blob/a8d68ae84c383749b452ad7185c1386ae20e9400/public/Carpark%20Availability%20API.png)

<br>

## Approach to Development
Using the plan and pseudocodes, I broke down the project into stages:
- [x] **Step 1:** Search for relevant APIs
- [x] **Step 2:** Fetch & study APIs & use the necessary information needed
- [x] **Step 3:** Create the Transportation page: MRT, Bus, Carpark
- [x] **Step 4:** Finalise information needed from Airtable & Fetch API for Community Page
- [x] **Step 5:** Test POST from Community Page to Airtable
- [ ] **Step 6:** (Stretch Goal): Edit inputs POSTED
- [ ] **Step 7:** (Stretch Goal): Add in Favourite Itinerary

<br>

## Key Learnings
1. Important to study the APIs thoroughly to fetch the necessary information.

2. While overwhelmed, prioritising the critical components first is key to moving forward.

3. Create components to better organise your code to visualise it better.

<br>

## Breakdown & Analysis of the Codes
Below is a breakdown and analysis of some of the codes which I have categorised according to the concepts we have covered in class.

### Routing
Routing to the necessary pages.

![Routing](https://github.com/ahzqr/travel-sg/blob/6452ca799d40e4b514c2b7cf7511f45f8cc157a2/public/Routing.png)

### UseState
To update the state of the information that we are seeking.

![UseState](https://github.com/ahzqr/travel-sg/blob/6452ca799d40e4b514c2b7cf7511f45f8cc157a2/public/useState.png)

### Fetch & UseEffect
Fetching APIs to retrieve information.

![Fetch](https://github.com/ahzqr/travel-sg/blob/6452ca799d40e4b514c2b7cf7511f45f8cc157a2/public/Fetch%20API.png)

### Passing Props

![Fetching in Carpark & Defining Props](https://github.com/ahzqr/travel-sg/blob/6452ca799d40e4b514c2b7cf7511f45f8cc157a2/public/Define%20Prop.png)
![Passing Props to CarparkButtons](https://github.com/ahzqr/travel-sg/blob/6452ca799d40e4b514c2b7cf7511f45f8cc157a2/public/Pass%20Props.png)

### POST to Airtable

![Community POST](https://github.com/ahzqr/travel-sg/blob/6452ca799d40e4b514c2b7cf7511f45f8cc157a2/public/POST.png)

<br>

## Future Developments / Improvements
As this is created for a project submission, there might be no future iterations of this. However, if there were, these would be the future developments/improvements I would implement:

- Make the web more user-friendly
- Add in a like & favourite function to community itineraries
- Enable edit itinerary for user