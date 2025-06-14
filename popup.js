document.addEventListener('DOMContentLoaded', () => {
  const logList = document.getElementById('logList');
  const clearBtn = document.getElementById('clearBtn');

  chrome.storage.local.get({ blockedSites: [] }, function(data) {
    if (data.blockedSites.length === 0) {
      logList.innerHTML = '<li>No sites blocked yet.</li>';
    } else {
      data.blockedSites.forEach(entry => {
        const li = document.createElement('li');
        li.textContent = `[${new Date(entry.time).toLocaleString()}] ${entry.url}`;
        logList.appendChild(li);
      });
    }
  });

  clearBtn.addEventListener('click', () => {
    chrome.storage.local.set({ blockedSites: [] }, () => {
      logList.innerHTML = '<li>Log cleared.</li>';
    });
  });
});
