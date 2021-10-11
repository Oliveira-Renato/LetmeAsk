import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home'
import { NewRoom } from "./pages/NewRoom";
import { Room } from './pages/Room';

import { AuthContextProvider } from './contexts/AuthContext'
import { AdminRoom } from './pages/AdminRoom';



// import { ThemeProvider, DefaultTheme } from 'styled-components';

// import Header from './components/Header';
// import light from './styles/themes/light'
// import dark from './styles/themes/dark'; 

// import usePersistedState from './utils/usePersistedState'

// import GlobalStyle from './styles/global';


// const App = () => {
//   const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

//   const toggleTheme = () => {
//     setTheme(theme.title === 'light' ? dark : light);
//   };


//   return (
//    <ThemeProvider theme={light}>
//      <div className="App">
//         <GlobalStyle />
//         <Header toggleTheme={toggleTheme} />
//       </div>
//       <BrowserRouter>
//         <AuthContextProvider>
//           <Switch>
//             <Route path="/" exact component={Home} />
//             <Route path="/rooms/new" component={NewRoom} /> 
//             <Route path="/rooms/:id" component={Room} />
            
//             <Route path="/admin/rooms/:id" component={AdminRoom} />
//           </Switch>
//         </AuthContextProvider>       
//     </BrowserRouter>
//    </ThemeProvider>
//   );
// }

// export default App;

import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePeristedState from './utils/usePersistedState'

import light from './styles/themes/light';
import dark from './styles/themes/dark';   

import GlobalStyle from './styles/global';
import Header from './components/Header';

const App = () => {
  const [theme, setTheme] = usePeristedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />

        <BrowserRouter>
         <AuthContextProvider>
           <Switch>
             <Route path="/" exact component={Home} />
             <Route path="/rooms/new" component={NewRoom} /> 
             <Route path="/rooms/:id" component={Room} />
            
             <Route path="/admin/rooms/:id" component={AdminRoom} />
           </Switch>
        </AuthContextProvider>       
     </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;