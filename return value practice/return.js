function subjects(math,chemistry,urdu,english,biology){
    let a = (math + chemistry + urdu + english + biology)
    return a;
}

let b = subjects(78,100,100,45,66);
document.write(b + "<br>")

function percentage(per){
    let p = per/500*100
    return p;
}

let c = percentage(b)


document.write(c)