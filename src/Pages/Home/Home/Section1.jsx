import img1 from '../../../assets/images/cartoonImg1.jpeg';

const Section1 = () => {
    return (
        <div className="flex  bg-neutral text-neutral-content">
            <div className='w-full my-20 ms-10'>
                <h1 className="text-7xl font-bold">Everything I know about <span className='text-red-400'>product growth</span> to inspire and drive your <span className='text-emerald-700'>business.</span> </h1>
                <p className="py-6 text-2xl">Every business leader, product owner or entrepreneur has the same challenge: unlocking growth. I’ve spent my career helping companies and products do just that. Here’s what I know.</p>
                <button className="btn btn-accent">Get Started</button>
                <button className="ms-5 btn btn-outline btn-accent">Contact Me</button>
            </div>

            <div className='w-full my-20'>
                <img src={img1} className='w-1/2 ms-20' />
            </div>
        </div>
    );
};

export default Section1;
