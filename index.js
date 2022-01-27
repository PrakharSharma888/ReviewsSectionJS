const detials = [
    {
    id : 1,
    name : "Rashi Pundir",
    desc :` " Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    Rem molestia consequuntur quam mollitia tjenetur blanditiis odit. " `,
    photo : 'second.jpg',
    job : "SDE"
},
{
    id : 2,
    name : "Prakhar Sharma",
    desc :` " Dfndfndfdmfnmdnfdm "`,
    photo : 'third.jpg',
    job : "Back End Developer"
},
{
    id : 3,
    name : "Pari Tomar",
    desc :` " Diluc Ragnvindr is a playable Pyro character in Genshin Impact.
     Born into the affluent Ragnvindr Clan, Diluc is the current owner of the Dawn Winery and a ... "`,
    photo : 'first.jpg',
    job : "Full Stack Developer"
}
]

let leftbut = document.getElementById('buttons1');
let rightbut = document.getElementById('buttons2');


var counter = 0



window.addEventListener("DOMContentLoaded",function(){
    leftbut.addEventListener('click',function(){
        counter +=1;
        if (counter > detials.length -1 ){
            counter = 0;
        }
        ShowPerson(counter)
    })
    rightbut.addEventListener('click',function(){
        counter -=1;
        if (counter < 0 ){
            counter = detials.length - 1;
        }
        ShowPerson(counter)
    })

})

function ShowPerson(counter){
    let item = detials[counter];
    console.log(item)
    document.getElementById('name').innerHTML = item.name;
    document.getElementById('deg').innerHTML = item.job;
    document.getElementById('desc').innerHTML = item.desc
    document.getElementById('first').src = item.photo;
}