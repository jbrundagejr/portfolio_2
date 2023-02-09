import { cubeLength } from "~~/util/constants"

export const cubeData = [
  {
    title: "Welcome",
    color: 0xffffff,
    pos: {
      x: 0,
      y: 0,
      z: 0
    },
    rotationX: true
  },
  {
    title: "Projects",
    color: 0xffff00,
    pos: {
      x: cubeLength / 2,
      y: cubeLength / 2,
      z: 0
    },
    rotationY: true
  },
  {
    title: "About",
    color: 0xfff000,
    pos: {
      x: 0,
      y: cubeLength / 2,
      z: -cubeLength / 2
    },
  },
  {
    title: "Contact",
    color: 0xff0000,
    pos: {
      x: 0,
      y: cubeLength,
      z: 0
    },
    rotationX: true
  },
  {
    title: "",
    color: 0xf00000,
    pos: {
      x: -cubeLength /2,
      y: cubeLength /2,
      z: 0
    },
    rotationY: true
  },
  {
    title: "",
    color: 0x000000,
    pos: {
      x: 0,
      y: cubeLength /2,
      z: cubeLength /2,
    }
  },
]