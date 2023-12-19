import React, { Component } from 'react'
import '../Feedback/Feedback.scss'
import { Link } from "react-router-dom";

export default class Feedback extends Component {
  render() {
    return (
      <div className='Feedback'>
        <div className="form_box">
            <p className='zaholovok'>Напишіть нам і ми вам перетелефонуємо</p>
            <div className='form'>
                <div>
                    <label>П.І.Б</label>
                    <input type="text" id='name'/>
                    <label>Номер телефону</label>
                    <input type="phone" id='phone'/>
                </div>
                <div>
                    <label>Електрона пошта</label>
                    <input type="mail" id='email'/> 
                </div>
                <div>
                    <label>Ваше повідомлення</label>
                    <input type="text" id='massenge'/>           
                </div>
            </div>
            <Link to="" className='myButton'>Відправити</Link>
        </div>
      </div>
    )
  }
}
