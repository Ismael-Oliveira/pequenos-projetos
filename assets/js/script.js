$(function(){

    $('.gatilhoModal').on('click', function(){

        console.log(this);
        $id = $(this).data('id');
        $nome = $(this).data('nome');
        
        $('.modal-body p').text(`div gatilhoModal tem data-id = ${$id} e data-nome = ${$nome}`);
        
        $('.modal').fadeIn(2000, function(){
            $('.modal-content').fadeIn(100);
        });

        // alternativa
        // $('.modal').show();
    })

    $('.modal-footer .close, .modal-header span').on('click',()=>{
        $('.modal').fadeOut(2000, function(){
            $('.modal-content').fadeOut(100);
        });
    });

});