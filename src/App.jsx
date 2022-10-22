import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewsFeed from './Components/NewsFeed';
import Login from './Components/LoginPage';
import SnackBarDesign from './Components/SnackBar/Design';
import { useEffect, useState } from 'react';
import MainTemplate from './Components/MainTemplate';

function App() {

  const [snackBar, snackBarManager] = useState({
    switch: '',
    htmlCode: '',
    message: '',
    status: ''
  });

  const snackBaring = () => {
    if (snackBar.switch) {
      console.log(snackBar.message);
      return <SnackBarDesign key={1} message={snackBar.message} htmlCode={snackBar.htmlCode} status={snackBar.status} />
    } else {
      return <SnackBarDesign key={2} message={snackBar.message} htmlCode={snackBar.htmlCode} status={snackBar.status} />
    }
  }

  const Manager = (htmlCode, message, status) => {
    snackBarManager(prev => {
      return {
        ...prev,
        switch: !prev.switch,
        htmlCode: htmlCode,
        message: message,
        status: status
      }
    });
  }

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<MainTemplate />} >
          {/* <Route path="*" element={</>}/> */}
        </Route>
        <Route path="/login" element={<Login sB={Manager} />} />
      </Routes>
      {snackBaring()}
    </div>
  )
}

export default App; 
