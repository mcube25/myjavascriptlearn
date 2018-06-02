< html >
    <
    head >
    <
    style >
    body { background: yellow;padding: 20 px; }
div { background: pink;padding: 20 px } <
/style> <
script src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.min.js" > < /script>  <
    /head> <
    body >
    <
    div >
    <
    button > Click Me < /button>  <
    /div> <
    script >
    $('button').click(function() {
        alert("Button is clicked!");
    });
$('div').click(function() {
    alert("Div is clicked!");
});
$('body').click(function() {
    alert("Body is clicked!");
});
$(document).ready(function() {
    $('#myButton').click(function() {
        $.ajax({
            type: 'Get',
            url: 'myService.php',
            success: function(data) {
                alert(data);
            }
        })
    });
});

<
/script>  <
/body> <
/html>