import React from 'react';
import styles from './DataTable.module.css';

const DataTable = (props) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    if (props.data.length === 0) {
        return <p style={{textAlign: 'center'}}>No Data</p>;
    }

    return (
        <table className={styles.result}>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((item) => {
                    const year = item.year;

                    // Convert savingsEndOfYear, yearlyInterest, totalInterest, and investedCapital to a currency format
                    const savingsEndOfYear = formatter.format(
                        item.savingsEndOfYear
                    );
                    const yearlyInterest = formatter.format(
                        item.yearlyInterest
                    );
                    const totalInterest = formatter.format(item.totalInterest);
                    const investedCapital = formatter.format(
                        item.investedCapital
                    );

                    return (
                        <tr key={year}>
                            <td>{year}</td>
                            <td>{savingsEndOfYear}</td>
                            <td>{yearlyInterest}</td>
                            <td>{totalInterest}</td>
                            <td>{investedCapital}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default DataTable;
