import Intro from './modules/Module1_Intro/Intro'
import JSXExample from './modules/Module2_JSX/JSXExample'
import Greeting from './modules/Module3_Components/Greeting'
import WelcomeMessage from './modules/Module3_Components/WelcomeMessage'
import UserCard from './modules/Module4_PropsState/UserCard'
import Counter from './modules/Module4_PropsState/Counter'
import ClickEvent from './modules/Module5_Events/ClickEvent'
import InputEvent from './modules/Module5_Events/InputEvent'
import FruitList from './modules/Module7_Lists/FruitList'
import UserList from './modules/Module7_Lists/UserList'
import FormData from './modules/Module8_Forms/FormData'
import FormValidation from './modules/Module8_Forms/FormValidation'
import FetchUsers from './modules/Module9_lifecycle methods/FetchUsers'
import LifecycleDemo from './modules/Module9_lifecycle methods/LifecycleDemo'

function App() {
  return (
    <div>

      {/*Intorduction */}
      <Intro />
      {/*Example  */}
      <JSXExample />
      
      {/*Component */}
      <Greeting name="Anshu" />
      <WelcomeMessage />

      {/*PropsState */}
      <UserCard 
        name="Anshu Patel" 
        age="21" 
        location="Gandhinagar" 
      />
      <Counter />

      {/* Event Handling  */}
      <ClickEvent />
      <InputEvent />

      {/* Lists */}
      <FruitList />
      <UserList />

      {/* Forms */}
      <FormData />
      <FormValidation /> 

      {/* LIfe cycle methods */}
      <FetchUsers />
      <LifecycleDemo />
    </div>
  )
}

export default App
