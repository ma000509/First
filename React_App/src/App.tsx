import styles from "./style"
import {Billing,Business,Button,CTA,Card_Deal,Clients,FeedBackCard,Footer,GetStarted,Hero,NavBar,Stats,Testimonial} from "./components/index"

let App = () => (
    <div className = "bg-primary w-full overflow-hidden">
      <div className = {`${styles.paddingX} ${styles.flexCenter}`}>
          <div className= {`${styles.boxWidth}`}>
              <NavBar />
          </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
            <Hero />
        </div>

      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
            <Stats />
            <Billing />
            <Testimonial />
            <Business /> 
            <Card_Deal /> 
            <Clients /> 
            <CTA /> 
            <Footer /> 
            
        </div>

      </div>

    </div>
  );

export default App
