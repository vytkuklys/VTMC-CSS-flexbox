const sections = document.querySelectorAll('section');

function addTags(){
    sections.forEach(section=>{
        let img = document.createElement('img');
        let h4 = document.createElement('h4');
        let pLocation = document.createElement('p');
        let icon = document.createElement('i');
        pLocation.appendChild(icon);
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let div = document.createElement('div');
        for(let i = 0; i < 4; i++){
            let icon = document.createElement('i');
            div.appendChild(icon);
        }

        section.appendChild(img);
        section.appendChild(h4);
        section.appendChild(pLocation);
        section.appendChild(p1);
        section.appendChild(p2);
        section.appendChild(div);
    });
}


function setAttributes(){
    const attributes = {
        img: ['src', 'images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg', 'images/6.jpg', 'images/7.jpg', 'images/8.jpg'],
        h4: ['Robert Longdon', 'Deanna I Martin', 'Sammy M Stoll', 'James C Young', 'Claudette G Hann', 'Bruce K Collins', 'Amber C Panoja', 'Adriana E Hubert'],
        pLocation: ['15 Eagle Way, AL10 8RD', 'Worthington, Ohio(OH), 43085', 'Wellsville, New York(NY), 14895', '2597 Meadowbrook Mall Road', 'Philadelphia, Pennsylvania(PA), 19108', 'Westhampton Beach, New York(NY), 11978', 'Nashville, Tennessee(TN), 37209', 'Burlington, North Carolina(NC), 27215'],
        p1: ['Typical gamer. Friendly coffee practitioner. Alcohol buff. Extreme pop cultureaholic.', 'Zombie ninja. Wannabe internet buff. Proud introvert. Bacon expert. Social media trailblazer. ', 'Social media junkie. Avid food nerd. Professional travel fan. Tv fanatic. Bacon geek. Web fanatic.', 'Certified food specialist. Pop culture geek. Typical travel evangelist. Award-winning analyst. Zombie lover.', 'Twitter practitioner. Devoted thinker. Hipster-friendly problem solver. Social media expert.', 'Wannabe social media aficionado. Thinker. Unapologetic beer guru. Internet lover. Avid food buff.', 'Wannabe pop culture expert. Alcohol fanatic. Unapologetic introvert. Subtly charming communicator.', 'Pop culture fanatic. Hardcore analyst. Infuriatingly humble reader. Incurable troublemaker.'],
        icons : ['class', 'fab fa-facebook-f', 'fab fa-twitter', 'fab fa-google', 'fab fa-instagram', 'fas fa-map-marker-alt']
    }

    let i = 1;
    sections.forEach(section=>{
        section.children[0].setAttribute(attributes.img[0], attributes.img[i]);
        section.children[1].innerText = attributes.h4[i - 1];
        section.children[2].setAttribute('class', 'location-text');
        section.children[2].children[0].setAttribute(attributes.icons[0], attributes.icons[5]);
        section.children[2].insertAdjacentText("beforeend", attributes.pLocation[i]);
        section.children[3].innerText = attributes.p1[i - 1];
        section.children[4].innerText = 'Get Connected';
        for(let j = 0; j < 4; j++){
            section.children[5].children[j].setAttribute(attributes.icons[0], attributes.icons[j + 1]);
        }
        i++;
    });
}

addTags();
setAttributes();