import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import Title from "../components/Title"


export default function Home() {
  return ( 
  <div className="w-screen h-screen bg-hero">

<header></header>

<div className="intro-main container mt-20 mx-auto flex justify-center justify-items-center text-center">
<div className="intro flex  justify-center justify-items-center text-center text-white ">

<div className="row">
  <div className="col-2"><h2>Hello, I&apos; m</h2>
  <h1>Gianmarco Ruffi</h1>
  <p><span>Full-Stack Web Developer</span> | <span>Italy</span></p></div>
  </div>
</div>

</div>


<ul className="contacts flex items-center justify-center text-center text-white">

<li>
<a href="https://www.linkedin.com/in/gianmarco-ruffi-986b85144/">  <FontAwesomeIcon
        icon={faLinkedin}
        
      /></a>

</li>

<li>
<a href="mailto:gianmarco.ruffi@outlook.it"><FontAwesomeIcon icon={faEnvelope} /></a>

</li>

<li>
<a href="https://github.com/GianmarcoRuffi"><FontAwesomeIcon icon={faCodeBranch} /></a>

</li>

<li>
<a href="#"><FontAwesomeIcon icon={faScrewdriverWrench} /></a>

</li>

</ul>




    
  </div>)

    
}
