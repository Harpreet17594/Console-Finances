var finances = [
  ['Jan-2010', 867884],
  ['Feb-2010', 984655],
  ['Mar-2010', 322013],
  ['Apr-2010', -69417],
  ['May-2010', 310503],
  ['Jun-2010', 522857],
  ['Jul-2010', 1033096],
  ['Aug-2010', 604885],
  ['Sep-2010', -216386],
  ['Oct-2010', 477532],
  ['Nov-2010', 893810],
  ['Dec-2010', -80353],
  ['Jan-2011', 779806],
  ['Feb-2011', -335203],
  ['Mar-2011', 697845],
  ['Apr-2011', 793163],
  ['May-2011', 485070],
  ['Jun-2011', 584122],
  ['Jul-2011', 62729],
  ['Aug-2011', 668179],
  ['Sep-2011', 899906],
  ['Oct-2011', 834719],
  ['Nov-2011', 132003],
  ['Dec-2011', 309978],
  ['Jan-2012', -755566],
  ['Feb-2012', 1170593],
  ['Mar-2012', 252788],
  ['Apr-2012', 1151518],
  ['May-2012', 817256],
  ['Jun-2012', 570757],
  ['Jul-2012', 506702],
  ['Aug-2012', -1022534],
  ['Sep-2012', 475062],
  ['Oct-2012', 779976],
  ['Nov-2012', 144175],
  ['Dec-2012', 542494],
  ['Jan-2013', 359333],
  ['Feb-2013', 321469],
  ['Mar-2013', 67780],
  ['Apr-2013', 471435],
  ['May-2013', 565603],
  ['Jun-2013', 872480],
  ['Jul-2013', 789480],
  ['Aug-2013', 999942],
  ['Sep-2013', -1196225],
  ['Oct-2013', 268997],
  ['Nov-2013', -687986],
  ['Dec-2013', 1150461],
  ['Jan-2014', 682458],
  ['Feb-2014', 617856],
  ['Mar-2014', 824098],
  ['Apr-2014', 581943],
  ['May-2014', 132864],
  ['Jun-2014', 448062],
  ['Jul-2014', 689161],
  ['Aug-2014', 800701],
  ['Sep-2014', 1166643],
  ['Oct-2014', 947333],
  ['Nov-2014', 578668],
  ['Dec-2014', 988505],
  ['Jan-2015', 1139715],
  ['Feb-2015', 1029471],
  ['Mar-2015', 687533],
  ['Apr-2015', -524626],
  ['May-2015', 158620],
  ['Jun-2015', 87795],
  ['Jul-2015', 423389],
  ['Aug-2015', 840723],
  ['Sep-2015', 568529],
  ['Oct-2015', 332067],
  ['Nov-2015', 989499],
  ['Dec-2015', 778237],
  ['Jan-2016', 650000],
  ['Feb-2016', -1100387],
  ['Mar-2016', -174946],
  ['Apr-2016', 757143],
  ['May-2016', 445709],
  ['Jun-2016', 712961],
  ['Jul-2016', -1163797],
  ['Aug-2016', 569899],
  ['Sep-2016', 768450],
  ['Oct-2016', 102685],
  ['Nov-2016', 795914],
  ['Dec-2016', 60988],
  ['Jan-2017', 138230],
  ['Feb-2017', 671099],
];

//total months---------------------------------------------------------------------------
console.log("Financial Analysis:");

console.log("--------------------------");
console.log("Total months:", finances.length);
document.getElementById("length").innerHTML="Total months: "+finances.length;


//profit over entire months---------------------------------------------------------------

var financesArraytest = finances.map((e2) => e2[1]);
var total_value = financesArraytest.reduce(
  (acc_Value, cur_Value) => acc_Value + cur_Value,
  0);
console.log("total profit over entire months: $",total_value);
document.getElementById("profit").innerHTML="Total profit over entire months: $"+total_value;


  
//average-------------------------------------------------------------
var finances_average = total_value / (finances.length-1); //(Total/(Number of months - 1))
console.log("Average per month:", finances_average.toFixed(2));
document.getElementById("average").innerHTML="Average per month:$"+finances_average.toFixed(2);





//lets find decreased change-----------------------------------------------------
let greatest_dec = 0;
let greatest_dec_by_month = "";


for (let i1 = 0; i1 < finances.length - 1; i1++) {
let temp_val = 0;
let col = i1 + 1;

temp_val = finances[col][1] - finances[i1][1];

if (temp_val < greatest_dec) {
  greatest_dec = temp_val;
  greatest_dec_by_month= finances[col][0];
}
}



//lets find increased change------------------------------------------------------
let greatest_inc = 0;
let greatest_inc_by_month = "";

for (let i = 0; i < finances.length - 1; i++) {
let temp_val2 = 0;
let j = i + 1;

temp_val2 = finances[j][1] - finances[i][1];

if (temp_val2 > greatest_inc) {
  greatest_inc = temp_val2;
  greatest_inc_by_month = finances[j][0];
}
}





//finding months of inc/dec value---------------------------------------
var tempObject=0,total_months=0,total_loss=0,total_loss_months=0;
var min = finances[0][1],index_min="",greatest_d=0;
var max=finances[0][1],index_max="";

    for (let i = 0; i < finances.length; i++)
     {
      var innerArrayLength = finances[i].length;
      var temp_val=0;
    
        for (let j = 0; j < innerArrayLength; j++) 
        {
          // console.log('[' + i + ',' + j + '] = ' + finances[i][j]);
          
          if(finances[i][j]>0)
          {
            // console.log("positive value"+finances[i][j]);
            tempObject=tempObject+finances[i][j];
            total_months++;
           
            //find max profit value
            if(finances[i][j]>=max)
            {
              max = finances[i][j];
              index_max = finances[i][j-1];
            }
        }
          if(finances[i][j]<0){
            total_loss=total_loss+finances[i][j];
            total_loss_months++;
            //find max profit value
            if(finances[i][j]<min)
            {
              min = finances[i][j];
              index_min = finances[i][j-1];

            }
          
        } 

      }
  }

  console.log("Greatest increase profit/loss value: "+index_max+": $"+greatest_inc);
  console.log("Greatest decrease profit/loss value:  "+index_min+": $"+greatest_dec);

  
  document.getElementById("G_increase").innerHTML="Greatest increase profit/loss value: "+index_max+": $"+greatest_inc;
  document.getElementById("G_decrease").innerHTML="Greatest decrease profit/loss value: : "+index_min+": $"+greatest_dec;







































  




















