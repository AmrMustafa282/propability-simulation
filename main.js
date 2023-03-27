const numOfCases = document.querySelector(".txt");
let startBtn   = document.querySelector(".btn");
let getInfo2 = document.querySelector(".getInfo2")
let butt = document.querySelector(".butt");
let tableofinfo1 = document.querySelector(".tableofinfo1");
let tableofinfo2 = document.querySelector(".tableofinfo2");
let hid1 = document.querySelector(".hid1");
let hid2 = document.querySelector(".hid2");
let clear = document.querySelector(".clear");
let tabsec =document.querySelector(".tabsec");
let checksec = document.querySelector(".rand");
let checksec2 = document.querySelector(".rand2");
let checkbtn = document.querySelector(".two");
let checkbtn2 = document.querySelector(".two3");
let checkbtnagain = document.querySelector(".two2");
let checkbtnagain2 = document.querySelector(".two33");
let oncheckdiv = document.querySelector(".oncheck");
oncheckdiv.style.display="none";
let oncheckdiv2 = document.querySelector(".oncheck2");
oncheckdiv2.style.display="none";
let randomnum= document.querySelector(".one");   
let span2 = document.querySelector(".span");
let span2p = document.querySelector(".spanp");
let span2pp = document.querySelector(".spanpp");
let randon = document.querySelector(".random");
let draw = document.querySelector(".draw");
let randomvalue =document.querySelector(".oneplus"); 
let demondarray =[];   //done
let freqarray =[];      //done
let proarray =[];        //done
let cmulativearray =[0];   //done
let freq100array =[];  //done
let arrayofa =[];       
let arrayofb =[];
let sum=0;
let a =0;
let b=0;


