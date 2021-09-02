import logo from './logo.svg';
import './App.css';
import {Greet} from './Components/Greet';
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';
import Message from './Components/Message';
import Counter from './Components/Counter';
 import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import SchoolComponent from './Components/SchoolComponent';
import UserGreeting from './Components/UserGreeting';
import NameList from './Components/NameList';
import Stylesheet from './Components/Stylesheet';
import Inline from './Components/Inline';
// import './appStyles.css'
// import styles from './appStyles.module.css'
import Form from './Components/Form';
import myForm from './Components/myForm';
import Form1 from './Components/Form1';
import FormWithRef from './Components/FormWithRef';
import SimpleForm from './Components/SimpleForm';
import LifeCycleHome from './Components/LifeCycleHome';
import FragmentDemo from './Components/FragmentDemo';
import Table from './Components/Table';
import PureCompo from './Components/PureCompo';
import ParentComp from './Components/ParentComp';
import RefDemo from './Components/RefDemo';
import FocusInput from './Components/FocusInput';
import PortalDemo from './Components/PortalDemo';
import Hero from './Components/Hero';
import ErrorHandling from './Components/ErrorHandling';
import ClickCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter';
import ClickCounter2 from './Components/ClickCounter2';
import HoverCounter2 from './Components/HoverCounter2';
import User from './Components/User';
import CounterNew from './Components/CounterNew';
import ComponentF from './Components/ComponentF';
import { UserProvider } from './Components/UserContext';
import ComponentC from './Components/ComponentC'
import ComponentE from './Components/ComponentE';


//import MyComponent from './Components/Greet';//We may change component name from Greet to MyComponent
function App() {
  return (
    <div className="App">
      {/* <ComponentC/> */}
      <UserProvider value="Vishwash">
        <ComponentC/>
      </UserProvider>
      {/* <CounterNew
      render =
      {(count,incrementCount) =>(<ClickCounter2 count={count} incrementCount={incrementCount}/>
      )}
      />
      <CounterNew
      render=
      {(count,incrementCount) =>(
        <HoverCounter2 count={count} incrementCount={incrementCount}/>
      )}
      /> */}
      {/* <ClickCounter2/>
      <HoverCounter2/> */}
      {/* <User name="Vishwash"/> */}
      {/* <User name ={() =>'Vishwash'} /> */}
      {/* <User name={(isLoggedIn)=> isLoggedIn ? 'Vishwash': 'Guest'}/> */}
      {/* <ClickCounter name="Vishwash"/>
      <HoverCounter/> */}
      {/* <ClickCounter/> */}
      {/* <ErrorHandling>
      <Hero heroName="Batman"/>
      </ErrorHandling>
      <ErrorHandling>
      <Hero heroName="Superman"/>
      </ErrorHandling>
      <ErrorHandling>
      <Hero heroName="Joker"/>
      </ErrorHandling> */}
      
      {/* <PortalDemo/> */}
      {/* <FocusInput/> */}
      {/* <RefDemo/> */}
      {/* <ParentComp/> */}
      {/* <SimpleForm/> */}
      {/* <Table/> */}
      {/* <FragmentDemo/> */}
      {/* <LifeCycleHome name="I am root element"/> */}
      {/* <FormWithRef/> */}
      {/* <Form1/> */}
      {/* <myForm/> */}
      {/* <Form/> */}
    {/* <h1 className='error'>Error</h1>
    <h1 className={styles.success}>Success</h1> */}
      {/* <Inline/> */}
      {/* <Stylesheet primary ={true}/> */}
      {/* <NameList/> */}
      {/* <UserGreeting/> */}
      {/* <SchoolComponent/> */}
      {/* <ParentComponent/> */}
      {/* <FunctionClick/> */}
      {/* <ClassClick/> */}
      {/* <EventBind/> */}
      {/* <Message/> */}
      {/* <Counter/> */}
      {/* <Greet name="Ananya" age="8"/> */}
      {/* <Greet name="Bruce" age="30">
      <p>This is a children props</p></Greet>
      <Greet name="Clark" age="31">
      <button>Action</button>
      </Greet>
      <Greet name="Diana" age="32"/>
      {/* <MyComponent/>Can be other name as MyComponent */}
     {/* <Welcome name="Bruce" age="30"/>
     <Welcome name="Clark" age="31"/>
     <Welcome name="Diana" age="32"/> */}
     {/* <Welcome name="Mayank" age="10"/> */}
    {/* <Hello/> */}
  
    </div>
  )
}

export default App;
