import Layout from 'components/layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from 'routes';
import ScrollToTop from 'ScrollToTop';

import { API_CMS } from "./config";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: API_CMS,
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <ScrollToTop>
          <Layout>
            <Switch>
              {routes.map((route, index) =>
                route.isDynamic ? (
                  <Route
                    key={index}
                    path={route.path}
                    render={(props) => <route.component {...props} />}
                  />
                ) : (
                    <Route path={route.path} key={index} exact={route.exact}>
                      <route.component />
                    </Route>
                  )
              )}
            </Switch>
          </Layout>
        </ScrollToTop>
      </Router>
    </ApolloProvider>
  );
}

export default App;
