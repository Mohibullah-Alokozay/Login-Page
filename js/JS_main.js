/*=================================================================================================
        [Focus input]*/
        $('input').each(function(){
            $(this).on('blur',function(){
                if($(this).val().trim() !=""){
                    $(this).addClass('has-val');
                   
                }
                else
                {
                    $(this).removeClass('has-val');
                }
            })
        })




/*=================================================================================================
        [Validate]*/ 
        var input = $('.validate-input .input');

        $('.validate-form').on('submit',function(){
            var check = true;
            
            for(var i=0; i<input.length; i++){
                if(validate(input[i]) == false){
                    showValidate(input[i]);
                    check = false
                }
            }

            return check;
        });


        $('.validate-form .input').each(function(){
            $(this).focus(function(){
                hideValidate(this);
            });
        });

        function validate (input) {
            if($(input).attr('type') == 'email' || $(input).attr('name') == 'email'){
                if($(input).val().trim().match(/^([a-zA-Z0.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}.\[0-9]{1,3}\.)|(([a-z9\-]+\.)+)(a-zA-Z){1,5}|[0-9]{1,3})(\]?)$/) == null) {
                    return false;
                }
            }
            else{
                if($(input).val.trim() == ''){
                    return false;
                }
            }
        }

        function showValidate(input) {
            var thisAlert = $(input).parent();

            $(thisAlert).addClass('alert-validate');
        }

        function hideValidate(input) {
            var thisAlert = $(input).parent();

            $(thisAlert).removeClass('alert-validate');
        }





/*=================================================================================================
        [Show pass]*/ 
    var showpass = 0
    $('.btn-show-pass').on('click', function(){
        if(showpass == 0)
        {
            $(this).next('input').attr('type','text');
            $(this).find(i).removeClass('fa-eye');
            $(this).find(i).addClass('fa fa-eye');
            showpass = 1
        }
        else{
            $(this).next('input').attr('type','password');
            $(this).find(i).addClass('fa-eye');
            $(this).find(i).removeClass('fa fa-eye');
             showpass = 0
        }
    });
