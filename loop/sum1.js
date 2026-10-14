function tinhtong(){
            let sum = 0;
        let sochan= 0;
        let sole = 0;
        for(let i = 0; i <= 5; i++){
            sum = sum + i;
            if(i % 2 === 0){
                sochan = sochan + i;
            } else{
                sole = sole + i;
            }
        }
        console.log("tổng: " + sum);
        console.log("tổng số chẵn: " + sochan);
        console.log("tổng số lẻ: " +sole);

        document.getElementById("kq").innerHTML= sum;
}