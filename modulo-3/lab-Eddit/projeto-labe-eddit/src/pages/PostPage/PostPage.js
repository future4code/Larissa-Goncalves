import { useProtectedPage } from "../../hooks/useProtectedPage";

const PostPage = () => {
    useProtectedPage()
    return(
        <div>
        POst
    </div>
    )
   
}

export default PostPage;