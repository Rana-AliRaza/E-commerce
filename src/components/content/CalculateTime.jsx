import React, { useEffect } from 'react'

const CalculateTime = ({ endDate }) => {


    const calculateTimeLeft = () => {
        const difference =  new Date(endDate) - new Date();
        let days = Math.floor(difference / (1000 * 60 * 60 * 24)); // Full days
        let hours = Math.floor((difference / (1000 * 60 * 60)) % 24); // Remaining hours
        let minutes = Math.floor((difference / 1000 / 60) % 60); // Remaining minutes
        let seconds = Math.floor((difference / 1000) % 60);

        return { days, hours, minutes, seconds };
    }
    const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft())
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000);

        return () => clearInterval(timer);
    }, []
    )

    return (
        <div className='mt-2'>
            <p >
                <div className='remainingTime flex'>
                    <div className='remainingDays '>
                        <span className='p-2 block text-white text-2xl rounded-md font-spartan' style={{ background:"#088178"}}>{timeLeft.days}</span>
                        <span className=' flex justify-center text-slate-500 font-normal  text-sm'> DAYS </span>
                    </div>
                     <span className='mx-2 mt-5'>:</span>
                    <div className='remainingHours'>
                        <span className='p-2 block text-white text-2xl rounded-md font-spartan' style={{ background:"#088178"}}>{timeLeft.hours}</span>
                        <span className=' flex justify-center text-slate-500 font-normal  text-sm'>HOURS</span>
                    </div>
                    <span className='mx-2 mt-5'>:</span>
                    <div className='remainingMinutes'>
                        <span className='p-2 block text-white text-2xl rounded-md font-spartan' style={{ background:"#088178"}}>{timeLeft.minutes}</span>
                        <span className=' flex justify-center text-slate-500 font-normal  text-sm'>MINS</span>
                    </div>
                    <span className='mx-2 mt-5'>:</span>
                    <div className='remainingSeconds'>
                        <span className='p-2 block text-white text-2xl rounded-md font-spartan' style={{ background:"#088178"}}>{timeLeft.seconds}</span>
                        <span className=' flex justify-center text-slate-500 text-sm'>SEC</span>
                    </div>
                </div>
            </p>
        </div>
    )
}

export default CalculateTime