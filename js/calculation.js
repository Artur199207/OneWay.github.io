document.getElementById('content-calculation').addEventListener('click',function(){
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
})
document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
});
