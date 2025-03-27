import * as React from 'react';

export default function useDate() {

    const [currentDate, setCurrentDate] = React.useState(false);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return [currentDate]
}