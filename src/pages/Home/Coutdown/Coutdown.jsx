import { useEffect, useState } from 'react';

function Countdown({ targetDate }) {
    const calculateTimeLeft = () => {
        const difference = targetDate - new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return { difference, timeLeft }; // Return both difference and timeLeft
    };

    const [timeData, setTimeData] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeData(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const { difference, timeLeft } = timeData; // Destructure timeData

    return (
        <div>
            {difference > 0 ? (
                <div className="flex items-center gap-3 text-center">
                    <div>
                        <p className="lg:text-[30px] text-base text-primary font-semibold">{timeLeft.hours}</p>
                        <span className="text-[#333] text-xs lg:text-sm">Hours</span>
                    </div>
                    <span className="lg:text-4xl text-2xl">:</span>
                    <div>
                        <p className="lg:text-[30px] text-base text-primary font-semibold">{timeLeft.minutes}</p>
                        <span className="text-[#333] text-xs lg:text-sm">Minutes</span>
                    </div>
                    <span className="lg:text-4xl text-2xl">:</span>
                    <div>
                        <p className="lg:text-[30px] text-base text-primary font-semibold">{timeLeft.seconds}</p>
                        <span className="text-[#333] text-xs lg:text-sm">Seconds</span>
                    </div>
                </div>
            ) : (
                <p>Countdown expired!</p>
            )}
        </div>
    );
}

export default Countdown;
