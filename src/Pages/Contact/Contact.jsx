import React, { Component } from 'react'
import '../Contact/Contact.scss'
import Feedback from '../../Components/Feedback/Feedback.jsx'

export default class Contact extends Component {
  render() {
    return (
      <div className='Contact'>
        <p className='Name'>Де нас знайти?</p>
        <hr />
        <p className='text'>Тут ви можете зв'язатися з нами</p>
        <div className="maps">
          <div className='first_maps'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41954.998085947605!2d24.67592979247899!3d48.91182212302176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4730c16c34b0381d%3A0xd6d32394e59e41c2!2z0IbQstCw0L3Qvi3QpNGA0LDQvdC60ZbQstGB0YzQuiwg0IbQstCw0L3Qvi3QpNGA0LDQvdC60ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA3NjAwMA!5e0!3m2!1suk!2sua!4v1702646410643!5m2!1suk!2sua" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className='second_maps'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41954.998085947605!2d24.67592979247899!3d48.91182212302176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4730c16c34b0381d%3A0xd6d32394e59e41c2!2z0IbQstCw0L3Qvi3QpNGA0LDQvdC60ZbQstGB0YzQuiwg0IbQstCw0L3Qvi3QpNGA0LDQvdC60ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA3NjAwMA!5e0!3m2!1suk!2sua!4v1702646410643!5m2!1suk!2sua" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div className="contact_box">
          <div className="phone">
            <span></span>
            <div className="icon"></div>
            <span>
              <a href="tel:+380982100494">+38 098 210 04 94</a><br />
              <a href="tel:+380973112795">+38 097 311 27 95</a>
            </span>
            <span></span>
          </div>
          <div className="gmail">
            <span></span>
            <div className="icon"></div>
            <span>
              <a href="mailto: mailposhta@gmail.com">mailposhta@gmail.com</a><br />
              <a href="mailto: mailposhta@ukr.net">mailposhta@ukr.net</a>
            </span>
            <span></span>
          </div>
          <div className='adress'>
            <span></span>
            <div className="icon"></div>
            <p>
              вул. Набережна 1, м. Івано-Франківськ<br />
              вул. Незалежності 1, м. Івано-Франківськ
            </p>
            <span></span>
          </div>
        </div>
        <Feedback/>
      </div>
    )
  }
}
