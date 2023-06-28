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
        <FormExample/>
    </div>
  );
}

export default App;