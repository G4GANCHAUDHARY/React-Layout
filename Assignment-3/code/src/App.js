import React from 'react';
import logo from './logo.svg';
import './App.css';


var Larrow="<"
var Rarrow=">"
function App(props) {
  return (
    <div className="site-container">
    {/* Start Your code here */}
    <div className='Header'>
      <button className='arrow' > {Larrow} </button>
      <div>
        <p className='name'>{props.EMP.Name}</p>
        <p className='id'>{props.EMP.Eid}</p>
      </div>
      <button className='print' > PRINT </button>
    </div>
    <div className='body'>
      <div className='customer-info'>
      <p ><span className='Appoin'>Appointment: </span>{props.EMP.Appointment}</p>
      <p ><span className='email'>Email: </span>{props.EMP.Email}</p>
      <p ><span className='phone'>Phone: </span>{props.EMP.Phone}</p>
      </div>
      <div className='order-info'>
        <div className='o1'>
          <p className='statustitle'>Status</p>
          <ul>
            <li className='status'>{props.EMP.Status}</li>
          </ul>
        </div>
        <div className='o2'>
          <p className='doortitle'>Door</p>
          <p className='door'>{props.EMP.Door}</p>
        </div>
        <div className='o3'>
          <p className='timetitle'>Time</p>
          <p className='time'>{props.EMP.Time}</p>
        </div>
      </div>
      <div className='product-list'>
        <input type='checkbox' />
        <img src={props.EMP.ProductImg} alt='EmpImg'/>
        <div>
          <p className='product-name'>{props.EMP.ProductName}</p>
          <p className='product-desc'>{props.EMP.ProductDescr}</p>
        </div>
        <button className='Rarrow'>{Rarrow}</button>
      </div>
    </div>
    </div>
  );
}

export default App;
 