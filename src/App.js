import React, { lazy } from "react";
import "./App.css"
import Logo from "./Img/logo.svg"
import Babe from "./Img/freshwork.png"
import This from "./Img/lazy.png"
import Switch from "./Img/switch.png"
import Dolls from "./Img/Dolls.jpg"
import Stack from "./Img/Stack.png"
import Compass from "./Img/compas2.png"
import Pearson from "./Img/pearson.jpg"
import Brewdog from "./Img/Brewdog.png"
import Bridgestone from "./Img/Bridgestone.png"
import Travix from "./Img/Travix.png"
import Klarna from "./Img/Klarna.png"
import Vice from "./Img/Vice.png"
import Deichmann from "./Img/Deichmann.png"
import Waterstons from "./Img/Waterstone.png"
import Fiverr from "./Img/Fiverr.png"
import Exabytes from "./Img/Exabytes.png"
import Schoeller from "./Img/schoeller.png"
import Multichoice from "./Img/Multichoice.png"
import Bluenile from "./Img/Bluenile.png"
import Trainline from "./Img/Trainline.png"
import Engel from "./Img/Engel.png"
import Itv from "./Img/Itv.png"
import Delivery from "./Img/Delivery.png"
import Katz from "./Img/Katz.png"
import String from "./Img/string.png"
import String2 from "./Img/string2.png"
import Mhen from "./Img/mhen.png"
import Mhens from "./Img/mhens.png"
import Shima from "./Img/shima.png"
import Woman from "./Img/woman.png"
import Screenshot from "./Img/screenshot.png"


