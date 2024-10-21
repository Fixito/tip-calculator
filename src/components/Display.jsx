import { formatPrice } from '../utils/index.js';

function Display({ calculatedTip, total, handleReset }) {
  return (
    <div className='display'>
      <div className='display-group'>
        <div className='display-row'>
          <div className='display-label'>
            <p className='header'>Tip Amount</p>
            <p className='unit'>/ person</p>
          </div>
          <p className='display-amount'>{formatPrice(calculatedTip)}</p>
        </div>

        <div className='display-row'>
          <div className='display-label'>
            <p className='header'>Total</p>
            <p className='unit'>/ person</p>
          </div>
          <p className='display-amount'>{formatPrice(total)}</p>
        </div>
      </div>

      <button
        className='btn'
        disabled={total ? false : true}
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
}
export default Display;
