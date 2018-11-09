export default function(db) {
  return {

    saveProducts: function(newProducts, callback) {
      db.collection("tweets").insertOne(newProducts, callback);
    },

    getProducts: function(callback) {
      db.collection("products").find().toArray(callback);
    },

  };
}
