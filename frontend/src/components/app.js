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
  <div className="bg-lavender antialiased flex text-slateblue">
    <NavBarContainer />
    
    <div className="px-8 py-10 min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/5 xl:w-3/5 mx-auto">
      <Switch>
        <AuthRoute exact path="/" component={MainPage} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />

        <Route exact path="/post" component={PostContainer} />
        <Route exact path="/post/:postId" component={PostShowContainer} />
        <ProtectedRoute exact path="/new_post" component={PostComposeContainer} />

        <ProtectedRoute exact path="/profile" component={ProfileContainer} />
      </Switch>
    </div>
  </div>
);

export default App;