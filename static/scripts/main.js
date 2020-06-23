VSS.init({
  usePlatformScripts: true,
  usePlatformStyles: true
});

VSS.ready(function() {
  document.getElementById("name").innerText = VSS.getWebContext().user.name;
});