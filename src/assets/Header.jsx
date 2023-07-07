	import { useRef } from "react"
	import logo from "./img/logo-light.png"
	import "./header.css"
	import {Link}  from "react-scroll"


	function Header() {

		let navRef = useRef();
		let navShow = () =>{
			navRef.current.classList.toggle('active');
		}
		// const [sticky, setSticky] = useState(false);
		// useEffect(() =>{
		//     const handleScroll = () =>{
		//         setSticky(window.scrollY > 200)
		//     }
		//     window.addEventListener('scroll', handleScroll)
		//     return() => window.removeEventListener('scroll',handleScroll)
		// })
	  return (
		<div>
			<div className= "navbar">
				<div className="logo">
					<img src={logo} alt="" />
				</div>
					<i onClick={navShow}  id='icon' class="fa-solid fa-bars"></i>
				<div ref={navRef} className="navitems">
					<ul>
						<li id='active'><Link to="home" spy={true} smooth={true} offset={-100} duration={500}>Home</Link></li>
						<li><Link to="Services-area" spy={true} smooth={true} offset={-100} duration={500}>Services</Link></li>
						<li><Link to="about" spy={true} smooth={true} offset={-100} duration={500}>About</Link></li>
						<li><Link to="Amazing-Features" spy={true} smooth={true} offset={-100} duration={500}>Features</Link></li>
						<li><Link to="Plans" spy={true} smooth={true} offset={-100} duration={500}>Pricing</Link></li>
						<li><Link to="Testimonials" spy={true} smooth={true} offset={-100} duration={500}>Testimonials</Link></li>
						<li><Link to="Team" spy={true} smooth={true} offset={-100} duration={500}>Team</Link></li>
						<li><Link to="Contect" spy={true} smooth={true} offset={-100} duration={500}>Contect</Link></li>
						<li id='active-1'>Signup</li>
					</ul>
				</div>
			</div>

		 </div>
	  )
	}

	export default Header