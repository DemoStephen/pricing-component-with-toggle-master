const monthlyPlan = document.querySelector('[data-checked]');
const monthlyPrices = document.querySelectorAll('[data-monthly]');
const yearlyPrices = document.querySelectorAll('[data-yearly]');
monthlyPlan.addEventListener('change', (event)=>{
    event.preventDefault();
    if(event.target.checked){
        Array.from(monthlyPrices).map((monthlyPrice)=>{
            monthlyPrice.classList.remove('d-none')
        })
        Array.from(yearlyPrices).map((yearlyPrice)=>{
            yearlyPrice.classList.add('d-none')
        })
    }else{
        Array.from(monthlyPrices).map((monthlyPrice)=>{
            monthlyPrice.classList.add('d-none')
        })
        Array.from(yearlyPrices).map((yearlyPrice)=>{
            yearlyPrice.classList.remove('d-none')
        })
    }
});