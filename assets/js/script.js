$(function(){

    $('.gatilhoModal').on('click', function(){

        // console.log(this);
        $id = $(this).data('id');
        // $nome = $(this).data('nome');
        
        $('.modal-body form input').attr('value',$id); 
        $('.modal').fadeIn(2000, function(){
            $('.modal-content').fadeIn(100);
        });

    })

    $('button#editar').on('click',function(){
        $textoEditar = document.dadosForm.textId.value;
        $id = document.dadosForm.editarId.value;
        // console.log($textoEditar);
        // console.log($idDiv);
        $id = "#edit-"+$id;
        $($id).text($textoEditar);
        $('.modal').fadeOut(2000, function(){
            $('.modal-content').fadeOut(100);
        });

    })

    $('.modal-footer .close, .modal-header span').on('click',()=>{
        $('.modal').fadeOut(2000, function(){
            $('.modal-content').fadeOut(100);
        });
    });

});