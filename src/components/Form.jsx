import dollar from '../assets/images/icon-dollar.svg';
import person from '../assets/images/icon-person.svg';

function Form({
  bill,
  setBill,
  people,
  setPeople,
  tip,
  setTip,
  customTip,
  setCustomTip,
}) {
  const handleSelectTip = (e) => {
    console.log(e.target.value);

    setTip(e.target.value);
    setCustomTip('');
  };

  const handleSelectCustomTip = (e) => {
    setCustomTip(e.target.value);
    setTip('');
  };

  return (
    <form className='form'>
      <div className='label-group'>
        <div className='label-wrapper'>
          <label htmlFor='bill' className='label'>
            Bill
          </label>
          <p className='error'></p>
        </div>
        <div className='number-wrapper'>
          <input
            type='number'
            step='.01'
            name='bill'
            id='bill'
            placeholder='0'
            value={bill}
            onChange={(e) => setBill(+e.target.value)}
          />
          <img src={dollar} alt='' aria-hidden='true' className='icon' />
        </div>
      </div>

      <div className='tip-section'>
        <p className='label'>Selected tip %</p>
        <div className='tip-amount-wrapper'>
          <div className='tip-amount'>
            <input
              type='radio'
              checked={tip === '5'}
              name='tip'
              id='input1'
              value='5'
              onChange={handleSelectTip}
            />
            <label className='tip-btn' htmlFor='input1'>
              5%
            </label>
          </div>
          <div className='tip-amount'>
            <input
              type='radio'
              checked={tip === '10'}
              name='tip'
              id='input2'
              value='10'
              onChange={handleSelectTip}
            />
            <label className='tip-btn' htmlFor='input2'>
              10%
            </label>
          </div>
          <div className='tip-amount'>
            <input
              type='radio'
              checked={tip === '15'}
              name='tip'
              id='input3'
              value='15'
              onChange={handleSelectTip}
            />
            <label className='tip-btn' htmlFor='input3'>
              15%
            </label>
          </div>
          <div className='tip-amount'>
            <input
              type='radio'
              checked={tip === '25'}
              name='tip'
              id='input3'
              value='25'
              onChange={handleSelectTip}
            />
            <label className='tip-btn' htmlFor='input4'>
              25%
            </label>
          </div>
          <div className='tip-amount'>
            <input
              type='radio'
              checked={tip === '50'}
              name='tip'
              id='input5'
              value='50'
              onChange={handleSelectTip}
            />
            <label className='tip-btn' htmlFor='input5'>
              50%
            </label>
          </div>
          <input
            type='number'
            name='tip-custom'
            id='tip-custom'
            className='tip-custom'
            placeholder='Custom'
            value={customTip}
            onChange={handleSelectCustomTip}
          />
          <label htmlFor='tip-custom' className='sr-only'>
            Custom tip
          </label>
        </div>
      </div>

      <div className='label-group'>
        <div className='label-wrapper'>
          <label htmlFor='people'>Number of People</label>
          {people === 0 && <p className='error'>Can&apos;t divide by zero</p>}
        </div>
        <div className='number-wrapper'>
          <input
            type='number'
            name='people'
            id='people'
            placeholder='0'
            value={people}
            onChange={(e) => setPeople(+e.target.value)}
          />
          <img src={person} alt='' aria-hidden='true' className='icon' />
        </div>
      </div>
    </form>
  );
}
export default Form;