function App (){
  return(

    <div className="Container">
      <div className="Header">
        <div className="HeaderWrapper">
          <div><img src={Logo} className="Logo"/></div>
          <div className="Nav">

            <p>Products</p>
            <p>Plaform</p>
            <p>Company</p>
            <p>Resources</p>
            <p>Customers</p>
            <p>Support</p>
          
          </div>
          
        </div>  
      </div>

      <div className="HeroHolder">
        <div className="HeroWrapper">
          <div className="Left">
         <h1 className="Heads">Delight made <br/>easy </h1>

          <p className="PMan">We make it fast and easy for your business to
            delight customers and employees
          </p>
          <div className="but">
          <button className='but1'>Free Trials</button>
          <button className='but2'>Contact Sales</button>
          </div>

          </div>
          <div className='Right'>
            <img src={Babe} className="Baby"/>
          </div>

        </div>
      </div>
    
      <div className='lazyholder'>
      <div className='lazywrapper'>
      <div>
       <img src={This} className='this'/>

      </div>
      <div className='that'>
          <h1>Try the business software used by over<br/>50,000 companies across the globe to
          <br/>exceed customer and emplyee<br/>expectations.</h1>
          <div className='layer'>
            <div className='server'>
              <button className='b1'>Customer Service</button>
              <button className='b2'>HR Management</button>
              <button className='b3'>Marketing Automation</button>
            </div>
            <div className='server2'>
            <button className='b4'>IT Service Management</button>
            <button className='b5'>Sales Automation</button>
            <button className='b6'>All Products & Trials</button>
          </div>
          </div>
        </div>
      </div>
      
      

    </div>
    <div className='friction'>
      <div className='toptext'>
       <h2 className='less'>Frictionless, simple, easy</h2>
       <p>Freshworks makes it fast and easy for businesses to delight their customers and employees.</p>
       <p>We take a fresh approach to how businesses discover, engage with, and 
       realize value from software throughout their journey.</p>
      </div>
      <div className='imgtext'>
        <div className='leftwrapper'>
          <div className='switchwrapper'>
          <div><img src={Switch} className='switch'/></div>
          <div className='switchtext'>
            <h3>Get up and running with no barriers</h3>
            <p>Try or purchase our software directly from our website<br/>
            and onboard in a matter of days, not month</p>
          </div>
        </div>
      </div>  
      <div className='dollswrapper'>
        <div><img src={Dolls} className='dolls'/></div>
        <div className='dollstext'>
          <h3>Choose your pricing plan</h3>
          <p>Our pricing plans are designed for modern<br/>
          business use cases and affordable for<br/>
          organizations of all sizes.</p>
        </div>
      </div>

      </div>
      
        <div className='rightwrapper'>
          <div className='stackwrapper'>
          <div><img src={Stack} className='stack'/></div>
          <div className='stacktext'>
             <h3>Build and customize as you go</h3>
            <p>Extend and tailor experiences to meet your unique<br/>
            business needs, with low-code development and over 1,100<br/>
            custom apps made available on our marketplace</p>
          </div>
        </div>
        <div className='compaswrapper'>
          <div><img src={Compass} className='compass'/></div>
           <div className='compastext'>
           <h3>Create value, fast</h3>
          <p>Accelerate your team's productivity and efficiency<br/>
          with modern automation and collaboration tools, to<br/>
          get tangible results in no time.</p>
        </div>

      </div>
      </div>
      </div>
      <div className='trusted'>
        <div className='trustext'>
        <h2 className='big'>Trusted by 50K+ customers big and small</h2>
        <p className='provider'>We are a leading provider of modern SaaS solutions that solve multiple, complex
        business problems to companies of all sizes. Businesses from<br/>more than 120 countries around the 
        world use Freshworks' products to delight their customers and employees every day</p>
      </div>
    </div>
    <div className='trustimg'>
        <div className='timg'>
        <img src={Pearson}/>
        <img src={Brewdog}/>
        <img src={Bridgestone}/>
        <img src={Travix}/>
        <img src={Klarna}/>
        <img src={Vice}/>
        </div>
        <div className='timg2'>
        <img src={Deichmann}/>
        <img src={Waterstons}/>
        <img src={Fiverr}/>
        <img src={Exabytes}/>
        <img src={Schoeller}/>
        <img src={Multichoice}/>
        </div>
        <div className='timg3'>
        <img src={Bluenile}/>
        <img src={Trainline}/>
        <img src={Engel}/>
        <img src={Itv}/>
        <img src={Delivery}/>
        <img src={Katz}/>
      </div>
    </div>

    
      <div className='quote'>
        <div className='quotewrapper'>
        <img src={String} className='string'/>
        <img src={Waterstons} className='waterstons2'/>
        <img src={String2} className='string2'/>
        </div>
        <div className='quotext'>
          <p className='par'>"The Freshworks team was a great asset during implementation and continue to be a key partner<br/>
          for Waterstons as we look to further mature and improve our services to customers, tailored to<br/>
          their specific needs."</p>
          <h4>Alex Bookless, Head of Managed Services, Waterstons</h4>
        </div>
      </div>
      <div className='aspire'>
        <div className='aspiretop'>
          <h5>We aspire to be one of the most loved companies in the world</h5>
        </div>
        <div className='aspirewrapper'>
          <div className='aspiredown'>
            <div className='mhenlay'>
             <img src={Mhen} className='mhen'/>
              <h2>Culture</h2>
              <p>A culture that supports high-<br/>quality work, joy and pride in that<br/>
              work, speed to execution, and<br/>intense customer focus</p></div>
             <div className='mhenslay' className='mhenlay'>
             <img src={Mhens} className='mhens'/>
             <h2>Diversity</h2>
             <p>Full-spectrum diversity, equity,<br/>and inclusion are key priorities for<br/>
             us</p></div>

            <div className='shimalay'>
                <img src={Shima} className='shima'/>
                <h2>Experience</h2>
                <p>Focus on enhancing the team<br/>experience by strengthening our<br/>
                managers' leadership capabilities</p></div>
                <div className='womanlay'>
                 <img src={Woman} className='woman'/>
                 <h2>Team</h2>
                 <p>4,000 employees and growing in<br/>offices across India, US, Europe,<br/>
                 and Australia</p></div>
            
            
            </div>
         
          </div>
          <button className='b7'>SEE LIFE AT FRESHWORKS</button>
        </div>

          <div className='ready'>
           <div className='readytext'>
          <h1>Ready to get started?</h1>
          <p>Join our community of 50,000+ companiesof all sizes who use Freshworks' modern SaaS
          products to make it fast and easy to<br/>delight their customers and employees</p>
          <button className='b8'>CONTACT SALES</button>
        </div>
      </div>

      <div className='foot'>
        <img src={Screenshot} className='screenshot'/>
      </div>

      <div className="footer">
        <div className="terms">
         Terms of service - Privacy Notice - Takedown Policy - GDPR - Security - CS Policy - Tax FAQs - Unsubscribe</div>


         <div className="copyright">Copyright (c) Freshworks Inc. All Rights Reserved</div>

        </div>
    </div>
    
    
    
    
  )
    

     
}

export default App