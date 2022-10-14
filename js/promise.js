
var data1=document.querySelector("#header");
var name1,email1,dob1,phone1,address1,password1;
getUsers();
function getInfo(key)
{
    document.querySelector("#info").innerHTML=key;
    if(key==name1)
    {
        data1.innerHTML="Hi,My name is";
    }
    else if(key==email1)
    {
        data1.innerHTML="My email is";
    }
    else if(key==dob1)
    {
        data1.innerHTML="My date of birth is";
    }
    else if(key==phone1)
    {
        data1.innerHTML="My phone number is";
    }
    else if(key==address1)
    {
        data1.innerHTML="My address is";
    }
    else if(key==password1)
    {
        data1.innerHTML="My password is";
    }
}
async function getUsers()
{
    var user=await fetch("https://randomuser.me/api");
    if (user.status==200)
    {
    var data=await user.json();
    var res=data.results[0];
    showData(res);
    }
    else
    {
        alert("API not found");
    }
}

function showData(res)
{
    d=new Date(res.dob.date).getDate();
    m=new Date(res.dob.date).getMonth()+1;
    y=new Date(res.dob.date).getFullYear();
    document.querySelector("#image").src=res.picture.large;
    name1=res.name.title+" "+res.name.first+" "+res.name.last;
    document.querySelector("#info").innerHTML=name1;
    email1=res.email;
    dob1=d+"/"+m+"/"+y;
    address1=res.location.city;
    phone1=res.phone;
    password1=res.login.password;
}