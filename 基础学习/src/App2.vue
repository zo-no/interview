<script setup lang="ts">
import * as THREE from 'three';

const scene = new THREE.Scene();//建立场景
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);//建立相机

const renderer = new THREE.WebGLRenderer();//建立渲染器
renderer.setSize(window.innerWidth, window.innerHeight);//设置渲染器大小
document.body.appendChild(renderer.domElement);//将渲染器添加到body中

//添加立方体
const geometry = new THREE.BoxGeometry(1, 1, 1);//建立几何体
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });//建立材质
const cube = new THREE.Mesh(geometry, material);//建立网格
scene.add(cube);//将网格添加到场景中

camera.position.z = 5;//设置相机位置

//渲染场景
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
}
animate();

</script>

<template></template>

<style scoped></style>
