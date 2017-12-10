(function (window) {
  window.__env = window.__env || {};
  window.__env.RELEASE_RELEASENAME = 'dev';
  window.__env.HOST_URL_API = 'localhost:3000';
  window.__env.PROTOCOL = 'http';
  window.__env.APPINSIGHTS_INSTRUMENTATIONKEY = '';
  window.__env.LINKS_ECOSTRUXUREINDUSTRY = 'https://caf-industry-ecostruxure-dev.azurewebsites.net/?login=true';
  window.__env.LINKS_INFORMATIONCENTER = 'https://www.schneider-electric.fr/fr/about-us/newsroom/ecostruxure.html';
  window.__env.LINKS_HELPNSUPPORT = 'http://www.schneider-electric.com/b2b/en/solutions/system/s1/machine-control.jsp';
  window.__env.LINKS_GUIDEDOCS = './';
  window.__env.WITH_CONSOLE_LOG = true;

  window.__env.ROOT_URL_API = `${window.__env.PROTOCOL}://${window.__env.HOST_URL_API}`;
  window.__env.ROOT_URL_API_WS = `${window.__env.PROTOCOL === 'http' ? 'ws' : 'wss'}://${window.__env.HOST_URL_API}`;
}(this));
