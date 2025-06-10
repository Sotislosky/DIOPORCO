window.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('start');
  const menu = document.getElementById('menu');
  const marker = document.getElementById('marker');
  const scene = document.querySelector('a-scene');

  let originSet = false;

  startBtn.addEventListener('click', () => {
    menu.style.display = 'none';
  });

  marker.addEventListener('markerFound', () => {
    if (originSet) return;
    originSet = true;

    const selections = Array.from(menu.querySelectorAll('input[type=checkbox]:checked'))
      .map(cb => cb.value);

    const worldPos = new THREE.Vector3();
    const worldQuat = new THREE.Quaternion();
    const worldScale = new THREE.Vector3();
    marker.object3D.matrixWorld.decompose(worldPos, worldQuat, worldScale);

    const anchor = document.createElement('a-entity');
    anchor.setAttribute('position', `${worldPos.x} ${worldPos.y} ${worldPos.z}`);
    scene.appendChild(anchor);
    anchor.object3D.quaternion.copy(worldQuat);
    anchor.object3D.scale.copy(worldScale);

    selections.forEach((dish, index) => {
      const entity = document.createElement('a-box');
      entity.setAttribute('depth', '0.2');
      entity.setAttribute('height', '0.2');
      entity.setAttribute('width', '0.2');
      entity.setAttribute('color', dishColor(dish));
      entity.setAttribute('position', `${index * 0.3} 0 0`);
      anchor.appendChild(entity);
    });

    marker.parentElement.removeChild(marker);
  });

  function dishColor(name) {
    switch (name) {
      case 'pizza': return 'orange';
      case 'burger': return 'brown';
      case 'sushi': return 'pink';
      default: return '#CCC';
    }
  }
});
