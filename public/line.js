document.getElementById('checkButton').onclick = async () => {
    console.log(document.getElementsByTagName('input')[0].value)
    let result=await fetch(`${window.location.href}slocpath=${document.getElementsByTagName('input')[0].value}`).then(res => res.json())
    document.getElementById('result').innerHTML=`<b>| SLOC |</b>  &emsp; ${result.sloc.sloc} </br>`
    +`<b>| Lines of comments |</b> &emsp; ${result.sloc.comments} </br>`
    +`<b>| Blank lines |</b>  &emsp; ${result.sloc.blank}     </br>   `    
    +`<b>| Files counted |</b>  &emsp; ${result.sloc.files}  </br>     `
    +`<b>| Total LOC |</b>  &emsp; ${result.sloc.loc}   </br>     `
}