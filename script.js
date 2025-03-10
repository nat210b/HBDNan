let childElement = document.querySelectorAll
    (".image-container");

let imageUrls = ["https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D", "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg", "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"];


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