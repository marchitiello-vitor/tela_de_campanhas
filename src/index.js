import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const routing = (

  <BrowserRouter>
    <div>
      <Routes>
        <Route index element={<campanha/>} />
        {/* <Route path="/campanha" element={<campanha />}></Route> */}
      </Routes>
    </div>
  </BrowserRouter>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
