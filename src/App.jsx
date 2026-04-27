import React from 'react'
import Events from './component/Event Handling/OnClickEvents'
import OnchangeEvent from './component/Event Handling/OnchangeEvent'
import OnSubmitEvent from './component/Event Handling/OnSubmitEvent';
import Count from './component/Props/Count';
import Useeffect from './component/UseEffect/Useeffect';
import List from './component/list & keys/List';
import Liststate from './component/list & keys/Liststate';
import ConditionalStyling from './component/Conditional_Styling/ConditionalStyling';
import Error_Success from './component/Conditional_Styling/Error_Success';
import ActiveButton_ActiveTab from './component/Conditional_Styling/ActiveButton_ActiveTab';
import UserefComes from './component/Useref/UserefComes';
import UseRef from './component/Useref/UseRef'
import Apps from './component/Lifting_State_up/Apps';
import Task from './component/Lifting_State_up/mini_project/Task';
import PropTask from './component/Props_Drilling/PropTask';
import ContextAPI from './component/Context_API/ContextAPI';
import ApiData from './component/API Data Fetching in React/ApiData';
import LoadingTask from './component/Loading & Error States/LoadingTask'
import RoutingTask from './component/Router-Dom/RoutingTask';
import UseNavigationApp from './component/UseNavigation/UseNavigationApp';
import DynamicTask from './component/Dynamic_Route and Nested Route/DynamicTask';
import ProtectedApp from './component/React Protected Routes/ProtectedApp';
import LocalStorage from './component/LocalStorage/LocalStorage';
import ReactMemoApp from './component/React memo/ReactMemoApp';
import UseMemo from './component/Use Memo/UseMemo';

import './App.css'
const App = () => {
  return (
    <div  className='body'>
      {/* <div>
        <h3>OnClickEvent</h3>
        <Events/>
      </div>
      <div>
        <h3>OnchangeEvent</h3>
        <OnchangeEvent/>
      </div>
      <div>
        <h3>OnSubmitEvent</h3>
        <OnSubmitEvent/>
      </div>
      <div>
        <Count/>
      </div> 
      <div>
        <Useeffect/>
      </div> 
      <div>
        <List/>
      </div> 
      <div>
        <Liststate/>
      </div> */}
      {/* <div>
        <ConditionalStyling/>
      </div>
      <div>
        <Error_Success/>
      </div>
      <div>
        <ActiveButton_ActiveTab/>
      </div>
      <div>
        <UserefComes/>
      </div>
      <div>
        <UseRef/>
      </div>
      <div>
        <Apps/>
      </div>
      <div>
        <Task/>
      </div>
      <div>
        <PropTask/>
      </div>
      <div>
        <ContextAPI/>
      </div>
      <div>
        <ApiData/>
      </div> */}
      {/* <div>
        <LoadingTask/>
      </div> */}
      {/* <div>
        <RoutingTask/>
      </div> */}
      {/* <div>
        <DynamicTask/>
      </div> */}
      {/* <div>
        <UseNavigationApp/>
      </div> */}
      {/* <div>
        <ProtectedApp/>
      </div> */}
      {/* <div>
        <LocalStorage/>
      </div> */}
      {/* <div>
        <ReactMemoApp/>
      </div> */}
      <div>
        <UseMemo/>
      </div>
    </div>
  )
}

export default App