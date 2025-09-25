# p5js-sketches
just messin' around &amp; trying new things...

---

## Table of Contents

* [About](#about)
* [Sketches](#sketches)
* [How to Run](#how-to-run)
* [Technologies Used](#technologies-used)
* [License](#license)
* [Contact](#contact)

---

## About

This repository showcases various interactive and generative art pieces created using the p5.js JavaScript library. Some sketches explore specific concepts - like user interaction or employing data structures to optimize performance - while other sketches are focused entirely on aesthetics. 

---

## Sketches

* **[wavePattern](wavePattern/)**
    * My first p5.js sketch!
    * This sketch mimics a wave pattern using particles rotating in a circle with an offset starting point

* **[slimeMold](slimeMold/)**
    * This sketch simulates slime mold (Physarum polycephalum)
    * It's based on [this paper by Jeff Jones](https://uwe-repository.worktribe.com/output/980579/characteristics-of-pattern-formation-and-evolution-in-approximations-of-physarum-transport-networks) and [this blog post by Sage Jenson](https://cargocollective.com/sagejenson/physarum)

* **[quadTreeExercise](quadTreeExercise/)**
    * This sketch implements a Quadtree data structure to simulate particles and their collisions
    * It's meant to demonstrate how quadtrees efficiently organize points in a 2D space, significantly improving performance, particularly for particle collisions, by subdividing the area and only checking relevant regions
    * Builds upon ideas from [particleSystemExercise](particleSystemExercise/)
 
* **[particleSystemExercise](particleSystemExercise/)**
    * This sketch uses mouse location to create rings of persisting particles
    * This sketch was my first experiment with particles that maintain state, each with persistent speed, direction, and evolving color, automatically decaying when off-screen
    * Builds upon ideas from [interactiveRotatingBlocks](interactiveRotatingBlocks/) and [interactiveGridMouseLocation](interactiveGridMouseLocation/)

 * **[interactiveGridMouseLocation](interactiveGridMouseLocation/)**
    * This sketch uses mouse location to draw a pattern of rectangles
    * aims to create a smoother experience than my previous interactive pieces, particularly for fast mouse movements
    * Builds upon ideas from [interactiveRotatingBlocks](interactiveRotatingBlocks/)

* **[interactiveRotatingBlocks](interactiveRotatingBlocks/)**
    * This sketch uses mouse location to create a trail of glowing, rotating blocks in an otherwise dark and static grid
    * This sketch is the result of my first experimentations with user interaction

* **[kineticTypography](kineticTypography/)**
    * This sketch served as an exercise for typography
    * This sketch uses the rotating particles concept and applies this to text.
    * Builds upon ideas from [wavePattern](wavePattern/)

---

## How to Run

There are a few ways to view these p5.js sketches:

### Option 1: View Online
While these sketches are maintained here on GitHub for version control and visibility, the **simplest way to experience them is directly through the p5.js Web Editor**, which can be found by visiting this link in your web browser:

[editor.p5js.org/RyJoGri/collections/d7MfvdxL8](https://editor.p5js.org/RyJoGri/collections/d7MfvdxL8)

Once you're there, select the sketch of your choosing and use the 'play' button in the top right corner to view the sketch
<br><br>

### Option 2: View Through GitHub Pages
Another great option to view these sketches is through **GitHub Pages**, which can be found by visiting this link in your web browser:

[ryangriffin.github.io/p5js-sketches/](https://ryangriffin.github.io/p5js-sketches/)

Once you're there, simply click on the name in the [Sketches](#sketches) section of this README to view the sketch.
<br><br>

### Option 3: Run Locally using a Local Server
This is not the recommended way to run p5.js sketches, but can be useful to avoid common cross-origin issues.

#### Prerequisites:

* **Node.js and npm (Node Package Manager)**: [Download and install Node.js](https://nodejs.org/en/download/) if you don't have it. npm comes bundled with Node.js.
* **`http-server` (or similar local server)**: Install `http-server` globally via npm:
    ```bash
    npm install -g http-server
    ```

#### Steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/RyanGriffin/p5js-sketches.git
    ```
2.  **Navigate into the repository directory:**
    ```bash
    cd p5js-sketches
    ```
3.  **Start the local server:**
    ```bash
    http-server
    ```
4.  Open your web browser and navigate to the address provided by `http-server` (usually `http://localhost:8080` or similar). You can then click on the folder for the sketch you wish to view.

---

## Technologies Used

* **p5.js** - A JavaScript library for creative coding.
* **HTML5**
* **CSS3**

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contact

* **Ryan Griffin** - ryanjoegriffin@gmail.com
* **GitHub Profile:** [https://github.com/RyanGriffin](https://github.com/RyanGriffin)
