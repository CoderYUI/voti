function showFooter() {
  const mainContent = document.getElementById('main-content');
  const footer = document.getElementById('footer');
  if (mainContent && footer) {
    mainContent.style.display = 'none';
    footer.style.display = 'block';
  }
}

function showPage(page) {
  const mainContent = document.getElementById('main-content');
  const footer = document.getElementById('footer');
  if (mainContent && footer) {
    if (page === 'main') {
      mainContent.style.display = 'block';
      footer.style.display = 'block';
    } else {
      showFooter();
    }
  }
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar) {
    sidebar.classList.toggle('open');
    sidebar.classList.toggle('close');
  }
}

function applyDarkMode(isDark) {
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
}

function syncDarkModeToggles(isDark) {
  const toggleDarkMode = document.getElementById('toggle-dark-mode');
  const toggleDarkModeSidebar = document.getElementById('toggle-dark-mode-sidebar');
  if (toggleDarkMode) toggleDarkMode.checked = isDark;
  if (toggleDarkModeSidebar) toggleDarkModeSidebar.checked = isDark;
}

// ---------------------------------------------------------------------------
// New function to load the partials (navbar.html, footer.html)
// once the DOM is ready, maintaining the same functionality
// ---------------------------------------------------------------------------
function loadDynamicPartials() {
  const navbarContainer = document.getElementById('navbar');
  const footerContainer = document.getElementById('footer');

  // Load navbar
  if (navbarContainer) {
    fetch('/navbar.html')
      .then(response => response.text())
      .then(data => {
        navbarContainer.innerHTML = data;
        // Initialize dark mode toggles within the loaded navbar
        initializeDarkMode();
      });
  }

  // Load footer
  if (footerContainer) {
    fetch('/footer.html')
      .then(response => response.text())
      .then(data => {
        footerContainer.innerHTML = data;
      });
  }
}

// ---------------------------------------------------------------------------
// This function keeps the existing event listeners for toggles
// ---------------------------------------------------------------------------
function initializeDarkMode() {
  const toggleDarkMode = document.getElementById('toggle-dark-mode');
  const toggleDarkModeSidebar = document.getElementById('toggle-dark-mode-sidebar');

  if (toggleDarkMode) {
    toggleDarkMode.addEventListener('change', function () {
      applyDarkMode(this.checked);
      syncDarkModeToggles(this.checked);
    });
  }

  if (toggleDarkModeSidebar) {
    toggleDarkModeSidebar.addEventListener('change', function () {
      applyDarkMode(this.checked);
      syncDarkModeToggles(this.checked);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Load the user's saved dark-mode preference
  const darkMode = localStorage.getItem('darkMode') === 'enabled';
  applyDarkMode(darkMode);
  syncDarkModeToggles(darkMode);

  // Load navbar, footer, and attach event listeners after the DOM is ready
  loadDynamicPartials();

  // Close sidebar when clicking outside of it
  const sidebar = document.getElementById('sidebar');
  document.addEventListener('click', function (event) {
    if (sidebar &&
        sidebar.classList.contains('open') &&
        !sidebar.contains(event.target) &&
        !event.target.closest('.hamburger-menu button')) {
      toggleSidebar();
    }
  });
});