import React from 'react'
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom'
import Counter from '../containers/Counter'
import Other from '../components/Other'

let Routes = (props) => (
         <Router>
             <section>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/other">Other pagw</Link>
                </nav>
                    <Switch>
                        <Route exact path="/" component={Counter}/>
                        <Route path="/other" component={Other}/>
                    </Switch>
            </section>
        </Router>
)

export default Routes