/*
Mình sẽ giúp nhiều bạn mới hiểu 1 chút về prototype inheritance 
trong Javascript. Và tại sao 1 thằng array có thể sử dụng phương thức
hasOwnProperty. Nó ở đâu mà ra?
*/
// Tạo 1 mảng với 2 cách và so sánh
var newArray = []; // tương tự var newArray = new Array()
console.log(newArray);
/*
1. Thằng newArray này nó có 1 thuộc tính ẩn là [[Prototype]].
Chính xác hơn thì mọi object trong javascript đều có thuộc tính ẩn này.
Thằng thuộc tính ẩn này sẽ trỏ tới thằng đối tượng Array.prototype 
bởi vì sự giúp đỡ của từ khoá 'new'. 
Bạn có thể tham khảo bằng cách gõ MDN new keyword để đọc thêm xem 'new'
nó làm những việc gì (nâng cao)

2. Thằng [[Prototype]] này sẽ được truy suất bằng cách viết:
newArray.__proto__
*/
console.log(
  'newArray có bố là Array.prototype? ' +
    (newArray.__proto__ === Array.prototype ||
      Array.prototype.isPrototypeOf(newArray))
); // true, kiểm chứng điều mình nói ở trên

/*
1. Hay đơn giản thì hãy hiểu thế này, thằng newArray có thằng bố 
là Array.prototype. Nên thằng newArray sẽ được thừa kế tài sản của 
thằng bố.
2. Ví dụ thằng bố có tài sản là map (Array.prototype.map) thì 
thằng con được hưởng cái tài sản đấy.
3. Chắc hẳn bạn sẽ hỏi là nếu thằng newArray có bố thì chắc thằng 
Array.prototype cũng có bố luôn --> Array.prototype có bố là thằng 
Object.prototype (thằng này là cụ tổ luôn) 
4. Mỗi 1 thằng object chỉ có 1 và chỉ 1 [[Prototype]] có nghĩa là
chỉ có 1 bố. Có 2 bố thì hơi mệt :)))
*/

console.log(
  'Array.prototype có bố là Object.prototype? ' +
    (Array.prototype.__proto__ === Object.prototype ||
      Object.prototype.isPrototypeOf(Array.prototype))
); // true

/**
1. Thằng Object.prototype là cụ tổ nên tất cả con cháu đều được 
hưởng tài sản. Mà cụ có tài sản hasOwnProperty 
(dịch ra là có sở hữu thuộc tính này hay không). 
Nên là tất cả con cháu đều có thể dùng tài sản của cụ. 
Bạn có thể check Object.prototype để xem cụ có khá nhiều tài sản luôn.
*/

console.log(Object.prototype);
/**
Nhưng cụ không có cha nên Object.prototype.__proto__ === null 
*/
console.log(Object.prototype.__proto__); // null

// Có thể có 1 vài sai sót, xin cao nhân chỉ giáo :))
// Một nguồn cực hay để đọc hiểu về prototypal inheritance:
// https://javascript.info/prototype-inheritance