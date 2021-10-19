import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home'
import { NewRoom } from "./pages/NewRoom";
import { Room } from './pages/Room';

import { AuthContextProvider } from './contexts/AuthContext'
import { AdminRoom } from './pages/AdminRoom';

// import {ThemeProvider, DefaultTheme} from "styled-components";
// import { GlobalStyles } from "./components/Theme/globalStyles";
// import { light, dark } from "./components/Theme/themes"
// import usePersistedState from './utils/usePersistedState'
// import Toggler from './components/Toggler';



import { ThemeProvider, DefaultTheme } from 'styled-components';

import Header from './components/Toggler';
import light from './styles/themes/light'
import dark from './styles/themes/dark'; 

import usePersistedState from './utils/usePersistedState'

import GlobalStyle from './styles/global';


 const App = () => {
   const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

   const toggleTheme = () => {
     setTheme(theme.title === 'light' ? dark : light);
   };


   return (
    <ThemeProvider theme={theme}>
      <div className="App">
         <GlobalStyle />
         <Header toggleTheme={toggleTheme} />
         </div>
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
    </ThemeProvider>
   );
 }

 export default App;
