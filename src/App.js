import React from 'react';
import { auth, CreateUserProfileDocument } from './firebase/firebase.utils'
<<<<<<< HEAD
import { Switch, Route, Redirect } from 'react-router-dom';
=======
import { Switch, Route } from 'react-router-dom'
>>>>>>> refs/remotes/origin/master
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sing-up/sign-in-and-sing-up.component'
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

import './App.css';

const TestPage = (props) => (
  <div>
    <h1>TEST PAGE</h1>
  </div>
)

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await CreateUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  render() {
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route exact path='/shop' component={ShopPage}></Route>
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/'></Redirect>) : (<SignInAndSignUpPage></SignInAndSignUpPage>)}></Route>
          <Route exact path='/shop/hats' component={TestPage}></Route>
          <Route exact path='/shop/jackets' component={TestPage}></Route>
          <Route exact path='/shop/sneakers' component={TestPage}></Route>
          <Route exact path='/shop/womens' component={TestPage}></Route>
          <Route exact path='/shop/mens' component={TestPage}></Route>
        </Switch>
      </div>
    );
  }
}

<<<<<<< HEAD
const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

=======
>>>>>>> refs/remotes/origin/master
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

<<<<<<< HEAD
export default connect(mapStateToProps, mapDispatchToProps)(App);
=======
export default connect(null, mapDispatchToProps)(App);
>>>>>>> refs/remotes/origin/master
