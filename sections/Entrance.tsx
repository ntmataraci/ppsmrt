const Entrance = () => {

    const tickedIcon =()=> {
        return(
    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.99993 7.80019L1.19993 5.00019L0.266602 5.93352L3.99993 9.66685L11.9999 1.66685L11.0666 0.733521L3.99993 7.80019Z" fill="black"/>
    </svg>
        )
    }


    return(
<>
<div className="entrance_container" style={{background:"linear-gradient(180deg, #FFFFFF 0%, #E3F2F7 100%)"}}>
<div className="entrance_header">Simple modal card creator </div>
<div className="entrance_second">A utility-first CSS framework packed with classeslike flex, pt-4, text-center and rotate-90 that can becomposed to build any design, directly in your markup.</div>
<div className="btn-link_violet entrance">Try it out now</div>
<div className="entrance_third">
    <div>{tickedIcon()}Free and Paid plans</div>
    <div>{tickedIcon()}Setup in minutes</div>
    <div>{tickedIcon()}No Credit Card required*</div>
    </div>
    </div>
</>


    )
}

export default Entrance