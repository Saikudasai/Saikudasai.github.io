import './Footer.scss';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="Footer">
      <div className='left'>
        <div className="logo"></div>
        <Link to="/"><div className='text'></div></Link>
      </div>
      <div className='mid'>
        <p>Всі права захищено ©WindProvider</p>
      </div>
      <div className='right'>
        <div className='social_box'>
            <a href="https://www.instagram.com/"><InstagramIcon  sx={{ fontSize: 50 }}/></a>
            <a href="https://uk-ua.facebook.com/"><FacebookOutlinedIcon sx={{ fontSize: 50 }}/></a>
            <a href="https://ru.wikipedia.org/wiki/Google%2B"><GoogleIcon sx={{ fontSize: 50 }}/> </a> 
        </div>
      </div>
    </div>  
  );
}

export default Footer;
