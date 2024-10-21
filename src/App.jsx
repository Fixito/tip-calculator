import Display from './components/Display.jsx';
import Form from './components/Form.jsx';

import logo from './assets/images/logo.svg';

function App() {
  return (
    <main className='wrapper'>
      <img src={logo} alt='Splitter logo' className='logo' />
      <div className='container'>
        <Form />
        <Display />
      </div>
    </main>
  );
}
export default App;
