export default function ChartComponent() {
  return (
    <div className="chart">
      <div className="chart-container">
        <h1>Spending - Last 7 days</h1>
        <div className="chart-row">
            <div>
                <div className="monday"></div>
                <p>mon</p>
            </div>
            <div>
                <div className="tuesday"></div>
                <p>tue</p>
            </div>
            <div>
                <div className="wednsday"></div>
                <p>wed</p>
            </div>
            <div>
                <div className="thursday"></div>
                <p>thu</p>
            </div>
            <div>
                <div className="friday"></div>
                <p>fri</p>
            </div>
            <div>
                <div className="saturday"></div>
                <p>sat</p>
            </div>
            <div>
                <div className="sunday"></div>
                <p>sun</p>
            </div>
        </div>
        <div className="hr"></div>
        <div className="total-row">
            <div>
                <p>Total this month</p>
                <h1>$478.33</h1>
            </div>
            <div>
                <h4>+2.4%</h4>
                <p>from last month</p>
            </div>
        </div>
      </div>
    </div>
  );
}
