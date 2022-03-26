'use strict';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Cannot find name 'angular'.
// angular.module('scopeExample', [])
//   .controller('MyController', ['$scope', function($scope) {
//     $scope.username = 'World';
// 
//     $scope.sayHello = function() {
//       $scope.greeting = 'Hello ' + $scope.username + '!';
//     };
// }]);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
  

