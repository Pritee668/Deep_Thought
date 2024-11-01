//  import infoData from './data/info.js'; 

//     let hide = document.getElementById("hide");
//     let model = document.getElementById("model");
//     let show = document.getElementById("show");
//     let open=document.getElementById("open");
//     console.log(open);
//     hide.addEventListener("click",function(){
//             model.style.visibility="hidden";
//             show.style.display="block";
//         })
//     open.addEventListener("click",function(){
//         model.style.visibility="visible";
//         show.style.display="none";
//     });

        
// document.addEventListener("DOMContentLoaded", function() {

//     document.querySelector('.outer h1').innerText = infoData.title;
//     document.querySelector('.inner h2').innerText = infoData.tasks[0].task_title;
//     document.querySelector('.inner p').innerText = infoData.tasks[0].task_description;
//      const firstCard = document.querySelector('.firstT');
//      firstCard.querySelector('.h').innerText = infoData.title;
//     firstCard.querySelector('.d').innerHTML = `<b>Description:</b> ${infoData.tasks[0].assets[0].asset_description}`;
//     const secondCard = document.querySelector('.secondT');
//     secondCard.querySelector('.h').innerText = infoData.tasks[0].assets[1].asset_title;
//     secondCard.querySelector('.d').innerHTML = `<b>Description:</b> ${infoData.tasks[0].assets[1].asset_description}`;
//     const thirdCard = document.querySelector('.thirdT');
//     thirdCard.querySelector('.h').innerText = infoData.tasks[0].assets[2].asset_title;
//     thirdCard.querySelector('.d').innerHTML = `<b>Description:</b> ${infoData.tasks[0].assets[2].asset_description}`;
//     const fourthCard = document.querySelector('.fourthT');
    
//     fourthCard.querySelector('.d').innerHTML = `<b>Description:</b> ${infoData.tasks[0].assets[3].asset_description}`;

//      });
        
   

   

import infoData from './data/info.js';

document.addEventListener("DOMContentLoaded", function() {
    // Select elements and check if they exist
    const hide = document.getElementById("hide");
    const model = document.getElementById("model");
    const show = document.getElementById("show");
    const open = document.getElementById("open");

    // Event listener to hide the model and show button
    if (hide && model && show) {
        hide.addEventListener("click", function() {
            model.style.visibility = "hidden";
            show.style.display = "block";
        });
    }

    // Event listener to show the model and hide button
    if (open && model && show) {
        open.addEventListener("click", function() {
            model.style.visibility = "visible";
            show.style.display = "none";
        });
    }

    // Populate content from infoData if it exists
    if (infoData) {
        const outerTitle = document.querySelector('.outer h1');
        const innerTitle = document.querySelector('.inner h2');
        const innerDescription = document.querySelector('.inner p');
        const firstCard = document.querySelector('.firstT');
        const secondCard = document.querySelector('.secondT');
        const thirdCard = document.querySelector('.thirdT');
        const fourthCard = document.querySelector('.fourthT');

        if (outerTitle) outerTitle.innerText = infoData.title;
        if (innerTitle) innerTitle.innerText = infoData.tasks[0].task_title;
        if (innerDescription) innerDescription.innerText = infoData.tasks[0].task_description;

        if (firstCard) {
            firstCard.querySelector('.h').innerText = infoData.title;
            firstCard.querySelector('.d').innerHTML = `<b>Description:</b> ${infoData.tasks[0].assets[0].asset_description}`;
        }

        if (secondCard) {
            secondCard.querySelector('.h').innerText = infoData.tasks[0].assets[1].asset_title;
            secondCard.querySelector('.d').innerHTML = `<b>Description:</b> ${infoData.tasks[0].assets[1].asset_description}`;
        }

        if (thirdCard) {
            thirdCard.querySelector('.h').innerText = infoData.tasks[0].assets[2].asset_title;
            thirdCard.querySelector('.d').innerHTML = `<b>Description:</b> ${infoData.tasks[0].assets[2].asset_description}`;
        }

        if (fourthCard) {
            fourthCard.querySelector('.d').innerHTML = `<b>Description:</b> ${infoData.tasks[0].assets[3].asset_description}`;
        }
    }
});
