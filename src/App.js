// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import Main from "./main";
import ThemeSetter from "./common/theme/components/themeshetter";
import ThemeProvider from "./common/theme/components/contexts/themeprovider";

function App() {
  return (
    <>
      <ThemeProvider>
        <ThemeSetter />
        <Main />
      </ThemeProvider>
    </>
  );
}

export default App;
