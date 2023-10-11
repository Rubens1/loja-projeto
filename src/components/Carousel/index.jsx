import Image from "next/image";
import image1 from '@/public/image-1.jpg';
import image2 from '@/public/image-2.jpg';
import image3 from '@/public/image-3.jpg';
import image4 from '@/public/image-4.jpg';
import image5 from '@/public/image-5.jpg';
import { useEffect, useState } from "react";
export default function Carousel() {
  const [image, setImage] = useState();
    /* useEffect(() =>{
      	// Access the Images
      let slideImages = document.querySelectorAll('#img-carousel');
      // Access the next and prev buttons
      let next = document.querySelector('.next');
      let prev = document.querySelector('.prev');
      // Access the indicators
      let dots = document.querySelectorAll('.dot');

      var counter = 0;

      // Code for next button
      next.addEventListener('click', slideNext);
      function slideNext(){
      slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
      if(counter >= slideImages.length-1){
        counter = 0;
      }
      else{
        counter++;
      }
      slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
      indicators();
      }

      // Code for prev button
      prev.addEventListener('click', slidePrev);
      function slidePrev(){
      slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
      if(counter == 0){
        counter = slideImages.length-1;
      }
      else{
        counter--;
      }
      slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
      indicators();
      }

      // Auto slideing
      function autoSliding(){
        deletInterval = setInterval(timer, 3000);
        function timer(){
          slideNext();
          indicators();
        }
      }
      autoSliding();

      // Stop auto sliding when mouse is over
      const container-site = document.querySelector('.slide-container-site');
      container-site.addEventListener('mouseover', function(){
        clearInterval(deletInterval);
      });

      // Resume sliding when mouse is out
      container-site.addEventListener('mouseout', autoSliding);

      // Add and remove active class from the indicators
      function indicators(){
        for(i = 0; i < dots.length; i++){
          dots[i].className = dots[i].className.replace(' active', '');
        }
        dots[counter].className += ' active';
      }
      

      // Add click event to the indicator
      function switchImage(currentImage){
        currentImage.classList.add('active');
        var imageId = currentImage.getAttribute('attr');
        if(imageId > counter){
        slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
        counter = imageId;
        slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
        }
        else if(imageId == counter){
          return;
        }
        else{
        slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
        counter = imageId;
        slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';	
        }
        indicators();
      }

    }, []) */
    return (
      <>
            <section className="slide-container-site">
              <div className="slides">
                  <Image id="img-carousel" src={image1} className="active"  alt="Carousel" />
                  <Image id="img-carousel" src={image2} alt="Carousel" />
                  <Image id="img-carousel" src={image3} alt="Carousel" />
                  <Image id="img-carousel" src={image4} alt="Carousel" />
                  <Image id="img-carousel" src={image5} alt="Carousel" />
              </div>

              <div className="slides-buttons">
                  <span className="next">&#10095;</span>
                  <span className="prev">&#10094;</span>
              </div>

              <div className="dotscontainer-site">
                  <div className="dot active" attr='0' onClick={e => setImage(this)}></div>
                  <div className="dot" attr='1' onClick={e => setImage(this)}></div>
                  <div className="dot" attr='2' onClick={e => setImage(this)}></div>
                  <div className="dot" attr='3' onClick={e => setImage(this)}></div>
                  <div className="dot" attr='4' onClick={e => setImage(this)}></div>
              </div>

    </section>
      </>
    )
  }
  