import {HashRouter, Route, Routes} from 'react-router-dom';
import  Form  from "./pages/Form";
import  NotFound  from "./pages/NotFound";
import SecondPage from './pages/SecondPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound />}/>
        <Route path='/' element={<Form />} />
        <Route path='/second-page' element={<SecondPage />} />
      </Routes>
    </>
  )
}

function WrappedApp(){
  return <HashRouter><App/></HashRouter>
}

export default WrappedApp;
