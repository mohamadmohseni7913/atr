import Swal from "sweetalert2"

export const PopUp=(title,validValue,type)=>{
    return(
        Swal.fire({
            icon: 'question',
            title: title,
            input: type,
            inputValue: validValue,
    
            text: ' ',
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonText: "تایید",
            cancelButtonText: "لغو",
            showCloseButton: false,
    
        }).then((result) => {
            if (result.isConfirmed) {
                if(result.value==null || result.value==""){
                    Swal.fire({
                        icon: 'error',
                        title: 'فیلد نمیتواند خالی باشد ',
                        timer: 1000,
                        text: ' ',
                        showCancelButton: false,
                        showConfirmButton: false,
                        showCloseButton: false,
                    })
                }
                else{
                    Swal.fire({
                        icon: 'success',
                        title: 'با موفقیت تغیر کرد ',
                        timer: 1000,
                        text: ' ',
                        showCancelButton: false,
                        showConfirmButton: false,
                        showCloseButton: false,
                    })
                }
            
            }
        })
    )

}