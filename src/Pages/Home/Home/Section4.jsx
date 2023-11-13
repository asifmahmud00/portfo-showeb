import img1 from '../../../assets/images/cartoonImg1.jpeg';

const Section4 = () => {
    return (
        <div className="flex  bg-fuchsia-50">
            <div className='w-full my-20 ms-10'>
                <h1 className="text-3xl font-bold text-red-500">Featured Blog Post</h1>
                <h1 className="text-7xl font-bold">Measuring 'Confidence' in ICE Prioritization</h1>
                <p className="py-6 text-2xl">Every business leader, product owner or entrepreneur has the same challenge: unlocking growth. I’ve spent my career helping companies and products do just that. Here’s what I know.</p>
                <button className="btn btn-accent">Read Blog</button>
                <button className="ms-5 btn btn-outline btn-accent">Viwe All Blogs</button>
            </div>

            <div className='w-full my-20'>
                <img src={img1} className='w-1/2 ms-20' />
            </div>
        </div>
    );
};

export default Section4;