import { MdLanguage  } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="mt-20">
            <footer className="footer p-10 bg-[#1B2132] text-xl text-white">
  <aside>
  <Link to="/"><img className="w-36" src="./logo.png" alt="logo" /></Link>
    <p>Thank you for choosing Hotel Relax. <br /> Your perfect getaway awaits.</p>
    <div className="flex flex-col gap-3 mt-5 text-white">
                <div className="flex items-center gap-3 text-base font-medium"><IoHome /> Chirirbandar, Dinajpur, Bangladesh</div>
                <div className="flex items-center gap-3 text-base font-medium"><FaPhoneVolume /> 01787448412</div>
                <div className="flex items-center gap-3 text-base font-medium"><IoIosMail /> itzmesojib@gmail.com</div>
            </div>
  </aside> 
  <nav>
    <h6 className="footer-title text-2xl text-white font-semibold">Links</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Services</a>
    <a className="link link-hover">Team</a>
    <a className="link link-hover">Gallery</a>
    <a className="link link-hover">Terms</a>
    <a className="link link-hover">Privacy Policy </a>
  </nav> 
  <nav>
    <h6 className="footer-title text-2xl text-white font-semibold">Useful Links</h6>
      <Link to="/" className="link link-hover">Home</Link>
      <Link to="blogs" className="link link-hover">Blog</Link>
    <a className="link link-hover">FAQ</a>
    <a className="link link-hover">Testimonials</a>
    <Link to="contact" className="link link-hover">Contact</Link>
  </nav> 
  <nav>
    <h6 className="footer-title">Newsletter</h6> 
    <p className="">Stay updated with curated content, <br /> expert insights, tips, and community <br />highlights in our informative <br /> newsletter. Subscribe now</p>
    <form className="w-full flex flex-col gap-5" >
    <input  type="text" placeholder="Your Email" className="input text-black w-full max-w-xs" required />
    <button className="btn w-full btn-error">Subscribe Now</button>
    </form>
    
  </nav>
</footer>
        </div>
    );
};

export default Footer;