<template>
  <div>
    
    <Section>
      <Button />
    </Section>
    <RemoteSection>
      <RemoteButton />
    </RemoteSection>
    
  
    <div ref="angularAppContainer" class="angular-section"></div>

    <div ref="angularAppContainer2" class="angular-section"></div>
 
  


  </div>
</template>


<script>
import Vue from 'vue'

import Section from './components/Section.vue'
import RButton from 'remote-simple/remote-simple-button';
import RSection from 'remote-simple/remote-simple-section'

//import sampleModule from 'angularApp/sampleModule'
//import sampleComponent from 'angularApp/sampleComponent'
//console.log('>>>>>>>>>>', sampleModule)
//console.log('>>>>>>>>>>', sampleComponent)


//const RemoteButton = Vue.defineAsyncComponent(() => import("angularApp/sampleModule"));
//console.log(RemoteButton)

console.log(window)




export default {
  name: 'App',
  components: {
    Section,
    Button: () => import('./components/Button.vue'),
    RemoteButton: RButton,
    RemoteSection: RSection,
    //sampleModule,
    //sampleComponent
    
  },
  data() {
    return {
      loaded: false,
      hello: '======',
      message: 'fsdfsdf',
      htmlContent: '<div>Hello, <strong>World!</strong></div>',
    }
  },
  methods: {
    initAngularApp() {
      /*
      window.angularApp.init();
      this.loaded = true;
      this.hello = angular.element(document.querySelector('[ng-controller=sampleModule]')).scope().hello;
      */
    },
    async initAngularComponent() {
      this.$refs.angularAppContainer.innerHTML = `
        <div ng-controller="ctrl1">
          <h1>{{hello}}</h1>
          <button ng-click="click()">버튼 클릭</button>
        </div>
        <div ng-controller="ctrl2">
          <h1>{{txt}}</h1>
          <button ng-click="click()">버튼 클릭</button>
        </div>
      `;

      //const sampleApp = await import('angularApp/sampleModule');
      const { mount } = await import('angularApp/sampleComponent');
      console.log('============', mount ) 
      console.log('============', this.$refs.angularAppContainer ) 

      if (mount && typeof mount === 'function') {
        mount(this.$refs.angularAppContainer);
      } else {
        console.error('Mount function not found in the loaded module');
      }   
    },
    async initAngularComponent_2() {
      this.$refs.angularAppContainer2.innerHTML = `
        <div ng-controller="ctrl1">
          <h1>{{hello}}</h1>
          <button ng-click="click()">버튼 클릭</button>
        </div>
        <div ng-controller="ctrl2">
          <h1>{{txt}}</h1>
          <button ng-click="click()">버튼 클릭</button>
        </div>
      `;

      //const sampleApp = await import('angularApp/sampleModule');
      const { mount } = await import('angularApp/sampleComponent');
      console.log('============', mount ) 
      console.log('============', this.$refs.angularAppContainer2 ) 

      if (mount && typeof mount === 'function') {
        mount(this.$refs.angularAppContainer2);
      } else {
        console.error('Mount function not found in the loaded module');
      }   
    }
    /*
    initializeAngularJSApp() {
      // AngularJS 모듈 정의
      const angularAppModule = angular.module('myAngularApp', []);
console.log('============', angularAppModule)
      // AngularJS 컨트롤러 정의
      angularAppModule.controller('MyController', function($scope) {
        $scope.message = 'Hello from AngularJS!====';
      });
      console.log('============', this.$refs.myAngularApp )
      // AngularJS 부트스트랩
      angular.bootstrap(this.$refs.myAngularApp, ['myAngularApp']);
    }
    */
  },
  async mounted() {
    //this.initAngularApp();
    //this.initializeAngularJSApp();

    this.initAngularComponent();

    this.initAngularComponent_2();
    
    

    //Vue.loadScript("http://localhost:5001/remoteEntry.js")


    //window.angularApp.init()
   // angular.module('angularApp');
    //angular.bootstrap(document.getElementById('angular-container'), ['angularApp']);
   // angular.bootstrap(document, ['angularApp']);

  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.angular-section {
  border: 5px solid green !important;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
