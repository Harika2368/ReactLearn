// function Greet(){
//     return <h1>Hello React</h1>
// }

// export const Greet = (props)=>{
//     console.log(props) //object //pure javascript can write here i.e before return
//     // props.name="hii"
// return (
//     <div>
//         <h1>HEllo {props.name} a.k.a {props.designation}</h1> 
//         {props.children}
//     </div>
// )
// }
//destructuring 
export const Greet = ({name,designation,children})=>{
    console.log(name + ' '+designation+" "+children) //object //pure javascript can write here i.e before return
    // props.name="hii"
return (
    <div>
        <h1>HEllo {name} a.k.a {designation}</h1> 
        {children}
    </div>
)
}
// export const Greet = (props)=>{
//     const {props}={name,designation,children}
//     console.log(name + ' '+designation+" "+children) //object //pure javascript can write here i.e before return
//     // props.name="hii"
// return (
//     <div>
//         <h1>HEllo {name} a.k.a {designation}</h1> 
//         {children}
//     </div>
// )
// }



// export const Greet = ()=><h1>HEllo React</h1> //named export (name has to mention on brackets = {Greet})

// export default Greet //default export(have a option that we can use another name in import = MyComponent )