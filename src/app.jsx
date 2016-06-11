import boot from 'boot';
import DefaultTemplate from 'templates/default';
import Overview from 'pages/overview';
import { Router, Route, useRouterHistory, browserHistory } from 'react-router';

require('./style.less');

boot(
    <Router history={browserHistory}>
        <Route component={DefaultTemplate}>
            <Route path="/" component={Overview} />
        </Route>
    </Router>
);
