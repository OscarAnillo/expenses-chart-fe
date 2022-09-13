import { useState } from 'react';

export default function ChartComponent() {
    const [showNumWed, setShowNumWed] = useState(false);
    const [showNumThu, setShowNumThu] = useState(false);

    const mouseOverHandlerWed = () => {
        setShowNumWed(!showNumWed);
    }

    const mouseOverHandlerThu = () => {
        setShowNumThu(!showNumThu)
    }

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
                {showNumWed ? <div className="wed-num">$52.36</div> : ''}
                <div className="wednsday" onMouseEnter={mouseOverHandlerWed} onMouseLeave={mouseOverHandlerWed}></div>
                <p>wed</p>
            </div>
            <div>
                {showNumThu ? <div className="thu-num">$31.07</div> : ''}
                <div className="thursday" onMouseEnter={mouseOverHandlerThu} onMouseLeave={mouseOverHandlerThu}></div>
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
