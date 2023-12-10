/**
 * Creating a constructor function
 */

function InMemorySearch() {
  this.entities = new Map();

  this.addDocuments = function (namespace, ...documents) {
    const existing = this.entities.get(namespace);

    /**
     * If the namespace exists , merge the contents with the existing ones
     * else create the namespace and add the content
     */
    if (existing) {
      this.entities.set(namespace, [...existing, ...documents]);
    } else {
      this.entities.set(namespace, [...documents]);
    }

    /**
     * Implementation of search function, takes three params namespace, filter function and order by object
     */
    this.search = function (namespace, filterFn, orderBy) {
      const documents = this.entities.get(namespace);
      const filtered = documents.filter(filterFn);

      if (orderBy) {
        const { key, asc } = orderBy;

        return filtered.sort((a, b) => {
          if (asc) {
            return a[key] - b[key];
          } else {
            return b[key] - a[key];
          }
        });
      }

      return filtered;
    };
  };
}

module.exports = InMemorySearch;
