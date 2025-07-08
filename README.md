# p5js-sketches
just messin' around &amp; trying new things...


---

## Table of Contents

* [About](#about)
* [Sketches](#sketches)
* [How to Run](#how-to-run)
* [Technologies Used](#technologies-used)
* [License](#License)
* [Contact](#contact)

---

## About

This repository showcases various interactive and generative art pieces created using the p5.js JavaScript library. Some sketches explore certain concepts - like user interaction or using data structures/algorithms to optimize performance - while other sketches are focused entirely on aesthetics. 

---

## Sketches

Here's a list of some the sketches included in this collection:

* **wavePattern**
    * My first p5.js sketch!
    * This sketch mimics a wave pattern using particles rotating in a circle with an offset starting point.

* **slimeMold**
    * This sketch simulates slime mold (Physarum polycephalum).
    * It's based on [this paper by Jeff Jones](https://uwe-repository.worktribe.com/output/980579/characteristics-of-pattern-formation-and-evolution-in-approximations-of-physarum-transport-networks) and [this blog post by Sage Jenson](https://cargocollective.com/sagejenson/physarum)

* **quadTreeExercise**
    * This sketch implements a Quadtree data structure.
    * It's meant to demonstrate how quadtrees efficiently organize points in a 2D space, significantly improving performance for tasks, such as particle collisions, by subdividing the area and only checking relevant regions.


---

## How to Run

There are a few ways to view these p5.js sketches:

### Option 1: View Online (Work In Progress)
I still need to set up **GitHub Pages** for this repository... But once I do, you can view the live sketches directly in your browser!


### Option 2: Run Locally using a Local Server
This is the recommended way to run p5.js sketches locally to avoid common cross-origin issues.

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


### Option 3: Open Directly in a Browser (May have Limitations)

You can open the `index.html` file of each sketch directly in your web browser. However, be aware that some p5.js features (like loading local files, images, or sounds) might be restricted by your browser's security policies when run this way.

1.  Download or clone the repository to your computer.
2.  Navigate to the specific sketch's folder (e.g., `p5js-sketches/wavePattern/`).
3.  Double-click the `index.html` file to open it in your default web browser.

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
