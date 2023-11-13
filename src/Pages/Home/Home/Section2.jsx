import bookImg from '../../../assets/images/bookImg.webp';
import bookIcon from '../../../assets/images/book.svg';
import { Link } from 'react-router-dom';

const Section2 = () => {
    return (
        <div className="bg-red-50">
            <div className='ms-10 py-10'>
                <img src={bookIcon} className='w-1/12' />
            </div>
            <div className='flex'>
                <div className='w-full ms-10'>
                    <h1 className="text-7xl font-bold">Read</h1>
                    <h1 className="text-7xl font-bold text-red-500">Hacking Growth</h1>
                </div>
                <div className='w-full my-8 me-6'>
                    <p className="text-2xl font-bold text-right">Interested in breakout success?</p>
                    <Link className="text-2xl font-bold text-right text-red-500 underline"><p>Get The Book</p></Link>

                </div>
            </div>
            <div className='flex'>
                <div className='ms-10 w-full my-20 border border-pink-300'>
                    <img src={bookImg} className='w-10/12' />
                </div>

                <div className='w-full my-20 ms-10'>
                    <h1 className="text-6xl font-bold">How Today’s Fastest-Growing Companies Drive Breakout Success </h1>
                    <p className="py-6 text-2xl">It seems hard to believe today, but there was a time when <strong>Airbnb was the best-kept secret of travel hackers and couch surfers, Facebook was MySpace’s sorry step-brother, and Uber </strong> was a scrappy upstart that didn’t stand a chance against the Goliath that was New York City Yellow Cabs.
                    </p>
                    <p className="py-6 text-2xl">  ‍So how did these companies grow from these humble beginnings into the powerhouses they are today? Contrary to popular belief, they didn’t explode to massive worldwide popularity simply by building a great product then crossing their fingers and hoping it would catch on. <strong>There was a studied, carefully implemented methodology behind these companies’ extraordinary rise. That methodology is called Growth Hacking.</strong>

                    </p>
                    <button className="btn btn-secondary">Get Started</button>

                </div>

            </div>
        </div>
    );
};

export default Section2;