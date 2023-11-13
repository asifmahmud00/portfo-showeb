import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";

const Section3 = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('testimonials.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (
        <div className="flex  bg-neutral text-neutral-content">
            <div className='w-full my-20 mx-10'>
                <h1 className="text-7xl font-bold">What People Are <span className='text-emerald-700'>Saying...</span> </h1>
            </div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">


                {
                    reviews.map(review =>
                        <SwiperSlide
                            key={review._id}>
                            <div className="flex flex-col  mx-24 my-16">
                                <p className="py-8 text-2xl">{review.details}</p>
                                <div className="flex">
                                    <img src={review.image} className="avatar w-24 rounded" />
                                    <div className='ms-3'>
                                        <h3 className="pt-5 text-3xl text-orange-700">{review.name}</h3>
                                        <p className="text-xl text-white">{review.designation}</p>
                                    </div>

                                </div>


                            </div>
                        </SwiperSlide>)
                }
            </Swiper>

        </div>
    );
};

export default Section3;