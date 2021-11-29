var str = 'Hello world';
var search = 'l';
var index;

for(var i = 0; i < str.length; i++){
    // 문자열의 개별 문자가 'l'이면
    if(str[i] === search) {
        index = i;
        break;
    }
}
console.log(index); //2

var str = 'Hello world';
var search = 'l';
var index;

for(var i = 0; i < str.length; i++){
    // 문자열의 개별 문자가 'l'이면
    if(str[i] === search) {
        index = i;
        console.log(index);
    }
}

var x = 10;
var str = x.toString();
console.log(typeof str, str); //string 10

console.log(typeof x, x) //number 10

var x =10;
var str = x + '';
console.log(typeof str, str); //string 10
console.log(typeof x,x); //number 10




0 + '' // '0'
-0 + ''// '0'
NaN + '' // 'NaN'
Infinity + ''// 'Infinity'
-Infinity + '' // 'Infinity'

//불리언 타입
true + ''//'true'

//null 타입
null + ''// 'null'

//undefined 타입
undefined + '' // 'undefined'

//심벌 타입
(Symbol()) + '' // TypeError : Cannot conver a Symbol value to a string

//객체 타입
({}) + '' // "[]"
[] + ''

var done = true;
var message = '';

if (done) message = '완료';

//done이 true라면 '완료'가 message에 할당
message = done && '완료' ;
console.log(message); //

var person = {
    name : 'Kim'
    sayHello : function(){
        console.log(`Hello! My name is ${this.name}`);
    }
};

console.log(typeof person); // object
console.log(person); // {name : 'Kim', sayHello : f}

var person = {
    firstName : 'cy',
    'last-name' : 'Kim'
}

var obj = {};
var key = 'hello';

obj[key] = 'world';
console.log(obj); // {hello : 'world'}
//[]를 이용해서 객체의 변수명에 미리 계산된 변수를 넣는 것이 가능하다.

var obj = {};
var key = 'hello';

obj[key] = 'world';
console.log(obj);


var circle = {
    radius: 5,
    getDiameter: function() { //메서드
        return 2 * this.radius;
    }
};
console.log(circle.getDiameter()); //10

var person = {
    name : 'Kim'
};

console.log(person.name); // Kim
console.log(person['name']); //Kim

let score = 80;
let copy = score;

console.log(score, copy); // 80, 80

score = 100;
console.log(score, copy); //100, 80

var person = {
    name: 'Kim'
};

//프로퍼티 값 갱신
person.name = 'Lee';

//프로퍼티 동적 생성
person.address = 'Seoul';
