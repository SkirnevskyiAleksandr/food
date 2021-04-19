// window.addEventListener('DOMContentLoaded', () => {
//     const tabs = document.querySelectorAll('.tabheader__item'),
//         tabsContent = document.querySelectorAll('.tabcontent'),
//         tabsParent = document.querySelector(".tabheader__items");

//     function hideTubContetn() {
//         tabsContent.forEach(item => {
//             item.style.display = 'none';
//         });

//         tabs.forEach(item => {
//             item.classList.remove('tabheader__item_active');
//         });
//     };
    
//     function showTabContent(i = 0) {
//         tabsContent[i].style.display = 'block';
//         tabs[i].classList.add('tabheader__item_active');
//     }
    
//     hideTubContetn();
//     showTabContent();
// });

// window.addEventListener('DOMContentLoaded', () => {
//     const tabs = document.querySelectorAll('.tabheader__item'),
//         tabsContent = document.querySelectorAll('.tabcontent'),
//         tabsParent = document.querySelector('.tabheader__items');

//     function hideTabContent() {
//         tabsContent.forEach(item => {
//             item.style.display = 'none';
//         }); 
        
//         tabs.forEach(item => {
//             item.classList.remove('tabheader__item_active');
//         });
//     };

//     function showTabContent(i = 0) { 
//         tabsContent[i].style.display = 'block';
//         tabs[i].classList.add('tabheader__item_active');

//     };

//     hideTabContent();
//     showTabContent();

//     tabsParent.addEventListener('click', (event) => {
//         if (event.target && event.target.classList.contains('tabheader__item')) {
//             tabs.forEach((item, i) => {
//                 if (event.target == item) {
//                     hideTabContent();
//                     showTabContent(i);
//                 }
//             });
//         }
//     });
// });
window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');
    
    function hideElems() {
        tabContent.forEach(item => {
            item.style.display = 'none';
        });
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    };

    function showTabcontent(i = 0) {
        tabContent[i].style.display = 'block';
        tabs[i].classList.add('tabheader__item_active');
    };

    hideElems();
    showTabcontent();

    tabsParent.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (event.target == tabs[i]) {
                    hideElems();
                    showTabcontent(i);
                }

            })
        }
    })
});