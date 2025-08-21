import CardUi from "../layout/CardUi"

import data from "../layout/data"
const About = () => {
    return (
        // ??, ||
        <>
            <div className="container my-4">
                <div className="row">
                    {
                        // key is unique identify of each child of list 
                        // data.map((ele, index) => {
                        //     return (
                        //         <div className="col-xl-3 col-lg-4 col-md-6" key={index}>
                        //             <CardUi title={ele.title} para={ele.para} image={ele.image} />
                        //         </div>
                        //     )
                        // })
                        data.map((ele, index) => (
                            <div className="col-xl-3 col-lg-4 col-md-6" key={index}>
                                <CardUi title={ele.title} para={ele.para} image={ele.image} />
                            </div>
                        )
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default About