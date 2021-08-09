function fizzbuzz()
{
    var a=document.getElementById('num').value;
      if(a%15===0)
       document.getElementById('stats').innerHTML="FIZZBUZZ";
    else if(a%3===0)
        document.getElementById('stats').innerHTML="FIZZ";
    else if(a%5===0)
        document.getElementById('stats').innerHTML="BUZZ";
    else
    document.getElementById('stats').innerHTML=a;
}