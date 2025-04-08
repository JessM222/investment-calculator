import moneyBucketImage from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <div id="header">
      <img src={moneyBucketImage} alt="moneyBucketImage" />
      <h1>Investment Calculator</h1>
    </div>
  );
}
    