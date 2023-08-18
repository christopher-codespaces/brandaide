import Image from 'next/image'
import {NavBar,Hero,Step,Stats,Contact,Footer} from "../components"

export default function Home() {
  return (
        <>
            <NavBar />
            <Hero />
            <Stats />
            <Step />
            <Contact />
            <Footer />
        </>
  )
}
