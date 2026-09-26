import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    camera.position.z = 40;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x10b981, 2, 100);
    pointLight1.position.set(20, 20, 20);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x06b6d4, 2, 100);
    pointLight2.position.set(-20, -20, 10);
    scene.add(pointLight2);

    // Particle Network
    const particleCount = 220;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x10b981);
    const color2 = new THREE.Color(0x06b6d4);
    const color3 = new THREE.Color(0x8b5cf6);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 85;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 85;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60;

      const mixColor = i % 3 === 0 ? color1 : i % 3 === 1 ? color2 : color3;
      colors[i * 3] = mixColor.r;
      colors[i * 3 + 1] = mixColor.g;
      colors[i * 3 + 2] = mixColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.65,
      vertexColors: true,
      transparent: true,
      opacity: 0.8
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Floating Cubes
    const cubesGroup = new THREE.Group();
    const cubeMaterials = [
      new THREE.MeshStandardMaterial({ color: 0x10b981, wireframe: true, transparent: true, opacity: 0.4 }),
      new THREE.MeshStandardMaterial({ color: 0x06b6d4, wireframe: true, transparent: true, opacity: 0.4 }),
      new THREE.MeshStandardMaterial({ color: 0xf59e0b, wireframe: true, transparent: true, opacity: 0.3 })
    ];

    const cubes = [];
    for (let i = 0; i < 12; i++) {
      const size = Math.random() * 2.5 + 1;
      const cubeGeo = new THREE.BoxGeometry(size, size, size);
      const cubeMat = cubeMaterials[i % cubeMaterials.length];
      const cube = new THREE.Mesh(cubeGeo, cubeMat);

      cube.position.x = (Math.random() - 0.5) * 60;
      cube.position.y = (Math.random() - 0.5) * 50;
      cube.position.z = (Math.random() - 0.5) * 40;

      cube.userData = {
        rotSpeedX: (Math.random() - 0.5) * 0.02,
        rotSpeedY: (Math.random() - 0.5) * 0.02,
        initialY: cube.position.y
      };

      cubes.push(cube);
      cubesGroup.add(cube);
    }
    scene.add(cubesGroup);

    // Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.001;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.001;
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      camera.position.x = targetX * 20;
      camera.position.y = -targetY * 20;
      camera.lookAt(scene.position);

      particles.rotation.y += 0.001;
      particles.rotation.x += 0.0005;

      const time = Date.now() * 0.001;
      cubes.forEach((c) => {
        c.rotation.x += c.userData.rotSpeedX;
        c.rotation.y += c.userData.rotSpeedY;
        c.position.y = c.userData.initialY + Math.sin(time * 2 + c.position.x) * 1.5;
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div id="three-canvas-container" ref={containerRef} />;
};

export default ThreeBackground;
