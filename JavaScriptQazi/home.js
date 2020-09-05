let student = {
    first: "Rochan",
    last: "Singh",
    age: 19,
    height: 175,
    studentInfo: function() {
        return this.first + '\n' + this.last;
    }
}
console.log(student.studentInfo())