import img1 from '../../assets/images/cartoonImg.jpeg';
const Contact = () => {
    return (
        <div className="flex">
            <div className='w-full my-10'>
                <h1 className="text-7xl font-bold m-10">Get In  <span className='text-red-400'>Touch</span>  </h1>
                <p className="ms-10 pt-5 text-2xl">Speaking, workshops, consulting, new opportunities?</p>
                <p className="ms-10 pb-5 text-2xl">   Please get in touch.</p>
                <img src={img1} className='w-10/12 ms-10 border border-pink-300' />
            </div>
            <div className='w-full mt-20 ms-10'>

                <form className="card-body">
                    <div className="form-control mb-5">
                        <label className="label mb-3">
                            <span className="label-text font-bold text-2xl">Full Name</span>
                        </label>
                        <input type="text" placeholder="Full Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control mb-5">
                        <label className="label mb-3">
                            <span className="label-text font-bold text-2xl">Email</span>
                        </label>
                        <input type="email" placeholder="email@domain.com" className="input input-bordered" required />
                    </div>
                    <div className="form-control mb-5">
                        <label className="label mb-3">
                            <span className="label-text font-bold text-2xl">I'm Interested in</span>
                        </label>

                        <select className="select select-bordered w-full text-2xl">
                            <option disabled selected>... .. ...</option>
                            <option>Working with you as a consultant</option>
                            <option>Not Sure/Not Listed</option>
                        </select>
                    </div>
                    <div className="form-control mb-5">
                        <label className="label mb-3">
                            <span className="label-text font-bold text-2xl">What else should we know?</span>
                        </label>

                        <textarea className="textarea textarea-bordered textarea-lg" placeholder="Hello..."></textarea>

                    </div>
                    <div className="form-control mt-5">
                        <button className="btn btn-accent w-1/3">Submit</button>
                    </div>
                </form>

            </div>


        </div>
    );
};

export default Contact;