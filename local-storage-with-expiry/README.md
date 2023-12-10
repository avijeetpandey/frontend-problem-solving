## Local storage with expiry time :tada: :rocket:

The problem statement states to implement a local storage with expiry, the idea is store the data with expiry time and while fetching the data we return null if the expiry time is less than the current time , else we return the value of the stored key.

### Implementation

```js
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
```
