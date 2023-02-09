<template>
  <div id="cube"></div>
</template>

<script setup>
import { onMounted } from "vue"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import chroma from "chroma-js"
import { cubeData } from "~~/data/cube"
import { cubeLength } from "~~/util/constants"

onMounted(() => {
  const windowWidth = computed(() => {
    if (window.innerWidth < 1024) {
      return window.innerWidth - 48
    }
    return window.innerWidth - 60
  })
  init(windowWidth.value)
})

function init(windowWidth) {
  const canvasHeight = 800

  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(windowWidth, canvasHeight)
  renderer.setPixelRatio(window.devicePixelRatio)
  const canvas = document.getElementById("cube")
  canvas.appendChild(renderer.domElement)
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x212b31)
  scene.position.set(0, 0, 0)

  let viewSize = 50
  let aspectRatio = windowWidth / canvasHeight

  const camera = new THREE.OrthographicCamera(
    (-aspectRatio * viewSize) / 2,
    (aspectRatio * viewSize) / 2,
    viewSize / 2,
    -viewSize / 2,
    -1000,
    1000
  )

  const orbit = new OrbitControls(camera, renderer.domElement)
  camera.position.set(cubeLength, cubeLength * 1.5, 20)

  const keyLight = new THREE.DirectionalLight(0xffffff, 1)
  keyLight.position.set(120, 100, 120)
  scene.add(keyLight)

  const fillLight = new THREE.DirectionalLight(0xffffff, 0.5)
  fillLight.position.set(-120, 100, 120)
  scene.add(fillLight)

  const backLight = new THREE.DirectionalLight(0xffffff, 0.6)
  backLight.position.set(0, 100, -150)
  scene.add(backLight)

  const uplight = new THREE.DirectionalLight(0xffffff, 0.4)
  uplight.position.set(0, -100, 0)
  scene.add(uplight)

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
  scene.add(ambientLight)

  const keyHelper = new THREE.DirectionalLightHelper(keyLight, 5)
  scene.add(keyHelper)

  const fillHelper = new THREE.DirectionalLightHelper(fillLight, 5)
  scene.add(fillHelper)

  const backLightHelper = new THREE.DirectionalLightHelper(backLight, 5)
  scene.add(backLightHelper)

  const cubeGeo = new THREE.PlaneGeometry(cubeLength, cubeLength)

  function buildCube(data) {
    const cubeMat = new THREE.MeshLambertMaterial({
      color: data.color,
      side: THREE.DoubleSide,
    })
    const cubeMesh = new THREE.Mesh(cubeGeo, cubeMat)
    cubeMesh.position.set(data.pos.x, data.pos.y, data.pos.z)
    if (data.rotationY) {
      cubeMesh.rotation.y = Math.PI / 2
    }
    if (data.rotationX) {
      cubeMesh.rotation.x = Math.PI / 2
    }
    scene.add(cubeMesh)
  }

  cubeData.forEach((cube) => buildCube(cube))

  let step = 0

  function animate() {
    orbit.update()
    step++
    renderer.render(scene, camera)
  }

  renderer.setAnimationLoop(animate)

  window.addEventListener("resize", () => {
    renderer.setSize(windowWidth, canvasHeight)
    camera.aspect = windowWidth / canvasHeight
    camera.updateProjectionMatrix()
  })
}
</script>

<style scoped>
#cube {
  width: 100%;
  height: 100%;
  cursor: grab;
}

#cube:active {
  cursor: grabbing;
}
</style>
