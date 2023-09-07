 const mobileNav =()=>{
  let hamBurger= document.querySelector('.header__hamburger');
  let mobileNav=document.querySelector('.mobile-nav');
  let navLinks=document.querySelectorAll('.mobile-nav__link')
  let isMobileNavOpen=false;


  hamBurger.addEventListener('click', ()=>{
    isMobileNavOpen= !isMobileNavOpen;
    if(isMobileNavOpen){
      mobileNav.style.display='flex';
      document.body.style.overflow='hidden';
    }
    else{
      mobileNav.style.display='none';
      document.body.style.overflow='auto';
    }
  

  })
  
  navLinks.forEach(link=>{
    link.addEventListener('click', ()=>{
      isMobileNavOpen=false;
      mobileNav.style.display="none";
      document.body.style.overflowY="auto";

    })
  })
  console.log('hiiii');
  
}

export default mobileNav