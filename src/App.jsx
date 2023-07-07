import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './assets/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Home></Home>
    </div>
  )
}

export default App


// class MyComponent extends Component {
//   state = {
//     text: "Goodbye "
//   };
//   handleClick = () => {
//     this.setState({
//       text: "Goodbye World!"
//     });
//   };
//   handle = () => {
//     this.setState({
//       text : <img  src={img} alt="" />
//     });
//   };
//   render() {
//     return (
//       <div>
//         <h1>{this.state.text}</h1>
//         <button onClick={this.handle}>Click Me</button>
//         <button onClick={this.handleClick}>Click </button>
//       </div>
//     );
//   }
// }
// export default MyComponent;