import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Loader from 'views/components/Loader/Loader';
import Navigation from 'views/Navigation/Navigation';

const HomePage = lazy(() => import('views/HomePage/HomePage'));

(document.body.style as any).zoom = '100%';

const Routing = function Routing() {
  return (
    <Router>
      <Navigation>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
          </Switch>
        </Suspense>
      </Navigation>
    </Router>
  );
};

export default Routing;
