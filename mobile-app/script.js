const enableBtn = document.getElementById('enableBtn');
const simulateBtn = document.getElementById('simulateBtn');
const toast = document.getElementById('toast');

function showToast(message){
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(()=> toast.classList.remove('show'), 3800);
}

async function requestPermission(){
  if(!('Notification' in window)){
    showToast('Notificaciones no soportadas en este navegador');
    return 'unsupported';
  }

  try{
    const permission = await Notification.requestPermission();
    showToast(`Permiso: ${permission}`);
    return permission;
  }catch(e){
    showToast('Error solicitando permiso');
    return 'error';
  }
}

function sendLocalNotification(title, body, options = {}){
  if('Notification' in window && Notification.permission === 'granted'){
    try{
      new Notification(title, Object.assign({body}, options));
    }catch(e){
      showToast('No se pudo mostrar notificación nativa');
    }
  }else{
    // Fallback in-app toast
    showToast(`${title}: ${body}`);
  }
}

function simulate(type){
  switch(type){
    case 'automated':
      sendLocalNotification('Automatizada', 'Tu tarea programada ha finalizado.');
      break;
    case 'personalized':
      sendLocalNotification('Hola, María', 'Tenemos una recomendación especial para ti.');
      break;
    case 'urgent':
      sendLocalNotification('URGENTE', 'Revisa la seguridad ahora mismo.', {requireInteraction:true});
      break;
    default:
      sendLocalNotification('Notificación', 'Esto es una prueba.');
  }
}

enableBtn?.addEventListener('click', async ()=>{
  const p = await requestPermission();
  if(p === 'granted'){
    showToast('Listo — notificaciones activadas');
  } else if(p === 'denied'){
    showToast('Permiso denegado — activo el fallback in-app');
  }
});

simulateBtn?.addEventListener('click', ()=>{
  // open a prompt to pick type quickly
  const t = prompt('Tipo de notificación: automated / personalized / urgent', 'automated');
  simulate(t ? t.toLowerCase() : 'automated');
});

document.querySelectorAll('[data-type]').forEach(btn=>{
  btn.addEventListener('click', e=>{
    const t = e.currentTarget.getAttribute('data-type');
    simulate(t);
  });
});

// Quick demo: if page becomes hidden then show a toast so tester knows state change
document.addEventListener('visibilitychange', ()=>{
  if(document.hidden) showToast('App en segundo plano');
  else showToast('App en primer plano');
});
