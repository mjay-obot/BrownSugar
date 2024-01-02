//const openNav = document.querySelector(".bi-list-nested");
//const closeNav = document.querySelector(".bi-x-lg")
//const dropDownMenu = document.querySelector(".dropdown-menu");

//openNav.addEventListener("click", function() {
    //dropDownMenu.classList.remove("hidden");
    //openNav.style.visibility = "hidden";
    //closeNav.classList.remove("hidden");});

//closeNav.addEventListener("click", function () {
    //dropDownMenu.classList.add("hidden");
    //openNav.style.visibility = "visible";
    //closeNav.classList.add("hidden");})

    //Responsive NavBar

    function showSidebar(){
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'flex'
    };
    function hideSidebar(){
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'none'
    };

    //Swiper JavaScript
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });