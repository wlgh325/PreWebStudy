var eventBus = new Vue();

// global component
Vue.component('child-component', {
   template: '<div>하위 컴포넌트 영역입니다. <button v-on:click="showLog">show</button></div>',
   methods: {
      showLog: function(){
         eventBus.$emit('triggerEventBus', 100);

      }
   }
});


var app = new Vue({
   el: '#app',
   created: function(){
      eventBus.$on('triggerEventBus', function(value){
         alert('전달 받은 값: ' + value);   //alert에서는 console과 다르게 +로 연결해주어야 한다.

      });
   },
   cmp1data: 'fff'
});

var name = prompt("이름을 입력해주세요");

document.getElementById('app2').innerHTML = name + "님 환영합니다!!";
