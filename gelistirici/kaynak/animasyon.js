  // Optional 3D enhancement. Core interactions are already ready.
  const threeScript = document.createElement("script");
  threeScript.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
  threeScript.crossOrigin = "anonymous";
  threeScript.addEventListener("load", () => {
    try{
      initBackdrop();
    }catch(error){
      document.getElementById("scene-canvas").hidden = true;
      console.warn("3D arka plan başlatılamadı.", error);
    }
  }, {once:true});
  document.head.appendChild(threeScript);

  function initBackdrop(){
    const canvas = document.getElementById('scene-canvas');
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const isSmall = window.innerWidth < 700;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 9);

    const renderer = new THREE.WebGLRenderer({ canvas, antialias:true, alpha:true, powerPreference:'low-power' });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isSmall ? 1.25 : 1.5));

    const goldMat = new THREE.MeshPhysicalMaterial({
      color: 0xc9a35c, metalness: 1, roughness: 0.28, reflectivity: 1, clearcoat: 0.4, clearcoatRoughness: 0.3
    });
    const geo = new THREE.TorusKnotGeometry(2.1, 0.32, isSmall ? 96 : 160, 20, 2, 3);
    const mesh = new THREE.Mesh(geo, goldMat);
    scene.add(mesh);

    const particleCount = isSmall ? 140 : 300;
    const positions = new Float32Array(particleCount * 3);
    for(let i=0;i<particleCount;i++){
      positions[i*3] = (Math.random()-0.5) * 26;
      positions[i*3+1] = (Math.random()-0.5) * 20;
      positions[i*3+2] = (Math.random()-0.5) * 16;
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const pMat = new THREE.PointsMaterial({ color:0xc9a35c, size:0.02, transparent:true, opacity:0.5 });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    const keyLight = new THREE.PointLight(0xffe3b0, 3.2, 40); keyLight.position.set(6,5,8); scene.add(keyLight);
    const rimLight = new THREE.PointLight(0x8899ff, 1.2, 40); rimLight.position.set(-8,-4,-6); scene.add(rimLight);
    scene.add(new THREE.AmbientLight(0x201a12, 1.4));

    let targetX = 0, targetY = 0;
    window.addEventListener('mousemove', (e) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 0.6;
      targetY = (e.clientY / window.innerHeight - 0.5) * 0.6;
    });

    // Total document scroll drives rotation, and mesh migrates slightly
    // toward the viewport edge so it reads as a subtle backdrop once
    // content sections begin, rather than competing with text.
    let scrollT = 0;
    function updateScroll(){
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scrollT = max > 0 ? window.scrollY / max : 0;
    }


    const clock = new THREE.Clock();
    let frame = 0;
    let lastFrame = -Infinity;
    const visibleSections = new Set();
    let contextAvailable = true;

    function animate(timestamp){
      frame = requestAnimationFrame(animate);
      if(timestamp - lastFrame < (isSmall ? 31 : 15)) return;
      lastFrame = timestamp;
      draw();
    }

    function draw(){
      updateScroll();
      const t = clock.getElapsedTime();
      if(!motionPreference.matches){
        mesh.rotation.x = t * 0.1 + scrollT * 3.2;
        mesh.rotation.y = t * 0.15 + scrollT * 4.4;
        particles.rotation.y = t * 0.015;
        mesh.position.y = Math.sin(t * 0.4) * 0.12 - scrollT * 1.6;
        mesh.position.x = scrollT * 2.4;
      }
      const scale = 1 - Math.min(scrollT * 0.35, 0.3);
      mesh.scale.setScalar(scale);
      camera.position.x += (targetX - camera.position.x) * 0.04;
      camera.position.y += (-targetY - camera.position.y) * 0.04;
      camera.lookAt(0,0,0);
      renderer.render(scene, camera);
    }
    function updateAnimation(){
      const shouldRun = contextAvailable && !document.hidden && !motionPreference.matches && visibleSections.size > 0;
      if(shouldRun && !frame){
        frame = requestAnimationFrame(animate);
      }else if(!shouldRun && frame){
        cancelAnimationFrame(frame);
        frame = 0;
      }
    }

    draw();
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting) visibleSections.add(entry.target);
        else visibleSections.delete(entry.target);
      });
      updateAnimation();
    });
    document.querySelectorAll(".hero, #hakkimizda").forEach(section => observer.observe(section));
    document.addEventListener("visibilitychange", updateAnimation);
    motionPreference.addEventListener("change", updateAnimation);
    canvas.addEventListener("webglcontextlost", event => {
      event.preventDefault();
      contextAvailable = false;
      canvas.hidden = true;
      updateAnimation();
    });
    canvas.addEventListener("webglcontextrestored", () => {
      contextAvailable = true;
      canvas.hidden = false;
      draw();
      updateAnimation();
    });

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      if(contextAvailable && !frame && visibleSections.size) draw();
    });
  }

})();
