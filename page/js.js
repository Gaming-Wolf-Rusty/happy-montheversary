const userAgent = navigator.userAgent;

// check if the device is a mobile device
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
if (isMobile) {
  // apply mobile styles
    document.body.classList.add('mobile');
} else {
  // apply desktop styles
    document.body.classList.add('desktop');
}