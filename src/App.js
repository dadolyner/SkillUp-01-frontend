import { Route } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import CreateQuote from './pages/createQuote'
import Profile from './pages/profile'
import ProfileSettings from './pages/profileSettings'
import SignUp from './pages/signUp'
import FooterContainer from './components/FooterComponent/Footer.js'

const App = () => {
  return (
    <div>
      {/* <div style={{ display: 'grid', gridTemplateColumns: '25% 25% 25% 25%' }}></div> */}
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/create-quote" component={CreateQuote} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/profile-settings" component={ProfileSettings} />
      <Route exact path="/signup" component={SignUp} />

      <FooterContainer />
    </div>

  );
}

export default App;
