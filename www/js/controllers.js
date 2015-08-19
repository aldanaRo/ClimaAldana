angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http, Chats, Unidades, Ciudades, Dias) {
   $http.get("http://api.openweathermap.org/data/2.5/forecast/daily?q=" + Ciudades.get() + "&cnt=" + Dias.get() + "&lang=es&units=" + Unidades.get()).success(function (data) {
      Chats.set(data.list);
      $scope.weatherToday = Chats.getOne();
      $scope.city = data.city.name;
      });
    $scope.doRefresh = function() {
    $http.get("http://api.openweathermap.org/data/2.5/forecast/daily?q=" + Ciudades.get() + "&cnt=" + Dias.get() + "&lang=es&units=" + Unidades.get()).success(function (data) {
      Chats.set(data.list);
      $scope.weatherToday = Chats.getOne();
      $scope.chats = Chats.all();
      $scope.city = data.city.name;
     })
     .finally(function() {
       $scope.$broadcast('scroll.refreshComplete');
     });
    }
})

.controller('ChatsCtrl', function($scope, $http, Chats, Unidades, Ciudades, Dias) {
  $scope.chats = Chats.all();
  $scope.doRefresh = function() {
    $http.get("http://api.openweathermap.org/data/2.5/forecast/daily?q=" + Ciudades.get() + "&cnt=" + Dias.get() + "&lang=es&units=" + Unidades.get()).success(function (data) {
      Chats.set(data.list);
      $scope.chats = Chats.all();
     })
     .finally(function() {
       $scope.$broadcast('scroll.refreshComplete');
     });
    }
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.weatherToday = Chats.get($stateParams.chatId);
})

.controller('horasCtrl', function($scope, $http, Chats, Unidades, Ciudades, Dias) {
  $http.get("http://api.openweathermap.org/data/2.5/forecast/?q=" + Ciudades.get() + "&cnt=" + Dias.get() + "&lang=es&units=" + Unidades.get()).success(function (data) {
    Chats.set(data.list);
    $scope.chats = Chats.all();
  });
})

.controller('horasDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.weatherToday = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function() {

})

.controller('GradosCtrl', function($scope, Unidades) {
  $scope.celcius = function(){
      Unidades.set("metric");
  }
  $scope.fahrenheit = function(){
      Unidades.set("imperial");
  }
  $scope.kelvin = function(){
      Unidades.set("kelvin");
  }
})

.controller('CiudadesCtrl', function($scope, Ciudades) {
  $scope.cancun = function(){
      Ciudades.set("cancun");
  }
  $scope.mexico = function(){
      Ciudades.set("mexico");
  }
  $scope.monterrey = function(){
      Ciudades.set("monterrey");
  }
})

.controller('diasCtrl', function($scope, Dias) {
  $scope.uno = function(){
      Dias.set("1");
  }
  $scope.tres = function(){
      Dias.set("3");
  }
  $scope.cinco = function(){
      Dias.set("5");
  }
});
