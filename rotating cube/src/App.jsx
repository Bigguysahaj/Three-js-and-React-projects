import { useEffect } from 'react';

import * as THREE from 'three';
import './App.css'

function App() {
  useEffect(() => {
    // create a scene, that will hold all our elements such as objects, cameras and lights.
    //this is a standard way to start in three js
    const scene = new THREE.Scene();

    // setting up camera perspective
    //hover over the perspective camera to see the parameters.
    const camera = new THREE.PerspectiveCamera(
      75, 
      window.innerWidth / window.innerHeight,
      0.1,
      1000);

      // camera position
      camera.position.z = 96;

      const canvas = document.getElementById('myThreeJsCanvas');
      const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        //Anti-aliasing is the smoothing of jagged edges in digital images by averaging the colors of the pixels at a boundary.
        
      });
      renderer.setSize(window.innerWidth, window.innerHeight),
      document.body.appendChild(renderer.domElement);


      // this is just to see the shapes, otherwise it will be black
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      ambientLight.castShadow = true;
      scene.add(ambientLight);

      const spotLight = new THREE.SpotLight(0xffffff, 1);
      spotLight.castShadow = true;
      spotLight.position.set(0, 64, 32);
      scene.add(spotLight);


      // create a cube, and for that we need a box geometry

      const boxGeometry = new THREE.BoxGeometry(32, 32, 32);
      const boxMaterial = new THREE.MeshNormalMaterial({ color: 0x00ff00 });
      const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
      scene.add(boxMesh);

      const animate = () => {
        boxMesh.rotation.x += 0.01;
        boxMesh.rotation.y += 0.01;
        renderer.render(scene, camera);
        window.requestAnimationFrame(animate);
      };
      animate();
    }, []);
  

  return (
    <div>
      <canvas id="myThreeJsCanvas" />
    </div>
  );
}

export default App;
