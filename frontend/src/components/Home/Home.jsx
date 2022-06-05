import React, { useEffect } from 'react';
import "./Home.css";
import * as THREE from "three";
import moonImg from "../../Images/moon.jpg";
import venusImg from "../../Images/venus.jpg";
import SpaceImg from "../../Images/space.jpg";
import {Typography} from "@mui/material";
import TimeLine from '../TimeLine/TimeLine';
import {
  
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
  SiJava,
} from "react-icons/si";

const Home = () => {

  useEffect(() => {

    const textureLoader = new THREE.TextureLoader();
    const moonTexture = textureLoader.load(moonImg);
    const venusTexture = textureLoader.load(venusImg);
    const spaceTexture=textureLoader.load(SpaceImg);

    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000);
    camera.position.set(3,3,7);

    const canvas = document.querySelector(".homeCanvas")
    const renderer = new THREE.WebGLRenderer({canvas});

    const moonGeometry= new THREE.SphereGeometry(2,64,64);
    const moonMaterial = new THREE.MeshStandardMaterial({map : moonTexture});
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);

    const venusGeometry= new THREE.SphereGeometry(3,64,64);
    const venusMaterial = new THREE.MeshBasicMaterial({map : venusTexture});
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);
    venus.position.set(8,5,5);
    
    
    const pointLight = new THREE.PointLight(0xffffff, 1);
    const pointLight2 = new THREE.PointLight(0xffffff, 0.1);

    pointLight.position.set(8,5,5);
    pointLight2.position.set(-8,-5,-5);

    scene.add(moon);   
    scene.add(venus);
    scene.add(pointLight);
    scene.add(pointLight2);
    scene.background=spaceTexture;
   
    const constSpeed =0.01;
    window.addEventListener("mousemove", (e)=>{
      if(e.clientX <= window.innerWidth/2){
        moon.rotation.x -=constSpeed;
        moon.rotation.y +=constSpeed;

        venus.rotation.x -=constSpeed;
        venus.rotation.y +=constSpeed;
      }

      if(e.clientX > window.innerWidth/2){
        moon.rotation.x -=constSpeed;
        moon.rotation.y -=constSpeed;

        venus.rotation.x -=constSpeed;
        venus.rotation.y -=constSpeed;
      }

      if(e.clientY > window.innerHeight/2){
        moon.rotation.x -=constSpeed;
        moon.rotation.y +=constSpeed;

        venus.rotation.x -=constSpeed;
        venus.rotation.y +=constSpeed;
      }

      if(e.clientY <= window.innerHeight/2){
        moon.rotation.x -=constSpeed;
        moon.rotation.y -=constSpeed;

        venus.rotation.x -=constSpeed;
        venus.rotation.y -=constSpeed;
      }

    })
    
    

    const animate=()=>{
    requestAnimationFrame(animate); 
    moon.rotation.y +=0.001;
    venus.rotation.y +=0.001;
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
    }

    animate();


  }, [])
  
  return (<div className='home'>
    <canvas className='homeCanvas'></canvas>

    <div className='homeContainer'>
      <Typography variant="h3">TIMELINE</Typography>
      <TimeLine timelines={[1,2,3,4]}/>
    </div>

    <div className="homeSkills">
      <Typography variant="h3">SKILLS</Typography>
     <div className="homeCubeSkills">

      <div className="homeCubeSkillsFaces homeCubeSkillsFace1">

        <img src='https://encrypted-tbn0.gstatic.com/images%20?q=tbn:ANd9GcROQwMVXxN-yI7fdrLKyFcNajn3LyonNQknAQ&usqp=CAU' alt='face1'/>

      </div>

      <div className="homeCubeSkillsFaces homeCubeSkillsFace2">

        <img src='https://encrypted-tbn0.gstatic.com/images%20?q=tbn:ANd9GcROQwMVXxN-yI7fdrLKyFcNajn3LyonNQknAQ&usqp=CAU' alt='face2'/>

      </div>

      <div className="homeCubeSkillsFaces homeCubeSkillsFace3">

        <img src='https://encrypted-tbn0.gstatic.com/images%20?q=tbn:ANd9GcROQwMVXxN-yI7fdrLKyFcNajn3LyonNQknAQ&usqp=CAU' alt='face3'/>

      </div>

      <div className="homeCubeSkillsFaces homeCubeSkillsFace4">

        <img src='https://encrypted-tbn0.gstatic.com/images%20?q=tbn:ANd9GcROQwMVXxN-yI7fdrLKyFcNajn3LyonNQknAQ&usqp=CAU' alt='face4'/>

      </div>

      <div className="homeCubeSkillsFaces homeCubeSkillsFace5">

        <img src='https://encrypted-tbn0.gstatic.com/images%20?q=tbn:ANd9GcROQwMVXxN-yI7fdrLKyFcNajn3LyonNQknAQ&usqp=CAU' alt='face5'/>

      </div>

      <div className="homeCubeSkillsFaces homeCubeSkillsFace6">

        <img src='https://encrypted-tbn0.gstatic.com/images%20?q=tbn:ANd9GcROQwMVXxN-yI7fdrLKyFcNajn3LyonNQknAQ&usqp=CAU' alt='face6'/>

      </div> 
      </div>

      <div className="cubeShadow"></div>

      <div className="homeskillsBox">
          <SiJava/>
          <SiHtml5 />
          <SiCss3 />
          <SiJavascript />
          <SiMongodb />
          <SiExpress />
          <SiReact />
          <SiNodedotjs />
          <SiThreedotjs />
      </div>

      </div>
    </div>
  );
};

export default Home;