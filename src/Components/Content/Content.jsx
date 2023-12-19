import './Content.scss';
import { Link } from "react-router-dom";

function Content() {
  return (
    <div className="Content">
      <div className='left'>
        <div className='top'>
          <div className='text'>
              <h3>Інтернет, що робить кожен момент безцінним!.</h3>
              <hr />
              <p>Дивіться вперед з нашим супершвидким підключенням. Не чекайте пригоду - створюйте її зараз!</p>
              <hr />
              <p>Хочете зануритися у світ безмежних можливостей інтернету? Наш провайдер пропонує не просто з'єднання, але й повний спектр передових послуг, які перевертають вашу інтернет-реальність. Дізнайтеся, як наше супершвидкісне підключення трансформує ваш онлайн-досвід і надає вам владу над швидкістю і надійністю в мережі! Зі вдвічі більшою інформацією, ви отримаєте не тільки зручність, але й повний контроль над вашим цифровим життям. Занурюйтесь у майбутнє з нашим передовим підходом до інтернет-послуг, де швидкість і надійність стають вашими найважливішими союзниками в онлайн-подорожі.</p>
          </div>
        </div>
        <div className='bottom'>
            <Link to="/services" className='myButton'>Послуги</Link>
        </div>
      </div>
      <div className='right'>
      <div className='top'>
          <div className='text'>
              <h3>Ефективна Реклама Онлайн: Розміщуйте Із Завзяттям!</h3>
              <hr />
              <p>Ваш успіх – наша рекламна майстерність, яка виводить ваш бренд на вершину!</p>
              <hr />
              <p>Бажаєте, щоб ваш бренд виглядав як найкращий у світі інтернет-з'єднань? Наш провайдер не просто пропонує відмінне підключення, але також вигідні можливості для реклами на нашому сайті. Дізнайтеся, як ваша реклама може долучити себе до нашого успіху та забезпечити вашому бренду визнання в мережі. З нашим широким охопленням та активною аудиторією ви отримаєте не лише видимість, але й відмінну можливість залучити нових клієнтів. Рекламуйте з нами для високого ефекту та визначайте свій бренд як лідера у світі інтернет-сервісів, забезпечуючи більший успіх та розквіт для вашого бізнесу!</p>
          </div>
        </div>
        <div className='bottom'>
            <Link to="/advertisement" className='myButton'>Реклама</Link>
        </div>
      </div>
    </div>  
  );
}

export default Content;
