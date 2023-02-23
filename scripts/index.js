let slideshow=document.getElementById("slideimg");

let imgarr=
[
"https://belk.scene7.com/is/image/Belk/wk04_022123_hp_fh5_carl1_m?$DWP_PHOTO$",
"https://belk.scene7.com/is/image/Belk/wk04_022123_hp_fh5_carl3_m?$DWP_PHOTO$",
"https://belk.scene7.com/is/image/Belk/wk04_022123_hp_fh5_carl2_m?$DWP_PHOTO$"
];
function slideshowFun(images){
    let i=1;
    setInterval(() => {
      if(i==imgarr.length)i=0;
      slideshow.setAttribute("src",imgarr[i])
      i++;
    }, 2000);
  }
  slideshowFun(slideshow);
