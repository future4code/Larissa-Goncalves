import Animation from "./Animation.json"
import Lottie from 'react-lottie'

const defaultOptions = () => {
    const options = {
        loop: true,
        autoplay: true,
        animationData: Animation,
        rendererSettings: {
        preserveAspectRatio: 'xMidYmid slice'
        }
    }

    return(
        <div>
            <Lottie
             options={options}
             height={200}
             widht={200}
            />
        </div>
    )
}

export default defaultOptions;