import React from "react";
import styles from "./style";
import { Billing, Navbar, Business, CardDeal, Clients, CTA, Hero, Stats, Testimonials } from './components'

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden"> 
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal/>
        <Testimonials />
        <Clients />
        <CTA />
      </div>
    </div>
    </div>
  )
}

export default App;