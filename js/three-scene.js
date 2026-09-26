/**
 * 3D ANIMATED DATA BACKGROUND & INTERACTIVE CANVAS
 * Powered by Three.js
 */

class DataAnalytics3DScene {
    constructor() {
        this.container = document.getElementById('three-canvas-container');
        if (!this.container) return;

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(
            60,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        
        this.mouseX = 0;
        this.mouseY = 0;
        this.targetX = 0;
        this.targetY = 0;

        this.cubes = [];
        this.particles = null;

        this.init();
    }

    init() {
        // Setup Renderer
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.container.appendChild(this.renderer.domElement);

        // Camera Position
        this.camera.position.z = 40;

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        this.scene.add(ambientLight);

        const pointLight1 = new THREE.PointLight(0x10b981, 2, 100);
        pointLight1.position.set(20, 20, 20);
        this.scene.add(pointLight1);

        const pointLight2 = new THREE.PointLight(0x06b6d4, 2, 100);
        pointLight2.position.set(-20, -20, 10);
        this.scene.add(pointLight2);

        // Add 3D Elements
        this.createParticleNetwork();
        this.createFloatingDataCubes();
        this.createGlowingDataSphere();

        // Event Listeners
        window.addEventListener('resize', () => this.onWindowResize());
        window.addEventListener('mousemove', (e) => this.onMouseMove(e));

        // Start Animation Loop
        this.animate();
    }

    createParticleNetwork() {
        const particleCount = 200;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);

        const color1 = new THREE.Color(0x10b981); // Emerald
        const color2 = new THREE.Color(0x06b6d4); // Cyan
        const color3 = new THREE.Color(0x8b5cf6); // Purple

        for (let i = 0; i < particleCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 80;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 80;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 60;

            const mixColor = i % 3 === 0 ? color1 : i % 3 === 1 ? color2 : color3;
            colors[i * 3] = mixColor.r;
            colors[i * 3 + 1] = mixColor.g;
            colors[i * 3 + 2] = mixColor.b;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const material = new THREE.PointsMaterial({
            size: 0.6,
            vertexColors: true,
            transparent: true,
            opacity: 0.8
        });

        this.particles = new THREE.Points(geometry, material);
        this.scene.add(this.particles);
    }

    createFloatingDataCubes() {
        const group = new THREE.Group();
        const cubeCount = 12;

        const materials = [
            new THREE.MeshStandardMaterial({ color: 0x10b981, wireframe: true, transparent: true, opacity: 0.4 }),
            new THREE.MeshStandardMaterial({ color: 0x06b6d4, wireframe: true, transparent: true, opacity: 0.4 }),
            new THREE.MeshStandardMaterial({ color: 0xf59e0b, wireframe: true, transparent: true, opacity: 0.3 })
        ];

        for (let i = 0; i < cubeCount; i++) {
            const size = Math.random() * 2.5 + 1;
            const geometry = new THREE.BoxGeometry(size, size, size);
            const mat = materials[i % materials.length];
            const cube = new THREE.Mesh(geometry, mat);

            cube.position.x = (Math.random() - 0.5) * 60;
            cube.position.y = (Math.random() - 0.5) * 50;
            cube.position.z = (Math.random() - 0.5) * 40;

            cube.rotation.x = Math.random() * Math.PI;
            cube.rotation.y = Math.random() * Math.PI;

            cube.userData = {
                rotSpeedX: (Math.random() - 0.5) * 0.02,
                rotSpeedY: (Math.random() - 0.5) * 0.02,
                floatSpeed: Math.random() * 0.01 + 0.005,
                initialY: cube.position.y
            };

            this.cubes.push(cube);
            group.add(cube);
        }

        this.scene.add(group);
    }

    createGlowingDataSphere() {
        const geometry = new THREE.IcosahedronGeometry(12, 2);
        const material = new THREE.MeshStandardMaterial({
            color: 0x10b981,
            wireframe: true,
            transparent: true,
            opacity: 0.15
        });

        this.sphere = new THREE.Mesh(geometry, material);
        this.sphere.position.set(22, -4, -10);
        this.scene.add(this.sphere);
    }

    onMouseMove(event) {
        this.mouseX = (event.clientX - window.innerWidth / 2) * 0.001;
        this.mouseY = (event.clientY - window.innerHeight / 2) * 0.001;
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        // Parallax smooth camera motion
        this.targetX += (this.mouseX - this.targetX) * 0.05;
        this.targetY += (this.mouseY - this.targetY) * 0.05;

        this.camera.position.x = this.targetX * 20;
        this.camera.position.y = -this.targetY * 20;
        this.camera.lookAt(this.scene.position);

        // Rotate particles
        if (this.particles) {
            this.particles.rotation.y += 0.001;
            this.particles.rotation.x += 0.0005;
        }

        // Animate floating cubes
        const time = Date.now() * 0.001;
        this.cubes.forEach(cube => {
            cube.rotation.x += cube.userData.rotSpeedX;
            cube.rotation.y += cube.userData.rotSpeedY;
            cube.position.y = cube.userData.initialY + Math.sin(time * 2 + cube.position.x) * 1.5;
        });

        // Rotate sphere
        if (this.sphere) {
            this.sphere.rotation.y += 0.003;
            this.sphere.rotation.z += 0.001;
        }

        this.renderer.render(this.scene, this.camera);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new DataAnalytics3DScene();
});
