

function Projects() {
    return ( <>
       <div id="projects">
        <div class="header">
            <h1>My Projects</h1>
        </div>
        <div id="card-holder">
            <div class="card" >
                <img src={require("../assets/cssCreature.png")}  class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">CSS Fantasy Dwarf</h5>
                    <p class="card-text">The Project uses html and CSS to portray a fantasy dwarf. </p>
                    <a href="https://codepen.io/Boone-of-Ages/pen/abJyoYv" target="_blank" class="card-link">View Project Here</a>
                </div>
            </div>
            <div class="card" >
                <img src={require("../assets/staticLayout.png")} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Static Layout</h5>
                    <p class="card-text">a copy layout of the Kast website using only html and css</p>
                    <a href="https://jbdrake42.github.io/Static-Layout/" target="_blank" class="card-link">View Project Here</a>

                </div>
            </div>
            <div class="card" >
                <img src={require("../assets/APIProject1.png")} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Studio Ghibli Film Recommender</h5>

                    <p class="card-text">Pulls from an API to randomly display a Studio Ghibli film</p>
                    <a href="https://jbdrake42.github.io/Api-Project-1/" target="_blank" class="card-link">View Project Here</a>

                </div>
            </div>
            <div class="card">
                <img src={require("../assets/ApiProject2.png")} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Superhero Team Randomizer</h5>
                    <p class="card-text"> Generates a superhero team from a comic book character API</p>
                    <a href="https://jbd-api-project-2.web.app/" target="_blank" class="card-link">View Project Here</a>

                </div>
            </div>
            <div class="card">
                <img src={require("../assets/Untitled.png")} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">FWW: Vault</h5>
                    <p class="card-text"> Keep track of your Fallout Wasteland Warfare miniatures</p>
                    <a href="https://fww-client.herokuapp.com/home" target="_blank" class="card-link">View Project Here</a>

                </div>
        </div>
    </div>
    </div>
    </> );
}

export default Projects;