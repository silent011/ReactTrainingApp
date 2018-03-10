import React from 'react'
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom'
import HomePage from '../components/HomePage'
import Other from '../components/Other'
import AddTodoPage from '../components/AddTodoPage'

let Routes = (props) => (
         <Router>
             <section>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/other">Other pagw</Link>
                    <Link to="/addtodo">Add Todo</Link>
                </nav>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/other" component={Other}/>
                        <Route path ="/addtodo" component={AddTodoPage} />
                    </Switch>
            </section>
        </Router>
)

export default Routes