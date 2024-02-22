import React from 'react'
import Slider from "react-slick";


import image1 from '../../images/branglogo1.png';
import image2 from '../../images/branglogo2.png';
import image3 from '../../images/branglogo3.png';
import image4 from '../../images/branglogo4.png';



function News() {
    var settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay:true,
              infinite: true,
              dots: true
            }
          },
         
        ]
      };
      const team = [
        {
            id: "1",
    
            path: image1
        },
        {
            id: "2",
            path: image2
        },
        {
            id: "3",
            path: image3
        },
        {
            id: "4",
            path: image4
        },
       
    
    
    ]
    return (
        <>
            <div className='container mx-auto md:py-28 text-center md:text-left grid grid-cols-1 ml-5'>
                <h1 className='text-5xl font-bold mb-4'>Latest News</h1>
                <p className='text-[#717173] mb-8 text-[18px]'>There are many variations of passages of Lorem Ipsum available,<br />
                    but the majority have suffered alteration.</p>
            </div>
            <div className="container px-5 ml-5 pb-10">
        <Slider {...settings}>
          
        
                    {
                        team.map((item) => {
                            return <div className='mb-8 p-5'>
                                
                                <img src={item.path} alt="" className='rounded-xl  w-full' />
                              


                            </div>
                        })

                    }

                
        </Slider>
      </div>
        </>
    )
}

export default News