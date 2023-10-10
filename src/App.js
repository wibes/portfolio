import { TypeAnimation } from "react-type-animation";
import linkedInIcon from "./assets/images/linkedIn.png";
import callIcon from "./assets/images/call.webp";
import gmailIcon from "./assets/images/gmail.png";
import profile from "./assets/images/profile.jpg";
import { Projects } from "./components/Projects";

function App() {
  const openLinkedInProfile = () => {
    window.open("https://in.linkedin.com/in/chandanmakhija");
  };

  const openGmail = () => {
    window.open("mailto:makhija.chandan@gmail.com");
  };

  const openCall = () => {
    window.open("tel:+919999382049");
  };

  return (
    <div class=" bg-black">
      <div class=" min-h-screen flex justify-center items-center">
        <div class="grid justify-items-center">
          <img class="w-60 h-50 rounded-full" src={profile} alt="profile" />
          <p class="text-white text-center font-semibold text-3xl mt-6">I am</p>
          <p class="text-white text-center font-bold text-5xl mt-2">
            Chandan Makhija
          </p>
          <TypeAnimation
            sequence={[
              "I am frontend engineer",
              1000,
              "I develop mobile applications",
              1000,
              "I develop web applications",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: "2em",
              display: "inline-block",
              color: "white",
            }}
            repeat={Infinity}
          />
          <div class="mt-20 flex">
            <button onClick={openLinkedInProfile} class="w-10 h-10">
              <img src={linkedInIcon} alt="linkedIn"></img>
            </button>
            <button onClick={openGmail} class="w-10 h-10 ml-10">
              <img src={gmailIcon} alt="gmail"></img>
            </button>
            <button onClick={openCall} class="w-10 h-10 ml-10">
              <img src={callIcon} alt="call"></img>
            </button>
          </div>
        </div>
      </div>
      <Projects />
    </div>
  );
}

export default App;
