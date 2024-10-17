import { useState } from 'react';

import Display from './components/Display.jsx';
import Form from './components/Form.jsx';

import logo from './assets/images/logo.svg';

function App() {
  const [billAmount, setBillAmount] = useState('142.55');
  const [people, setPeople] = useState('5');
  const [isTipSelected, setIsTipSelected] = useState(false);
  const [selectedTip, setSelectedTip] = useState('0.15');
  const [showPeopleError, setShowPeopleError] = useState(false);
  const [calculatedTip, setCalculatedTip] = useState(0);
  const [calculateTotal, setCalculateTotal] = useState(0);

  const handleBillAmountInput = (e) => {
    setBillAmount(e.target.value);
  };

  const handleSelectedTip = (e) => {
    setSelectedTip(e.target.value);
  };

  const handlePeopleAmountInput = (e) => {
    if (Number(e.target.value) === 0) {
      setShowPeopleError(true);
    } else {
      setShowPeopleError(false);
    }

    setPeople(e.target.value);
  };

  const calculateTip = () => {
    const tip = (billAmount * selectedTip) / people;
    setCalculatedTip(tip);
  };

  return (
    <main className='wrapper'>
      <img src={logo} alt='Splitter logo' />
      <div className='container'>
        <Form
          billAmount={billAmount}
          people={people}
          handleBillAmountInput={handleBillAmountInput}
          handlePeopleAmountInput={handlePeopleAmountInput}
          handleSelectedTip={handleSelectedTip}
          showPeopleError={showPeopleError}
        />
        <Display billAmount={billAmount} people={people} />
      </div>
    </main>
  );
}
export default App;
