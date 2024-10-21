import { useCallback, useEffect, useState } from 'react';

import Display from './components/Display.jsx';
import Form from './components/Form.jsx';

import logo from './assets/images/logo.svg';

function App() {
  const [bill, setBill] = useState('');
  const [people, setPeople] = useState('');
  const [tip, setTip] = useState('');
  const [calculatedTip, setCalculatedTip] = useState(0);
  const [total, setTotal] = useState('');
  const [customTip, setCustomTip] = useState('');

  const handleReset = () => {
    setBill('');
    setTip('');
    setPeople('');
    setTotal('');
    setCalculatedTip('');
    setCustomTip('');
  };

  const calculateTip = useCallback((bill, people, tip) => {
    const tipAmount = (bill * tip) / 100;
    const totalAmount = bill + tipAmount;
    setTotal(totalAmount / people);
    setCalculatedTip(tipAmount / people);
  }, []);

  useEffect(() => {
    if (bill > 0 && people > 0 && (tip > 0 || customTip > 0)) {
      if (customTip > 0) {
        calculateTip(bill, people, customTip);
      } else {
        calculateTip(bill, people, tip);
      }
    }
  }, [bill, calculateTip, customTip, people, tip]);

  return (
    <main className='wrapper'>
      <img src={logo} alt='Splitter logo' className='logo' />
      <div className='container'>
        <Form
          bill={bill}
          setBill={setBill}
          people={people}
          setPeople={setPeople}
          tip={tip}
          setTip={setTip}
          customTip={customTip}
          setCustomTip={setCustomTip}
        />
        <Display
          calculatedTip={calculatedTip}
          total={total}
          handleReset={handleReset}
        />
      </div>
    </main>
  );
}
export default App;
