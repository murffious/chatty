'use strict';

angular.module('chattyApp')
  .controller('MainCtrl', function ( $scope, messageService ) {
    messageService.getMessages().then(function ( response ) {
      $scope.messages = response.data.messages;
    });

    $scope.addMessage = function ( message ) {
      if (message) {
        document.getElementById("form").reset()
        messageService.addMessage(message).then(function ( response ) {
          $scope.messages = response.data.messages;
          
        });
      }
     
    };
    $scope.username = prompt("enter your username");
$scope.photo = prompt("enter your path to your photo") 
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
