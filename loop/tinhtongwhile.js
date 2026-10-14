let i = 0;
let sum = 0;
let sochan = 0;
let sole = 0;
while (i <= 5){
    sum += i;
    if ( i % 2 === 0){
        sochan += i;
        i++;
    } else { 
        sole += i;
        i++;
    }

}
 console.log("tổng: " +sum);
 console.log("tổng số chẵn: " +sochan);
 console.log("tổng số lẻ: " +sole);