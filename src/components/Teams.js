// import './style.css'
// function Teams()
// {
//     return(
//         <div className='teams-iteams'>
//             <div>CSK</div>
//             <div>7</div>
//             <div>4</div>
//             <div>3</div>
//         </div>
//         // <div className='teams-items'>
//         //     <div></div>

//         // </div>

//     )
// }
import './style.css'

function Teams(props){
    console.log("Hey")

    let teamNAme="CSK"

    return(
        <>
            <div className="teams-item">
        <div>{props.teamName}</div>
        <div>{props.bowlers}</div>
        <div>{props.batsman}</div>
        <div>{props.allrounders}</div>  
        
    </div>
</>
    
    )

}

export default Teams;
