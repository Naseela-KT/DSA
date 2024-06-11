const interValId=setInterval(()=>{
    console.log("helloo")
},500)

setTimeout(()=>{
    clearInterval(interValId);
    console.log("Interval stopped..!")
},2000)