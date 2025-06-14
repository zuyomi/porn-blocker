let blockList = { blockedDomains: [], keywords: [] };

fetch(chrome.runtime.getURL("list.json"))
  .then(response => response.json())
  .then(data => {
    blockList = data;
  });

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    const url = new URL(details.url);
    const domain = url.hostname.toLowerCase();
    const fullUrl = details.url.toLowerCase();

    const isBlockedDomain = blockList.blockedDomains.some(d => domain.includes(d));
    const isBlockedKeyword = blockList.keywords.some(k => fullUrl.includes(k));

    if (isBlockedDomain || isBlockedKeyword) {
      const entry = {
        url: details.url,
        time: new Date().toISOString(),
        reason: isBlockedDomain ? 'domain' : 'keyword'
      };

      chrome.storage.local.get({ blockedSites: [] }, function(data) {
        data.blockedSites.push(entry);
        chrome.storage.local.set({ blockedSites: data.blockedSites });
      });

      return {
        redirectUrl: chrome.runtime.getURL("block.html")
      };
    }

    return {};
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);
