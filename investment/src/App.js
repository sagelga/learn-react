import React, { useState } from 'react';
import logo from './assets/investment-calculator-logo.png';
import Header from './components/Header/Header';
import InputBox from './components/Input/InputBox';
import DataTable from './components/DataTable/DataTable';

function App() {
    const [tableData, setTableData] = useState([]);

    const calculateHandler = (userInput) => {
        const yearlyData = []; // per-year results

        let totalInterest = 0;
        let currentSavings = +userInput['currentSavings'];
        let investedCapital = +userInput['currentSavings'];
        const yearlyContribution = +userInput['yearlyContribution'];
        const expectedReturn = +userInput['expectedReturn'] / 100;
        const duration = +userInput['duration'];

        // The below code calculates yearly results (total savings, interest etc)
        for (let i = 0; i < duration; i++) {
            const yearlyInterest = currentSavings * expectedReturn;
            currentSavings += yearlyInterest + yearlyContribution; // accumulate savings with interest
            totalInterest += yearlyInterest; // accumulate interests for each year
            investedCapital += yearlyContribution; // accumulate savings for each year

            // Push data to yearlyData
            yearlyData.push({
                year: i + 1,
                savingsEndOfYear: currentSavings,
                yearlyInterest: yearlyInterest,
                totalInterest: totalInterest,
                investedCapital: investedCapital,
            });
        }

        // Push yearlyData to tableData
        setTableData(yearlyData);
    };

    return (
        <div>
            <Header logo={logo} />
            <InputBox submitHandler={calculateHandler} />
            <DataTable data={tableData} />
        </div>
    );
}

export default App;
