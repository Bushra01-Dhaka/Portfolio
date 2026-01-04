import Banner from "../../Component/Banner"
import AboutMe from "../AboutMe/AboutMe"
import Contact from "../ContactMe/Contact"
import MyProjects from "../MyProjects/MyProjects"
import Projects from "../MyProjects/Projects"
import Skills from "../Skills/Skills"


const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <AboutMe></AboutMe>
        <Skills></Skills>
        {/* <MyProjects></MyProjects> */}
        <Projects></Projects>
        <Contact></Contact>
    </div>
  )
}

export default Home