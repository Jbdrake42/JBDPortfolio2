


function About() {
    return ( 
        <div>
             <div id="about">
                 <div id='portrait'>
                 <div id="portrait2">
                <img id="pic" src={require("../assets/2668.jpg")}  alt=""/>
                <h1> James Boone Drake</h1>
                <p><i>Creation is an act of sheer will</i></p>

           
            <div id="social">
               
                    <a href="https://www.linkedin.com/in/james-drake-aab509217/" rel="noreferrer" target="_blank"><img alt="Linkedin icon" class="socialIcon" src={require("../assets/linkedin.png")} /></a>
                    <a href="https://github.com/Jbdrake42" rel="noreferrer" target="_blank"><img class="socialIcon"  src={require("../assets/github.png")} alt="github Icon" /></a>
                    <a href="https://docs.google.com/document/d/1dCFtWQpkjbj-JKbHyc8JYa-BzOMjiDez6poK--a8S2c/edit?usp=sharing" target="blank"><img class="socialIcon" alt="resume icon" src={require("../assets/Resume.png")} /></a>
                
            </div>
        </div>
        </div>
        <div id="bioSkill">
            <div id="bio">
                <div class="header">
                    <h1>My Journey</h1>
                </div>

                <p id="bioText"> My professional journey began in 2012, when I started to work in fast food. There I
                    learned
                    how to work hard, keep my cool under high stress,
                    and work with coworkers. After some time, I transitioned to Warehouse work. In this environment I
                    learned how to work with advance technology
                    and how to work on deadlines. After several years of warehouse work, I began to desire more cerebral
                    employment and joined the ElevenFifty
                    academies web development program. </p>
            </div>
            <div id="skills">
                <div class="header">
                    <h1>What I am Familiar with</h1>
                </div>
                <div id="skillList">
                    <img src={require("../assets/klipartz.com.png")}  alt="" class="skillIcon" />
                    <img src={require("../assets/klipartz.com (1).png")}  alt="" class="skillIcon" />
                    <img src={require("../assets/klipartz.com (2).png")}  alt="" class="skillIcon" />
                    <img src={require("../assets/klipartz.com(4).png")}  alt="" class="skillIcon" />
                </div>

            </div>
        </div>
        </div>
    </div>
        
     );
}

export default About;