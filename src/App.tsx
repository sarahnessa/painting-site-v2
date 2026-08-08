import { Modal } from "./Modal"
import { NavMenu } from "./NavMenu"

import avatar from "./assets/sarah-avatar.png"
import collage from "./assets/collage.png"
import "./App.css"


export function App() {
  
  return (
    <>
    <div className="flex min-h-svh">
        <div className="flex min-w-0 flex-col leading-loose">
          <div>
            <Modal />
            <NavMenu />
            <section id="center" className="p-6">
              <div id="main-headline">
                <img id="avatar" src={avatar} alt="Sarah Nessa Avatar" width="70" />
                <h1>Oil painter</h1>
              </div>
              <div id="about-me">
                <p>Hello, I'm Sarah Nessa, an oil painter interested in creating original pieces that reflect my experiential and creative perspective, in a nutshell. Aside from some years of various art class K-University level, I have shadowed with artist David Molesky. </p>
              </div>
            </section>

            <section id="bottom">
              <img id="collageImg" src={collage} alt="Sarah Nessa oil painting collage" />
            </section>
          </div>
        </div>
      </div>
      </>
  )
};


export default App
