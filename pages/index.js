import Image from 'next/image'
import logo from '../public/mainspring.png'
import photo from '../public/andy2.jpg'
import brokerCheck from '../public/brokerCheck.png'
import { useRouter } from 'next/router'
import { PopupWidget } from 'react-calendly'

export default function Home() {
  const router = useRouter();

  function goToQuiz() {
      router.push('/startQuiz')
  }

return (
  <div>
    <PopupWidget text="Book a Discovery Call →" color="#00c247" url="https://calendly.com/jacobtrebil/15min" />
  <div className="logoContainer">
      <Image src={logo} width={200} height={45}></Image>
      <p className="clientLogin">Client Login</p>
  </div>
  <div>
      <h1>Helping you achieve your financial goals</h1>
      <p>Start with our short 7-step quiz to get your free Financial Health Report...</p>
      <button onClick={goToQuiz}>Get Free Report →</button>
  </div>
  <div className="graySection">
    <div className="aboutSection">
      <div className="inlineBlockSection">
        <Image src={photo} width={450} height={300} className="photo"></Image>
      </div>
      <div className="aboutTextSection">
        <h2>Meet Andy Rodgers</h2>
        <p>I Help a variety of Boeing Employees Plan Their Next Move.<br></br><br></br>

My approach is straightforward: I focus on YOUR Goals and Dreams <br></br>so that you can spend your precious time with family, <br></br>friends and loved ones... living the lifestyle that YOU deserve.<br></br><br></br>

See the problem is that most financial advisors offer cookie cutter advice <br></br>and don't really understand the ins-and-outs of the airline <br></br>manufacturer retirement system (VIP choices, pension payout options, <br></br>early retirement benefits) offered to employees.<br></br><br></br>

Having been born and raised here in Seattle, WA, many of my family, <br></br>friends and clients have worked for, and retired from, Boeing. <br></br>I am familiar with the current state of the local airline manufacturers, <br></br>and work on my clients behalf to maximize their benefits <br></br>based on their personal situation.<br></br><br></br>

As a CERTIFIED FINANCIAL PLANNER™, I am sworn to a <br></br>Fiduciary Standard to put my clients best interests before my own.</p>
      </div>
    </div>
  </div>
  <div className="buttonContainer">
      <button onClick={goToQuiz}>Take My Quiz →</button>
  </div>
  <div id="start-footer">
      <div id="legal" className="footer-section">
          <h3>About</h3>
          <p>Privacy Policy | Terms of Use<br></br>©Mainspring 2021</p>
      </div>
      <div id="contact" className="footer-section">
          <h3 className="footer-header">Contact</h3>
          <p>Office: (425)-274-2429<br></br>
              11400 SE 8th St  Ste 260<br></br>
              Bellevue, WA 98004-6470<br></br>
              andy@andyrodgers.com</p>
      </div>
      <div id="disclaimer" className="footer-section">
          <h3 className="footer-header">Disclaimer</h3>
          <p>Raymond James financial advisors may only conduct business with residents of the states and/or jurisdictions for which they are properly registered. Therefore, a response to a request for information may be delayed. Please note that not all of the investments and services mentioned are available in every state. Investors outside of the United States are subject to securities and tax regulations within their applicable jurisdictions that are not addressed on this site. Contact your local Raymond James office for information and availability.

Mainspring Wealth Advisors, LLC is an investment adviser registered in the State of Washington but does not provide any services or offer any investment advice. Investment advisory services are offered through Raymond James Financial Services Advisors, Inc. and securities are offered through Raymond James Financial Services, Inc., member FINRA/SIPC. Mainspring Wealth Advisors, LLC is not a registered broker/dealer and is independent of Raymond James Financial Services. The adviser may not transact business in states it is not appropriately registered, excluded or exempted from registration. Individualized responses to persons that involve either the effecting of transaction in securities, or rendering personalized investment advice for compensation, will not made without registration or exemption.

© 2021 Securities offered through Raymond James Financial Services, Inc., member FINRA / SIPC  
              </p>
      </div>
  </div>
  <div className="brokerCheckSection">
    <Image src={brokerCheck} width={135} height={30} className="brokerCheckImg"></Image>
  </div>
</div>
)};