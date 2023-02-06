import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const renderer = new THREE.WebGLRenderer();
renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x212b31);
scene.position.set(0, 0, 0);

const camera = new THREE.PerspectiveCamera(
  75,
  innerWidth / innerHeight,
  0.1,
  1000
);

const orbit = new OrbitControls(camera, renderer.domElement);
camera.position.set(60, 105, 75);

const keyLight = new THREE.DirectionalLight(0xffffff, 0.8);
keyLight.position.set(120, 100, 120);
scene.add(keyLight);

const fillLight = new THREE.DirectionalLight(0xffffff, 0.4);
fillLight.position.set(-120, 100, 120);
scene.add(fillLight);

const backLight = new THREE.DirectionalLight(0xffffff, 0.7);
backLight.position.set(0, 100, -150);
scene.add(backLight);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.15);
scene.add(ambientLight);

// const keyHelper = new THREE.DirectionalLightHelper(keyLight, 5);
// scene.add(keyHelper);

// const fillHelper = new THREE.DirectionalLightHelper(fillLight, 5);
// scene.add(fillHelper);

// const backLightHelper = new THREE.DirectionalLightHelper(backLight, 5);
// scene.add(backLightHelper);

let step = 0;

function animate() {
  orbit.update();
  step++;
  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);

window.addEventListener("resize", () => {
  renderer.setSize(innerWidth, innerHeight);
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
});

let animimationIsDone = false;

function cameraAnimation() {
  if (!animimationIsDone) {
    animimationIsDone = true;
    sceneTL
      .to(camera.position, {
        x: 60,
        y: 27,
        z: 85,
        duration: 1,
        onUpdate: function () {
          camera.lookAt(0, 0, 0);
        },
      })
      .to(camera.position, {
        x: -60,
        y: 15,
        z: 55,
        duration: 2,
        onUpdate: function () {
          camera.lookAt(0, 0, 0);
        },
      })
      .to(camera.position, {
        x: -35,
        y: 10,
        z: 0,
        duration: 2,
        onUpdate: function () {
          camera.lookAt(-40, 10, 0);
        },
      })
      .to(camera.position, {
        x: 35,
        y: 15,
        z: 15,
        duration: 2,
        onUpdate: function () {
          camera.lookAt(0, 0, 0);
        },
      })
      .to(camera.position, {
        x: 50,
        y: 20,
        z: 75,
        duration: 2,
        onUpdate: function () {
          camera.lookAt(0, 0, 0);
        },
      })
      .to(camera.position, {
        x: 60,
        y: 100,
        z: 115,
        duration: 2,
        onUpdate: function () {
          camera.lookAt(0, 0, 0);
        },
      })
      .to(camera.position, {
        x: 90,
        y: 175,
        z: 145,
        duration: 1,
        onUpdate: function () {
          camera.lookAt(0, 0, 0);
        },
      });
  }
}


window.addEventListener("load", cameraAnimation);
