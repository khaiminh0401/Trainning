import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [data,setData] = useState({});
  const handleChange = (e) =>{
    const value = e.target.value;
    const name = e.target.name;
    setData({...data,[name]:value});
  }
  return (
    <div className="container w-50 mt-5">
      <p className="h3">Form login</p>
      <form action='/home'>
        <div className="mb-3 row">
          <label htmlFor="inputName" className="col-4 col-form-label">Username</label>
          <div className="col-8">
            <input type="text" className="form-control" onChange={handleChange} name="username" id="username" placeholder="Username" />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputName" className="col-4 col-form-label">Password</label>
          <div className="col-8">
            <input type="password" className="form-control" onChange={handleChange} name="password" id="password" placeholder="Password" />
          </div>
        </div>
        <div className="mb-3 row">
          <div className="offset-sm-4 col-sm-8">
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
        </div>
      </form>
    </div>

  )
}

export default App;
