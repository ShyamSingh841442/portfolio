import '../index.css'
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaSquareXTwitter} from "react-icons/fa6"
import {FaInstagram} from "react-icons/fa"
import {motion} from "framer-motion"


const Navbar=()=>{

    return (
        <nav className="mb-20 flex items-center justify-between py-2">
            <motion.div whileHover={{scale:1,rotate:360, color:"#3498db"}} style={{ cursor: "pointer" }}initial={{opacity:0, scale:0.1}} animate={{opacity:1,scale:1.5}} transition={{duration:2}} className="flex flex-shrink-0 items-center">
                <span id="logo"onClick={()=>window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ","_blank")}>SK</span>
            </motion.div>
            <motion.div initial={{opacity:0, y:-100}} animate={{opacity:1,y:0}} transition={{duration:0.8,delay:1.5}} className="m-7 flex items-center justify-center gap-5 lg:text-2xl">
            <motion.div
            initial={{ opacity: 1 }}
            whileHover={{ scale: 1.4 }}
            transition={{duration:0.5}}
            style={{ display: "inline-block", cursor: "pointer" }}>
            <FaLinkedin onClick={()=>window.open("https://www.linkedin.com/in/shyam-kumar-9b0b38259/","_blank")}/>
        </motion.div>
        <motion.div
            initial={{ opacity: 1 }}
            whileHover={{ scale: 1.4 }}
            transition={{duration:0.5}}
            style={{ display: "inline-block", cursor: "pointer" }}>
            <FaGithub onClick={()=>window.open("https://github.com/ShyamSingh841442","_blank")}/>
        </motion.div>
        <motion.div
            initial={{ opacity: 1 }}
            whileHover={{ scale: 1.4 }}
            transition={{duration:0.5}}
            style={{ display: "inline-block", cursor: "pointer" }}>
            <FaSquareXTwitter onClick={()=>window.open("https://x.com/Shyamsingh8414","_blank")}/>
        </motion.div>
        <motion.div
            initial={{ opacity: 1 }}
            whileHover={{ scale: 1.4 }}
            transition={{duration:0.5}}
            style={{ display: "inline-block", cursor: "pointer" }}>
            <FaInstagram onClick={()=>window.open("https://www.instagram.com/shyam_singh110/","_blank")}/>
        </motion.div>
                
                
                
            </motion.div>
        </nav>
    )
}

export default Navbar