import my_pic from "../assets/bushra.png"

const AboutMe = () => {
  return (
    <div>
         <div className="mx-auto text-center border-2 rounded-2xl shadow-2xl shadow-primary"> 
            <img src={my_pic} alt="" />
          </div>
    </div>
  )
}

export default AboutMe