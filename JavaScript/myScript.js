function myFunction() {
  var carName = "Volvo" //variable
  document.getElementById("demo").innerHTML = carName;
}

/*
object variable
*/
var car = {
  //properties
  //property:property value
  type      : "fiat",
  model     : "500",
  color     : "white"
  fullInfo  : function(){
    return this.type + " " + this.model;
  }
};

/*
string, number, boolean을 object로 선언하지 않기
var x = new String();
var x = new Number();

not recommended
*/
