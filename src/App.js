import { Fragment, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import "./App.css";
import Header from './components/Header';
import Home from './components/Home';
import Login from "./components/Login";
import { getUserAuth } from './actions';
import { connect } from 'react-redux';

function App(props) {
  useEffect(()=>{
    props.getUserAuth();
  }, [])
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />}></Route>
          <Route path="/home" exact element={<Fragment> <Header /> <Home /> </Fragment> }></Route>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

const mapStateProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth())
});

export default connect(mapStateProps, mapDispatchToProps)(App);

