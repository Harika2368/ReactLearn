//HigherOrder Component
import React from 'react'
import { Component } from 'react'

const withCounter =(WrappedComponent,incrementNum)=>{
    class WithCounter extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                count:0
            }
        }
        incrementCount=()=>{
            this.setState(prevState=>{
                return{
                    count:prevState.count+incrementNum
                }
            })
        }
        render(){
            console.log(this.props.name)
            return(
            <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
          />)
        }
    }
    return WithCounter
}
export default withCounter

// const UpdatedComponent =OriginalComponent=>{
//     class newComponent extends Component {
//         constructor(props) {
//             super(props)
        
//             this.state = {
//                 count:0
//             }
//         }
//         incrementCount=()=>{
//             this.setState(prevState=>{
//                 return{
//                     count:prevState.count+1
//                 }
//             })
//         }
//         render(){
//             return(
//             <OriginalComponent
//           count={this.state.count}
//           incrementCount={this.incrementCount}/>)
//         }
//     }
//     return newComponent
// }
// export default UpdatedComponent

