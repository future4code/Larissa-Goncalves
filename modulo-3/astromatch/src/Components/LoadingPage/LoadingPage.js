import Lottie from 'react-lottie';
import animationData from './animation.json';
import { Title } from './LoadingPage-Styled';

const LoadingPage = () => {
   
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYmid slice'
        }
    };
    return (
        <div>
            <Lottie
                options={defaultOptions}
                height={400}
                width={400}
            />
            <Title>Por favor limpe seus matchs</Title>
        </div>
    )
}
export default LoadingPage;