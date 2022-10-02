import * as THREE from 'three';
    import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

    import starsTexture from '../img/stars.jpg';
    import moonTexture from '../img/moon-moon.jpg';
    import moon1975 from '../img/1975.png';
    import moon1973 from '../img/1973.png';
    import moon2005 from '../img/2005.jpeg';


    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    const orbit = new OrbitControls(camera, renderer.domElement);

    camera.position.set(50, 10, 10);
    orbit.update();

    const ambientLight = new THREE.AmbientLight(0x333333);
    scene.add(ambientLight);

    const cubeTextureLoader = new THREE.CubeTextureLoader();
    scene.background = cubeTextureLoader.load([
        starsTexture,
        starsTexture,
        starsTexture,
        starsTexture,
        starsTexture,
        starsTexture
    ]);


    var textureLoader = new THREE.TextureLoader();
    var geometry = new THREE.SphereGeometry( 15, 30, 30 );
    var material = new THREE.MeshBasicMaterial({
        map: textureLoader.load(moonTexture)});
    var moon = new THREE.Mesh( geometry, material );
    scene.add( moon );


    export function loadTexture() {
        var selectedYear=document.getElementById("selectYears").value;
        if(selectedYear=="moon"){
            moon.clear();
            geometry = new THREE.SphereGeometry( 15, 30, 30 );
            material = new THREE.MeshBasicMaterial({
                map: textureLoader.load(moonTexture)});
            var NewMoon  = new THREE.Mesh( geometry, material );
            scene.add( NewMoon );
        }
        if(selectedYear==1973){    
            moon.clear();
            geometry = new THREE.SphereGeometry( 15, 30, 30 );
            material = new THREE.MeshBasicMaterial({
                map: textureLoader.load(moon1973)});
            var NewMoon  = new THREE.Mesh( geometry, material );
            scene.add( NewMoon );
        }
        if(selectedYear==1975){    
            moon.clear();
            geometry = new THREE.SphereGeometry( 15, 30, 30 );
            material = new THREE.MeshBasicMaterial({
                map: textureLoader.load(moon1975)});
            var NewMoon  = new THREE.Mesh( geometry, material );
            scene.add( NewMoon );
        }
        if(selectedYear==2005){
            moon.clear();
            geometry = new THREE.SphereGeometry( 15, 30, 30 );
            material = new THREE.MeshBasicMaterial({
                map: textureLoader.load(moon2005)});
            var NewMoon  = new THREE.Mesh( geometry, material );
            scene.add( NewMoon );
        }if(selectedYear==2006){ 
            moon.clear();
            geometry = new THREE.SphereGeometry( 15, 30, 30 );
            material = new THREE.MeshBasicMaterial({
                map: textureLoader.load(moon2005)});
            var NewMoon  = new THREE.Mesh( geometry, material );
            scene.add( NewMoon );
        }
    }


    const pointLight = new THREE.PointLight(0xFFFFFF, 2, 300);
    scene.add(pointLight);

    function animate() {
        renderer.render(scene, camera);
    }
    renderer.setAnimationLoop(animate);

    window.addEventListener('resize', function() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth-100, window.innerHeight-100);
    });