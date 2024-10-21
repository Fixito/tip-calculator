import dollar from '../assets/images/icon-dollar.svg';
import person from '../assets/images/icon-person.svg';

function Form() {
  const handleSubmit = (e) => {
    e.prenventDefault();
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
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
            step='.1'
            name='bill'
            id='bill'
            placeholder='0'
          />
          <img src={dollar} alt='' aria-hidden='true' className='icon' />
        </div>
      </div>

      <div className='tip-section'>
        <p className='label'>Selected tip %</p>
        <div className='tip-amount-wrapper'>
          <div className='tip-amount'>
            <input type='radio' name='tip' value='.05' />
            <div className='tip-btn'>5%</div>
          </div>
          <div className='tip-amount'>
            <input type='radio' name='tip' className='tip-btn' value='.1' />
            <div className='tip-btn'>10%</div>
          </div>
          <div className='tip-amount'>
            <input type='radio' name='tip' className='tip-btn' value='0.15' />
            <div className='tip-btn'>15%</div>
          </div>
          <div className='tip-amount'>
            <input type='radio' name='tip' className='tip-btn' value='.25' />
            <div className='tip-btn'>25%</div>
          </div>
          <div className='tip-amount'>
            <input type='radio' name='tip' className='tip-btn' value='.5' />
            <div className='tip-btn'>50%</div>
          </div>
          <input
            type='number'
            name='tip-custom'
            className='tip-custom'
            placeholder='Custom'
          />
        </div>
      </div>

      <div className='label-group'>
        <div className='label-wrapper'>
          <label htmlFor='people'>Number of People</label>

          <p className='error'>Can&apos;t divide by zero</p>
        </div>
        <div className='number-wrapper'>
          <input type='number' name='people' id='people' placeholder='0' />
          <img src={person} alt='' aria-hidden='true' className='icon' />
        </div>
      </div>
    </form>
  );
}
export default Form;
