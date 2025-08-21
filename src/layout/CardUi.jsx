import avatar from '../assets/avatar.webp'
// const CardUi = (props) => {
//   console.log(props.para)
//   return (
//     <>
//         <div className="card border-0 shadow mt-4">
//           {/* <img src="images/vite.svg" alt="" /> */}
//           {/* <img src="../assets/react.svg" alt="" /> */}
//           <img src={props.image ?? avatar} alt="" height={200} />
//             <div className="card-body">
//                 {/* <h1>{props.title ?? "Blank"}</h1> */}
//                 <h1>{props.title || "Blank Title"}</h1>
//                 <p>
//                    {props.para || "Blank Address"}
//                 </p>
//             </div>
//         </div>
//     </>
//   )
// }

// const CardUi = (props) => {

//   const {image,title,para} = props;
const CardUi = ({ image, title, para }) => {
  return (
    <>
      <div className="card border-0 shadow mt-4">
        {/* <img src="images/vite.svg" alt="" /> */}
        {/* <img src="../assets/react.svg" alt="" /> */}
        <img src={image ?? avatar} alt="" height={200} />
        <div className="card-body">
          {/* <h1>{title ?? "Blank"}</h1> */}
          <h1>{title || "Blank Title"}</h1>
          <p>
            {para || "Blank Address"}
          </p>
        </div>
      </div>
    </>
  )
}

export default CardUi