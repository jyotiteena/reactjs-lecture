import CardUi from "../layout/CardUi"
import image1 from '../assets/img1.jpg'
import vite from '../assets/react.svg'
const Home = () => {
    return (
        // ??, ||
        <>
            <div className="container my-4">
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <CardUi title="web dev" para="web development" image="images/vite.svg" />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <CardUi title="app dev" para="app development" image={image1} />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6" >
                        <CardUi title="" image={vite} />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <CardUi />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <CardUi />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <CardUi />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home