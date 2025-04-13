export default function InputGroup({ inputs, onChangeInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            name="initialInvestment"
            value={inputs.initialInvestment}
            required
            onChange={(event) => {
              onChangeInput("initialInvestment", event.target.value);
            }}
          />
        </p>
        <p>
          <label>Annual Investment </label>
          <input
            type="number"
            name="annualInvestment"
            value={inputs.annualInvestment}
            required
            onChange={(event) => {
              onChangeInput("annualInvestment", event.target.value);
            }}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return </label>
          <input
            type="number"
            name="expectedReturn"
            value={inputs.expectedReturn}
            required
            onChange={(event) => {
              onChangeInput("expectedReturn", event.target.value);
            }}
          />
        </p>
        <p>
          <label>Duration </label>
          <input
            type="number"
            name="duration"
            value={inputs.duration}
            required
            onChange={(event) => {
              onChangeInput("duration", event.target.value);
            }}
          />
        </p>
      </div>
    </section>
  );
}
