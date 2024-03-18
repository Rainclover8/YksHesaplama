function daysUntilYks(){
    const yksDate = new Date("2024-06-08")

    const currentDate = new Date()

    const timeDiff = yksDate.getTime() - currentDate.getTime();
    const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));

    return daysRemaining;


}
const daysRemain = document.querySelector('.days')




    daysRemain.innerHTML = `Yks'ye kalan süre <br> ${daysUntilYks()} <br> gün kaldı`;


setTimeout(function() {
    updateDaysRemain();
}, 1000);
