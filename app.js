let billamount=document.getElementById('bill-amount');
let percentage=document.getElementById('percentage-tip');
let tip=document.getElementById('tip-amount');
let total=document.getElementById('total');
let btn=document.getElementById('calculate');

btn.addEventListener('click',function(){

    billamount=Number(billamount.value);
    percentage=Number(percentage.value);
    if(isNaN(billamount)||billamount<=0||billamount===null)
    {
        alert('please enter valid bill amount')
    }
    else if(isNaN(percentage)||percentage<=0||percentage===null)
    {
        alert('please enter valid bill amountdsf')
    }
    else{
        let calculatedTip =  percentage/100*billamount;
        tip.value = '$' + calculatedTip;
console.log(tip.value = '$' + calculatedTip);

        let calculatedTotal = billamount + calculatedTip;
        total.value = '$' + calculatedTotal;
    }

})
