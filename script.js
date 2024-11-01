 import infoData from './data/info.js'; 

    let hide = document.getElementById("hide");
    let model = document.getElementById("model");
    let show = document.getElementById("show");
    let open=document.getElementById("open");
    console.log(open);
    hide.addEventListener("click",function(){
            model.style.visibility="hidden";
            show.style.display="block";
        })
    open.addEventListener("click",function(){
        model.style.visibility="visible";
        show.style.display="none";
    });

        
document.addEventListener("DOMContentLoaded", function() {

    document.querySelector('.outer h1').innerText = infoData.title;
    document.querySelector('.inner h2').innerText = infoData.tasks[0].task_title;
    document.querySelector('.inner p').innerText = infoData.tasks[0].task_description;
     const firstCard = document.querySelector('.firstT');
     firstCard.querySelector('.h').innerText = infoData.title;
    firstCard.querySelector('.d').innerHTML = `<b>Description:</b> ${infoData.tasks[0].assets[0].asset_description}`;
    const secondCard = document.querySelector('.secondT');
    secondCard.querySelector('.h').innerText = infoData.tasks[0].assets[1].asset_title;
    secondCard.querySelector('.d').innerHTML = `<b>Description:</b> ${infoData.tasks[0].assets[1].asset_description}`;
    const thirdCard = document.querySelector('.thirdT');
    thirdCard.querySelector('.h').innerText = infoData.tasks[0].assets[2].asset_title;
    thirdCard.querySelector('.d').innerHTML = `<b>Description:</b> ${infoData.tasks[0].assets[2].asset_description}`;
    const fourthCard = document.querySelector('.fourthT');
    // fourthCard.querySelector('.h').innerText = infoData.tasks[0].assets[3].asset_title;
    fourthCard.querySelector('.d').innerHTML = `<b>Description:</b> ${infoData.tasks[0].assets[3].asset_description}`;
    // const assetLinksContainer = document.createElement('div');
    // assetLinksContainer.className = 'asset-links';
    // infoData.tasks[0].assets.forEach(asset => {
    // const link = document.createElement('a');
    // link.href = asset.asset_content.trim(); 
    // link.target = '_blank';
    // link.innerText = asset.asset_title;
    // assetLinksContainer.appendChild(link);
    // });
    // fourthCard.appendChild(assetLinksContainer);
    // });
        
   

   