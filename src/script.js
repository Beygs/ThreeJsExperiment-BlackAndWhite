import "./style.css";
import * as THREE from "three";
import gsap from "gsap";
import { SlowMo } from "gsap/all";
import randomWords from "random-words";

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
});

const random = document.querySelector(".random");

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xeeeeee });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

gsap.to(mesh.position, {
    duration: 5,
    x: Math.random() * 10 - 5,
    y: Math.random() * 10 - 5,
    z: Math.random() * 10 - 5,
    ease: SlowMo.ease.config(0.7, 0.7, false)
  });
  random.innerText = randomWords();

setInterval(() => {
  gsap.to(mesh.position, {
    duration: 5,
    x: Math.random() * 10 - 5,
    y: Math.random() * 10 - 5,
    z: Math.random() * 10 - 5,
    ease: SlowMo.ease.config(0.7, 0.7, false)
  });
  random.innerText = randomWords();
}, 5000);

// Animations
const animate = () => {
  window.requestAnimationFrame(animate);

  camera.lookAt(mesh.position);
  renderer.render(scene, camera);
};

animate();
