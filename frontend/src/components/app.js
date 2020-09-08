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
import PostEditContainer from './post/post_edit_form_container';

import ChatContainer from './chat/chat_container';

import ProfileContainer from './profile/profile_container';

const App = () => (
  <div className="w-full max-w-screen-xl mx-auto lg:px-6 flex h-screen">
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />

      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      
      <Route exact path="/post" component={PostContainer} />
      <Route exact path="/post/:id" component={PostShowContainer} />
      <ProtectedRoute exact path="/new_post" component={PostComposeContainer} />
      <ProtectedRoute exact path="/post/:id/edit" component={PostEditContainer} />

      {/* <ProtectedRoute exact path="/post/:postId/chat" component={ChatContainer} /> */}
      <ProtectedRoute exact path="/requests/:requestId/chat" component={ChatContainer} />
      {/* <Route path="/chatroom/:id" component={} /> */}

      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
    </Switch>
  </div>
);

export default App;