import Slider from '../../Components/Slider/Slider'
import '../Advertisement/Advertisement.scss'
import { Link } from "react-router-dom";

function Advertisement() {
  return (
    <div className="Advertisement">
      <Slider/>
      <div className="top">
        <div className='box'></div>
        <div className='text'>
          <p>Підкори Інтернет із WindProvider – Де Реклама Оживає!</p>
          <br />
          <hr />
          <p><i>Прискорьте свій бізнес із WindProvider – провайдером, де швидкість зустрічається з рекламним висвітленням! Ваш бренд – у центрі подій у світі Інтернету</i></p>
          <hr />
          <br />
          <p>Хочете зробити свій бренд видимим у всесвіті Інтернету? WindProvider - це ключ до вашого рекламного успіху!Розцінюйте Швидкість Реклами: Виборюйте увагу своїх клієнтів на вищому рівні швидкості! З WindProvider ваша реклама завантажується швидше, ніж ви встигнете сказати "втрата часу".Висока Видимість, Нові Клієнти: Наша рекламна платформа гарантує вам високу видимість серед вашої цільової аудиторії. Завдяки WindProvider вас побачать ті, кого вам потрібно.Провідний Провайдер, Провідна Реклама: Ми пропонуємо не тільки швидке Інтернет-підключення, але й провідні можливості реклами. Захоплюйте світ рекламою, яка виходить за рамки звичайного.Реклама, Яка Палає: Ваш бренд — як вогник, що привертає увагу. Оберіть WindProvider для реклами, яка спалахує і залишає слід в серцях клієнтів.Оберіть майстерність реклами з WindProvider і перетворіть свій бізнес у невгамоване джерело уваги!</p>
        </div>
        <div className='box'></div>
      </div>
      <div className="bottom">
        <br />
        <br />
        <h1>Наші Партнери</h1>
        <br />
        <br />
        <div className="partners">
          <div className="p_top">
            <div className="partner f1"></div>
            <div className="partner f2"></div>
            <div className="partner f3"></div>
            <div className="partner f2"></div>
          </div>
          <div className="p_bottom">
            <div className="partner f3"></div>
            <div className="partner f1"></div>
            <div className="partner f2"></div>
            <div className="partner f3"></div>
          </div>
        </div>
        <div className="priklad">
          <div className="text">
            Для замовлення реклами ви можете зв'язатися з нами
          </div>
          <Link to="/contact" className='myButton'>Зв'язатися з нами</Link>
        </div>
      </div>
    </div>  
  );
}

export default Advertisement;
