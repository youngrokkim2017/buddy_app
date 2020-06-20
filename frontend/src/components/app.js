import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
// import SideBarContainer from './nav/sidebar_container';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

import PostContainer from './post/post_container';
import PostComposeContainer from './post/post_form_container';
import PostShowContainer from './post/post_show_container';

import ProfileContainer from './profile/profile_container';

const App = () => (
  <div className="w-full max-w-screen-xl mx-auto lg:px-6 flex h-screen">
    <NavBarContainer />

    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

      <div className="flex overflow-hidden mx-auto w-full lg:mx-0 lg:w-3/5">
        <div className="flex-grow overflow-y-scroll">
      {/* <React.Fragment> */}
        {/* <React.Fragment> */}
          <Route exact path="/post" component={PostContainer} />
          <Route exact path="/post/:id" component={PostShowContainer} />
          <ProtectedRoute exact path="/new_post" component={PostComposeContainer} />
          <ProtectedRoute exact path="/profile" component={ProfileContainer} />
        {/* </React.Fragment> */}
      {/* </React.Fragment> */}
        </div>
      </div>

    </Switch>

  </div>
);

export default App;