import { Modal } from "./Modal"
import NavMenu from "./NavMenu.tsx";

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
                <p>Hello, I am Sarah Nessa, an oil painter dedicated to capturing personal experiences and unique perspectives through rich textures and light. I hold a Bachelor of Arts from UC Berkeley, where I studied Psychology and Pre-Medicine, a background that deeply informs my exploration of human emotion and perception on canvas.<br/><br/>My artistic foundation spans years of formal training from K-12 through university, complemented by an intensive mentorship under artist David Molesky. My original works have been featured in exhibitions throughout Berkeley and San Francisco, California.</p>
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
