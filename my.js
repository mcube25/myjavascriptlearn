< html >
    <
    head >
    <
    /head> <
    body >
    <
    input type = "text"
id = "input1" >
    <
    button onclick = "alpha()" > Click < /button> < <
    script >
    function alpha() {
        var a = document.getElementById('input1').value;
        alert("The message is: " + a);

        var b = { name: "Peter", age: 29 };
        alert("Name is: " + b.name);
        alert("Age is: " + b.age);
        var c = 10;
        alert('new value of a is:' + a);
        //statement
        var a = 10;
        b = 20 c = 5;
        //staement2
        result = a + b + c;
        var a = 10;
        var b = 50;
        if (a > 20 || b > 20) {
            alert("Success!")
        } else {
            alert("Failure!")
                /* var a = 10;
if(!(a > 20)){
	alert("Success!")
}
else{
	alert("Failure!")
*/

        };
        /script> <
        /body>  <
        /html>