randon.style.display="none";
draw.style.display="none";
tabsec.style.display="none";
checksec.style.display="none";
checksec2.style.display="none";
startBtn.onclick = ()=>
{       
        
    if(numOfCases.value !== "" && numOfCases.value >0)
    {
        startBtn.style.display="none";
        clear.classList.add("show")
        clear.onclick = ()=>{window.location.reload();}
        getInfo2.style.marginTop="500px";
        getInfo2.style.marginBottom="500px";
        hid1.classList.add("showhid");
        hid2.classList.add("showhid");
        for(let i=1;i<=numOfCases.value;i++)
        {
            let inp1 = document.createElement("input");
            inp1.setAttribute("class",`inputinfo1${i}`);
            tableofinfo1.appendChild(inp1);

            let inp2 = document.createElement("input");
            inp2.setAttribute("class",`inputinfo2${i}`);
            tableofinfo2.appendChild(inp2);
        }
        let button = document.createElement("button");
        button.setAttribute("class","submit2")
        button.innerHTML="SHOW TABLE";
        butt.appendChild(button);
        window.scrollTo({top:1100,behavior:"smooth"});
        button.onclick = ()=>
        {
            tabsec.style.display="flex";
            button.style.display="none";
            for(let i=0;i<numOfCases.value;i++)
            {
                demondarray[i] =Number(document.querySelector(`.inputinfo1${i+1}`).value);
                freqarray[i] =Number(document.querySelector(`.inputinfo2${i+1}`).value);
                sum+=freqarray[i];
            }
            for(let i=0;i<numOfCases.value;i++)
            {
                proarray[i] = freqarray[i]/sum;
                freq100array[i] = (freqarray[i]*100)/sum;
            }
            for(let i=0;i<numOfCases.value;i++)
            {
                cmulativearray[i]=proarray[i];
            }
            for(let i=1;i<numOfCases.value;i++)
            {
                cmulativearray[i]+=cmulativearray[i-1];
            }
            for(let i=0;i<numOfCases.value;i++)
            {
                a=b+1;
                arrayofa[i]=a;
                b=a+freq100array[i]-1;
                arrayofb[i]=b;
            }

            // console.log(sum);
            // console.log(demondarray);
            // console.log(freqarray);
            // console.log(freq100array);
            // console.log(proarray);
            // console.log(cmulativearray);
            // console.log(arrayofa);
            // console.log(arrayofb);
            

            



            ///////////////////////////////////////////////////////////////////////////////////////////////////////
            function addTable() 
            {
                var myTableDiv = document.querySelector(".table");
                var table = document.createElement('TABLE');
                table.border = '1';
                var tableBody = document.createElement('TBODY');
                table.appendChild(tableBody);
                
                for (var i = 0; i <= numOfCases.value; i++) {
                var tr = document.createElement('TR');
                tableBody.appendChild(tr);
                if(i%2!=0)
                {
                    tr.style.backgroundColor="#5f5c6efa";
                }
                else
                {
                    tr.style.backgroundColor="rgb(182, 182, 182)";
                }
                
                for (var j = 0; j < 5; j++) 
                {
                    var td = document.createElement('TD');
                    td.width = '55';
                    if(j==0 && i==0)
                    {    
                        td.appendChild(document.createTextNode("Demond"));
                        tr.appendChild(td);
                    }
                    if(j==1 && i==0)
                    {   
                        td.appendChild(document.createTextNode("Frequancy"));
                        tr.appendChild(td);
                    }
                    if(j==2 && i==0)
                    {   
                        td.appendChild(document.createTextNode("Probability"));
                        tr.appendChild(td);
                    }
                    if(j==3 && i==0)
                    {
                        td.appendChild(document.createTextNode("Cmulative Probability"));
                        tr.appendChild(td);
                    }
                    if(j==4 && i==0)
                    {   
                        td.appendChild(document.createTextNode("Interval"));
                        tr.appendChild(td);
                    }

                    if(j==0 && i!==0)
                    {    
                        td.appendChild(document.createTextNode(demondarray[i-1]));
                        tr.appendChild(td);
                    }
                    if(j==1 && i!==0)
                    {   
                        td.appendChild(document.createTextNode(freqarray[i-1]));
                        tr.appendChild(td);
                    }
                    if(j==2 && i!==0)
                    {   
                        td.appendChild(document.createTextNode(proarray[i-1].toFixed(2)));
                        tr.appendChild(td);
                    }
                    if(j==3 && i!==0)
                    {
                        td.appendChild(document.createTextNode(cmulativearray[i-1].toFixed(2)));
                        tr.appendChild(td);
                    }
                    if(j==4 && i!==0)
                    {   
                        td.appendChild(document.createTextNode(`${arrayofa[i-1].toFixed(2)} -> ${arrayofb[i-1].toFixed(2)}`));
                        tr.appendChild(td);
                    }
                }
                }
                myTableDiv.appendChild(table);
                }
                addTable();
                draw.style.display="flex";
                randon.style.display="flex";
                window.scrollTo({top:2120,behavior:"smooth"});
                checksec.style.display="flex";
                checksec2.style.display="flex";
            //////////////////////////////////////////////////////////
var xValues = demondarray.slice();
var yValues = proarray.slice();
var barColors = ["red", "green","#09375f","blue","orange","brown" , "#414141" ,"black","red", "green","#09375f","blue","orange","brown" , "#414141" ,"black",
                "red", "green","#09375f","blue","orange","brown" , "#414141" ,"black","red", "green","#09375f","blue","orange","brown" , "#414141" ,"black"];

new Chart("myChart1", {
    type: "bar",
    data: {
    labels: xValues,
    datasets: [{
    backgroundColor: barColors,
    data: yValues
    }]
    },
    options: {
    legend: {display: false},
    title: {
    display: true,
    text: "Demand Probability"
    }
    }
});

var yValues = cmulativearray.slice();

new Chart("myChart2", {
    type: "bar",
    data: {
    labels: xValues,
    datasets: [{
    backgroundColor: barColors,
    data: yValues
    }]
    },
    options: {
    legend: {display: false},
    title: {
    display: true,
    text: "Demand Cumlative Probability"
    }
    }
});
                /////////////////////////////////////////////////////
            
        }

        checkbtn.onclick = ()=>
        {
            checksec.style.display="none";
            oncheckdiv.style.display="flex";
            for(let i=0;i<numOfCases.value;i++)
		{
            
			if(Number(randomnum.value) >= arrayofa[i] && Number(randomnum.value)<=arrayofb[i])
			{
				span2.textContent = `This number is in Tire ${i}`;
                break;
			}
			else
			{
				span2.textContent = `Pls Enter a belongs to this interval [1,100]`;
			}
		}
            checkbtnagain.onclick = ()=>
            {
                checksec.style.display="flex";
                oncheckdiv.style.display="none";
            }
            // checkbtnagain2.onclick = ()=>
            // {
            //     checksec2.style.display="flex";
            //     oncheckdiv2.style.display="none";
            // }
        }

        checkbtn2.onclick = ()=>                ///////////////////
        {
            checksec2.style.display="none";
            oncheckdiv2.style.display="flex";
            let arr =[];
            let arroftire=[0];
            let rr=0;
            for(let j=0;j<randomvalue.value;j++)
            {
                rr=Math.floor(Math.random()*(100-1)+1);
                arr[j] = rr;
                for(let i=0;i<numOfCases.value;i++)
		        {
                    
		        	if( arr[j] >= arrayofa[i] && arr[j]<=arrayofb[i])
			        {
                        arroftire[j] =i;
			        }
		        }
            }   

                span2p.innerHTML = `Random number: ${arr}`;
                span2pp.innerHTML=`Simulated demand: ${arroftire}`;
                    

            
                checkbtnagain2.onclick = ()=>
                {
                    checksec2.style.display="flex";
                    oncheckdiv2.style.display="none";
                }
        }

    }
}
// Number(randomnum.value) >= arrayofa[i] && Number(randomnum.value)<=arrayofb[i]
let span = document.querySelector(".movingbtn");
window.onscroll = function()
{
    if(this.scrollY>=500)
    {
        span.classList.add("show");
    }
    else
    {
        span.classList.remove("show");
    }
};


