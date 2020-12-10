const clickableBoxes = document.querySelectorAll(".box");
const descriptionContent = document.querySelector(".desc-content");
const map = document.querySelector(".col-map")
console.log(clickableBoxes);

const descriptions = {
  desc1: "description 1",
  desc2: "description 2",
  desc3: "description 3",
  desc4: "description 4",
  desc5: "description 5",
  desc6: "description 6"
};

for(let i = 0; i < clickableBoxes.length; i++){
  clickableBoxes[i].addEventListener('click', function(){
      console.log("Print")
      if(i === 0){
        descriptionContent.textContent = descriptions.desc1;
        map.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96233.52033295788!2d-81.58301761673582!3d41.08434584507069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8830d5c94d0cb4f1%3A0x7519bdea13737c38!2sByAnyMeans330%20Entertainment!5e0!3m2!1sen!2sus!4v1607574793988!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`
      } else if(i === 1){
        descriptionContent.textContent = descriptions.desc2;
        map.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.8258632957945!2d-81.36888338439772!3d40.875695579314325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8836d3dd538cd6dd%3A0xf4514001aee3d3b6!2sBAM*21%20Healthy%20Cuisine!5e0!3m2!1sen!2sus!4v1607575023245!5m2!1sen!2sus" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`
      } else if(i === 2){
        descriptionContent.textContent = descriptions.desc3;
      } else if(i === 3){
        descriptionContent.textContent = descriptions.desc4;
      } else if(i === 4){
        descriptionContent.textContent = descriptions.desc5;
      } else if(i === 5){
        descriptionContent.textContent = descriptions.desc6;
      }

  })
}
