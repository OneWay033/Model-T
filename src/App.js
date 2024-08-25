
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Page1 from './componnents/pege1/Page1';
import Trend_child from './componnents/pege1/Trend_child';


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/Trend_child' element={<Trend_child></Trend_child>}></Route>
      <Route path='/' element={<Page1></Page1>}></Route>
      <Route path='/' element={<Page1></Page1>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
