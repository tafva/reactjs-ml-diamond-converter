import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRef, useEffect, useState } from 'react';
import IDRCurrency from './libs/IDRCurrecy';

function App() {
  const [diamond, setDiamond] = useState("")
  const totalPrice = createRef(null);

  const handlerChange = (event) => {
    setDiamond(event.target.value)
  }

  useEffect(() => {
    const oneDiamondPrice = 500;
    totalPrice.current.innerText = IDRCurrency(diamond * oneDiamondPrice)
  }, [diamond, totalPrice])

  return (
    <div className="App">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <header className='text-center'>
              <h4>Mobile Legend</h4>
              <h2>Diamond Converter</h2>
            </header>
            <main className='mt-4'>
              <div className="input-group mb-3">
                <span className="input-group-text">🔷 Diamond</span>
                <input type="text" name="diamond" value={diamond} onChange={handlerChange} onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()} className="form-control" maxLength={8} />
                <span className="input-group-text" ref={totalPrice}></span>
                <span className="btn btn-danger" onClick={() => setDiamond("")}>Reset</span>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
