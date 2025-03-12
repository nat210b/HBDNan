let childElement = document.querySelectorAll
    (".image-container");

let imageUrls = ["IMG_9910.jpeg" , "IMG_5832.JPEG", "IMG_5324.JPEG","IMG_4912.JPEG","IMG_2945.JPEG"];

//init z-inedx
let zIndex = 1;

childElement.forEach((element, index) => {
    //create image element
    let img = document.createElement("img");
    img.setAttribute("src", imageUrls[index]);
    img.setAttribute("class", "image");
    element.appendChild(img);


    element.addEventListener("click", () => {
        zIndex++
        element.style.right = "50em";
        element.style.zIndex = zIndex.toString();
        element.style.transform = "rotate(0deg)";
        //apply
        element.style.transition = "right 0.3s ease";
        setTimeout(() => {
            zIndex -= 3;
            element.style.right = "";
            element.style.zIndex = zIndex.toString();
            element.style.transform = "";

            element.style.transition = "all 0.3s ease";
            setTimeout(() => {
                element.style.transition = "";
            }, 300);
        },5000);
    });
})  