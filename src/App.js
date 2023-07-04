// import logo from './logo.svg';
import './App.css';
import { StyleSheet } from './components/StyleSheet';
import { ClickHandler } from './components/ClickHandler';
import Counter from './components/Counter';
import { FunctionMessage } from './components/FunctionMessage';
import { Greet } from './components/Greet';
import { NamedList } from './components/NamedList';
import { ParentComponent } from './components/ParentComponent';
import { UserGreetings } from './components/UserGreetings';
import { Welcome } from './components/Welcome';
import { Inline } from './components/Inline';
import {Form }  from './components/Form';
import './myAppStyles.css'
import styles from './myAppStyles.module.css'
import { FormExample } from './FormExample';
import { FormDetail } from './components/FormDetail';
import { FragmemtDemo } from './components/FragmemtDemo';
import { Table } from './components/Table';
import { FragmentList } from './components/FragmentList';
import LifeCycleA from './components/LifeCycleA';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import { RefDemo } from './components/RefDemo';
import { FocusInput } from './components/FocusInput';
import { FRParentInput } from './components/FRParentInput';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Hero } from './components/Hero';
import { PortalDemo } from './components/PortalDemo';
import  ClickCounter  from './components/ClickCounter';
import  HoverCounter  from './components/HoverCounter';
import UpdatedComponent from './components/withCounter';
import ClickCounter2 from './components/ClickCounter2';
import HoverCounter2 from './components/HoverCounter2';
import User from './components/User';
import CounterTwo from './components/CounterTwo';
import CompnentC from './components/CompnentC';
import { UserProvider } from './components/userContext';
//tag name and file may be different from component name;but they should be same 

function App() {
  return (
    <div className="App">
       {/* <FunctionMessage/>
        <Greet/>
        <Welcome/> 
        <Counter/> 
        <ClickHandler/>
        <UserGreetings/>
        <ParentComponent/>
        <NamedList/> */}
        {/* <StyleSheet primary={false}/> */}
        {/* <Inline/>
        <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1> */}
        {/* <Form/> */}
        {/* <FormExample/> */}
        {/* <FormDetail/> */}
        {/* <FragmemtDemo/> */}
        {/* <Table/> */}
        {/* <FragmentList/> */}
        {/* <LifeCycleA/> */}
        {/* <PureComp/> */}
        {/* <ParentComp/> */}
        {/* <RefDemo/> */}
        {/* <FocusInput/> */}
        {/* <FRParentInput/> */}
        {/* <ErrorBoundary>
          <Hero heroName='Batman'/>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName='Superman'/>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName='Joker'/>
        </ErrorBoundary> */}
        {/* <PortalDemo/> */}
        {/* <ClickCounter name='CGG'/>
        <HoverCounter name='Hii'/> */}
        {/* <ClickCounter2/>
        <HoverCounter2/>
        <User render={(isLoggedIn)=>isLoggedIn?'CGG':'Guest'}/> */}
        {/* <CounterTwo>{(count,incrementCount)=>
        (<ClickCounter2 count={count} incrementCount={incrementCount}/>)
        }
        </CounterTwo>
        <CounterTwo>{(count,incrementCount)=>
        (<HoverCounter2 count={count} incrementCount={incrementCount}/>)
        }
        </CounterTwo> */}
        {/* 2. */}
        <UserProvider value='CGG'><CompnentC/></UserProvider> {/*Particular value*/}
         {/* <CompnentC/>  */}   {/*For default values */}

    </div>
  );
}

export default App;
//https://codesandbox.io/s/00254q4n6p -
//https://codepen.io/gareaon/pen/jGBWpE-