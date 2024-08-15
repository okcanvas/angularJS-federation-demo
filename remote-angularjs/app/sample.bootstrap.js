import angular from 'angular';
import angularApp from './sample.component';

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
    //isBootstrapped = true;
  } else {
    console.warn('AngularJS app is already bootstrapped on this element.');
  }
};

// 다른 애플리케이션에서 사용하도록 export default로 내보내기
export default {
  mount,
};