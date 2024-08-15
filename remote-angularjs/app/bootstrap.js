import angular from 'angular';
import angularApp from './app.module';

/*
export const mount = (el) => {
  angular.bootstrap(el, [angularApp.name]);
};
*/

let isBootstrapped = false;

export const mount = (el) => {
  if (!isBootstrapped) {
    console.log('mount in bootstrap...');
    angular.bootstrap(el, [angularApp.name]);
    isBootstrapped = true;
  } else {
    console.warn('AngularJS app is already bootstrapped on this element.');
  }
};