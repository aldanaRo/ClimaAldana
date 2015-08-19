angular.module('starter.services', [])

.factory('Chats', function($http) {
  chats = [];
  return {
    getOne: function() {
        return chats[0];
    },
    set: function(data) {
      chats = data;
    },
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].$$hashKey === chatId) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('Unidades', function($http) {
  var units = "metric";
  return {
    set: function(data) {
      units = data;
    },
    get: function(chatId) {
      return units;
    }
  }
})

.factory('Ciudades', function($http) {
  var cities = "cancun";
  return {
    set: function(data) {
      cities = data;
    },
    get: function(chatId) {
      return cities;
    }
  }
})

.factory('Dias', function($http) {
  var dias = "5";
  return {
    set: function(data) {
     dias = data;
    },
    get: function(chatId) {
      return dias;
    }
  }
});

