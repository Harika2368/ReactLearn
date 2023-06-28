import {Component} from "react";

// export class Welcome extends Component{
//     render(){
//         return( 
//         <div><h1>Welcome {this.props.name} a.k.a {this.props.desgnination}</h1>
//               {this.props.children}
//         </div>
//         )
//     }
// }
//Destructuring props
export class Welcome extends Component{
    render(){
        const {name,desgnination,children} = this.props
        return( 
        <div><h1>Welcome {name} a.k.a {desgnination}</h1>
              {children}
        </div>
        )
    }
}
// export default Welcome