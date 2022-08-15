import styles from "./style"

let App = () => (
    <div className='bg-primary w-full overflow-hidden'>
      <div className = {`${styles.paddingX} ${styles.flexCenter}`}>
          <div className= {`${styles.boxWidth}`}>
              navbar
          </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
            hero
        </div>

      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
            Stats
            Billing
            Testimonial
            Business 
            Card Deal 
            Clients 
            CTA 
            Footer 
            
        </div>

      </div>

    </div>
  );

export default App
