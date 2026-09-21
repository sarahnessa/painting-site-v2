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
                <p>Hello, I'm Sarah Nessa. I am an oil painter dedicated to creating original pieces that capture my personal experiences and creative perspective. My artistic background includes years of formal art education from K-12 through university, as well as mentorship shadowing artist David Molesky. My work has been proudly featured in various exhibitions throughout Berkeley and San Francisco, California.</p>
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
