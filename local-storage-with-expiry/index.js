/**
 * Implement a local storage with expiry time
 */

window.localStorageWithExpiry = {
  //saving the item to the store
  setItem: function (key, value, expiryTime) {
    const result = {
      value,
      expiryTime: Date.now() + expiryTime
    };

    localStorage.setItem(key, JSON.stringify(result));
  },

  // getting item from the store
  getItem: function (key) {
    const data = localStorage.getItem(key);
    const parsedData = JSON.parse(data);

    if (parsedData.expiryTime <= Date.now()) {
      return null;
    }

    return parsedData.value;
  },

  // removing items from the custom store
  removeItem: function (key) {
    localStorage.removeItem(key);
  },
  clear: function () {
    localStorage.clear();
  }
};

// usage of the custom storage
localStorageWithExpiry.setItem("abc", "pqr", 2000);

setTimeout(() => {
  console.log(localStorageWithExpiry.getItem("abc"));
}, 1500);
