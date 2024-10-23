$("#correios").blur(function(){
    var correios = $('#correios').val().replace(/\D/g, '');
    if(correios){
        var url = 'https://viacep.com.br/ws/'+correios+'/json/';
        $.ajax({
            url: url,
            success : function(dados){
                if(dados.logradouro){
                    $("#rua").val(dados.logradouro);
                    $("#bairro").val(dados.bairro);
                    $("#cidade").val(dados.localidade);
                    $("#uf").val(dados.uf);
                    $("#ibge").val(dados.ibge);
                }
            }
        })
    }
})
