import { useCallback, useEffect, useState } from 'react';

interface DimensionsProps {
    x: number;
    y: number;
}

const initialState = { x: window.innerWidth, y: window.innerHeight };

export default () => {
    const [dimensions, setDimensions] = useState<DimensionsProps>(initialState);

    const eventCallBack = useCallback(
        () => {
            setDimensions({ x: window.innerWidth, y: window.innerHeight });
        }, []);

    useEffect(() => {
        window.addEventListener('resize', eventCallBack);

        return () => {
            window.removeEventListener('resize', eventCallBack);
        }
    }, [eventCallBack]);

    return dimensions;

}