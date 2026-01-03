import Banner from "../../Component/Banner"
import AboutMe from "../AboutMe/AboutMe"
import MyProjects from "../MyProjects/MyProjects"
import Skills from "../Skills/Skills"


const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <AboutMe></AboutMe>
        <Skills></Skills>
        <MyProjects></MyProjects>
    </div>
  )
}

export default Home