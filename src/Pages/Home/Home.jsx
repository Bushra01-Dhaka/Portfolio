import Banner from "../../Component/Banner"
import AboutMe from "../AboutMe/AboutMe"
import Contact from "../ContactMe/Contact"
import ContactMe from "../ContactMe/ContactMe"
import MyProjects from "../MyProjects/MyProjects"
import Skills from "../Skills/Skills"


const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <AboutMe></AboutMe>
        <Skills></Skills>
        <MyProjects></MyProjects>
        {/* <ContactMe></ContactMe> */}
        <Contact></Contact>
    </div>
  )
}

export default Home