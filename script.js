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

//별찍기 문제
function star(n){
    if( 1 <= n <= 100) {
        for(let i = 1; i <= n; i++) {
            for( let j = 1; j <= i; j++){
                document.write('*');
            }
            document.write('<br>')
        }
    }
}
star(5);

// 누리님 1주차 문제
// 400,500 을 삭제하는 코드를 입력하세요.
var nums = [100, 200, 300, 400, 500];

for(let i = 0; i < nums.length; i++) {
    if(nums[i] === 400) {
        nums.splice(i,1);
        i--;
    }
    else if(nums[i] === 500) {
        nums.splice(i,1);
        i--;
    }
}

//소현님 문제 
// 어떤 사람의 성적이 주어졌을 때, 평점은 몇 점인지 출력하세요!
// 예를 들어, 'A+'가 주어지면 평점은 4.3 입니다. '+'는 0.3을 더하고 '-'는 0.3을 빼면 됩니다. 
// A+: 4.3, A0: 4.0, A-: 3.7
// B+: 3.3, B0: 3.0, B-: 2.7
// C+: 2.3, C0: 2.0, C-: 1.7
// D+: 1.3, D0: 1.0, D-: 0.7
// F: 0.0

function scoreCal(grade) {
    grade += ' '; //0를 안붙였을 때를 대비
    let str1 = grade.slice(0,1).toUpperCase(); //소문자로 넣을 때를 대비
    let str2 = grade.slice(1,2);
    let score = 0;
    
    if(str1 === 'A'){
        score += 4.0;
    } else if (str1 === 'B'){
        score += 3.0;
    } else if (str1 === 'C'){
        score += 2.0;
    } else if (str1 === 'D'){
        score += 1.0;
    } else if (str1 === 'F'){
        score += 0.0
        if( str2 !== '0' && str2 !== ' ') {
            console.log('잘못된 입력 값입니다')
            return
        }
    } else {
        console.log('잘못된 입력 값입니다.');
        return 
    }

    if (str1 !== 'F'){
        if(str2 === '-'){
            score -= 0.3
        } else if (str2 === '+'){
            score += 0.3
        } else if (str2 === '0' || str2 === ' '){
            score += 0.0
        } else {
            console.log('잘못된 입력 값입니다.');
            return 
        }
    }
    console.log(score);
}





// 서영님 문제 
// for문을 사용하여 1부터 20 미만의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하세요!

let sum = 0;
for(let i = 1; i < 20; i++) {
    if (i % 2 !== 0 && i % 3 !== 0) {
        sum += i;
    }
}
console.log(sum);

//승연님 문제
// 주어진 문자열을 새로운 변수에 배열(array)로 변환해주세요.
// let fruits = '사과, 바나나, 귤, 멜론, 딸기';       
// 배열형식 = ['사과, 바나나, 귤, 멜론, 딸기']
let fruits = '사과, 바나나, 귤, 멜론, 딸기'; 
let newFruits = [];
newFruits.push(fruits.split(','));

console.log(newFruits);

//경서님 문제
let alarm = '';
function num(n) {
    if(n % 2) {
        alarm = '홀수입니다!!';
    } else {
        alarm = '짝수입니다!!';
    }
    console.log(alarm);
}
num(2);
num(5);

let alarm = '';
function num(n) {
    if(n % 2 !== 0) {
        alarm = '홀수입니다!!';
    } else {
        alarm = '짝수입니다!!';
    }
    console.log(alarm);
}

let notice = '';
function num(number) {
    number % 2 ? notice = '홀수입니다!!' : notice = '짝수입니다!!';
    console.log(notice);
}
num(2);
num(5);
