import logo from './logo.svg';
import './App.css';

function App() {

  const name = "Sid";
  // const loading = true; if false then it will go to below return jsx code

  // if(loading){
  //   return <h1>Loading</h1>
  // }
  
  const isLoggedIn = true; //will result Hello Sid
  // const isLoggedIn = false; // will result - Hello world
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          {/* Hello {name} */}

          {/* ternary operator inside curly braces as js code can be written inside curly braces  */}
          {/* Hello {isLoggedIn ? name : 'world'} */}

          {/* another way using &&-ampercent */}

          {!isLoggedIn && <p>Hello World</p>}
          {isLoggedIn && <p>Hello {name}</p>}

          {/* analyzing above stmts - true && expression --> will always result in expression */}
          {/* if false - it will show false */}

        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
