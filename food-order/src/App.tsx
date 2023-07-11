import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import MealsSummary from './components/MealsSummary/MealsSummary'
import { DUMMY_MEALS } from './data/dummy-meals'

function App() {
    return (
        <div className="App">
            <Header></Header>
            <MealsSummary></MealsSummary>
            {/* Menu List */}
        </div>
    )
}

export default App
