$(()=>{
    
    $('#dark').click( ()=> {
        $('#dark').toggleClass('active');
        $('body').toggleClass('darkMode');
    } );
})
