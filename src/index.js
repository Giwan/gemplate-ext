require('./manifest.json');
require('./index.html');
require('./icon.png');



function renderStatus(statusText) {
  document.getElementById('mainapp').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function() {
    // Put the image URL in Google search.
    renderStatus('Performing Google Image search for ');

});
