import {Link} from 'react-router-dom'
import Image from "../images/Header-image.png"
const Header = () => {
  return (
    <header className="main_header">
        <div className="container main_header_container">
            <div className="main-header-left">
                <h4>#YogaElevatesLife</h4>
                <h1>Balance Your Body, Mind, and Soul.</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum esse iste id provident non minus.</p>
                <Link to="/plans" className='btn lg '>Get Started</Link>
            </div>
            <div className="main-header-right">
                <div className="main_header_circle"></div>
                    <div className="main_header_image">
                        <img src={Image} alt="header-image"/>
                    </div>
                </div>
            </div>
        
    </header>
  )
}

export default Header
