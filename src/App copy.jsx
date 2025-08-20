import React from "react"

const App = () => {
  return (
    // <div>
    //   <h1>web development</h1>
    //   <p>
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, totam. Earum officiis doloremque obcaecati aut voluptatem ab, est possimus blanditiis asperiores omnis quis dicta consequuntur voluptas, repudiandae incidunt et magni.
    //   </p>
    // </div>
    // what is fragement = pass multiple element

    // before reactjs 18 = <React.Fragment></React.Fragment>

    // <React.Fragment>
    //   <h1>web</h1>
    //   <p>
    //     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe enim ea voluptatibus eius excepturi, tenetur iusto repellendus nostrum, repudiandae deserunt aut, natus nihil? Quis, incidunt voluptates vitae magnam beatae quidem!
    //   </p>
    // </React.Fragment>
  // after reactjs18 => <></>
   <>
      <h1>web</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe enim ea voluptatibus eius excepturi, tenetur iusto repellendus nostrum, repudiandae deserunt aut, natus nihil? Quis, incidunt voluptates vitae magnam beatae quidem!
      </p>
    </>
  )
}

export default App