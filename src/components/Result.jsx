import { calculateInvestmentResults } from "../util/investment";
import { formatter } from "../util/investment";

export default function Result({ inputs }) {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    inputs;

  const annualData = calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  });


  let interest = 0;
  let valueEndOfYear = 0;
  let totalInterest = interest;
  let investedCapital = initialInvestment;
  let finalData = [];

  for (let i = 0; i < duration; i++) {
    interest = annualData[i].interest;
    valueEndOfYear = annualData[i].valueEndOfYear;
    totalInterest = totalInterest + annualData[i].interest;
    investedCapital = investedCapital + annualData[i].annualInvestment;
    finalData.push({
      interest: formatter.format(interest),
      valueEndOfYear: formatter.format(valueEndOfYear),
      totalInterest: formatter.format(totalInterest),
      investedCapital: formatter.format(investedCapital),
    });
   
  } 

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {annualData.map((data, index) => (
          <tr key={index}>
            <td>{data.year}</td>
            <td>{finalData[index].valueEndOfYear}</td>
            <td>{finalData[index].interest}</td>
            <td>{finalData[index].totalInterest}</td>
            <td>{finalData[index].investedCapital}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
