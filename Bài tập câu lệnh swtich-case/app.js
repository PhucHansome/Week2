function Show(){
    var A = document.getElementById("IDthang").value;
        switch(A){
            case "1":
            case "3":
            case "5":
            case "7":
            case "8":
            case "10":
            case "12":
                document.getElementById("result_id").innerHTML = "Tháng " + A + " có 31 ngày";
            break;
            case "2":
                document.getElementById("result_id").innerHTML = "Tháng " + A + " có 28, 29 ngày";
            break;
            case "4":
            case "6":
            case "9":
            case "11":
                document.getElementById("result_id").innerHTML = "Tháng " + A + " có 30 ngày";
                break;
                default:
                    document.getElementById("result_id").innerHTML = "nhập sai cú pháp tháng";
        }

    
}