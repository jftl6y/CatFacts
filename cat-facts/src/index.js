import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class RandomCatFact extends React.Component{
  constructor(props)
  {super(props);
    this.state={
       facts: []
    };
  }
  componentDidMount(){
      var itemLimit = Math.floor(Math.random() * 10); 
    
      fetch("https://joscot-eastus2.azure-api.net/facts?limit=" + itemLimit).then(res=>res.json()).then(facts=>facts['data']).then(result=>{
        this.setState({facts:result});
      })
   
  }
  render(){
    return(

      <div>
        <h2>Today's top cat facts...</h2>
      <table>
        
      <thead><tr><th align='left'>Facts:</th></tr></thead>
      <tbody>{this.state.facts.map(f=>(
        <tr align='left'><td>{f.fact}</td></tr>
      ))}
        </tbody>
        </table>
      </div>
    );
  }
}

const element=<RandomCatFact></RandomCatFact>
ReactDOM.render(element,document.getElementById("root"));
/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
