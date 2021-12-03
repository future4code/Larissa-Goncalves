import Lottie from 'react-lottie';
import { useState } from "react";
import animationData from './animation.json';

const LoadingPage = () => {
    const [animationState, setAnimationState] = useState({
        isStopped: false, isPaused:false
    });

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYmid slice'
        }
    };

    return(
        <div>
            <Lottie
             options={defaultOptions}
            height={400}
            width={400}
            isStopped={animationState.isStopped}
            isPaused={animationState.isPaused}
            />
            
        </div>
    )
}

export default LoadingPage;