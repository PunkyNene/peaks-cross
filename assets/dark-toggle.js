// Simple persistent dark/light toggle. Add a button with id="theme-toggle" to header if you want it.
(function(){
  const root = document.documentElement;
  const key = 'peaks-cross-theme';
  const saved = localStorage.getItem(key);
  if(saved === 'light') root.classList.add('light-mode');

  window.toggleTheme = function(){
    const isLight = root.classList.toggle('light-mode');
    localStorage.setItem(key, isLight ? 'light' : 'dark');
  };
})();
