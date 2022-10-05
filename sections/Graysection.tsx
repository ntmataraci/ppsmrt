
const Graysection = () => {

const textList=[
    ["3x","Increase", "Conversation Rate"],
    ["120%","Email", "Subscribers"],
    ["390%","More Customer", "Engagement"],
]

const lightningIcon=()=><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.99953 0.0200195C4.48953 0.0200195 0.0195312 4.49002 0.0195312 10C0.0195312 15.51 4.48953 19.98 9.99953 19.98C15.5095 19.98 19.9795 15.51 19.9795 10C19.9795 4.49002 15.5095 0.0200195 9.99953 0.0200195ZM9.47953 15.88V11.74H6.81953C6.44953 11.74 6.19953 11.34 6.37953 11.01L10.0595 3.84002C10.2895 3.37002 10.9995 3.54002 10.9995 4.07002V8.26002H13.5395C13.9095 8.26002 14.1495 8.65002 13.9895 8.98002L10.4295 16.1C10.1895 16.58 9.47953 16.41 9.47953 15.88Z" fill="#F2A737"/> </svg>
const dollarIcon=()=><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11.41 16.09V16.67C11.41 17.4 10.81 18 10.08 18H10.07C9.34 18 8.74 17.4 8.74 16.67V16.07C7.41 15.79 6.23 15.06 5.73 13.83C5.5 13.28 5.93 12.67 6.53 12.67H6.77C7.14 12.67 7.44 12.92 7.58 13.27C7.87 14.02 8.63 14.54 10.09 14.54C12.05 14.54 12.49 13.56 12.49 12.95C12.49 12.12 12.05 11.34 9.82 10.81C7.34 10.21 5.64 9.19 5.64 7.14C5.64 5.42 7.03 4.3 8.75 3.93V3.33C8.75 2.6 9.35 2 10.08 2H10.09C10.82 2 11.42 2.6 11.42 3.33V3.95C12.8 4.29 13.67 5.15 14.05 6.21C14.25 6.76 13.83 7.34 13.24 7.34H12.98C12.61 7.34 12.31 7.08 12.21 6.72C11.98 5.96 11.35 5.47 10.09 5.47C8.59 5.47 7.69 6.15 7.69 7.11C7.69 7.95 8.34 8.5 10.36 9.02C12.38 9.54 14.54 10.41 14.54 12.93C14.52 14.76 13.15 15.76 11.41 16.09Z" fill="#63C77F"/>
</svg>
const cross=()=><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.6351 1.70106L12.2985 0.364502L6.99967 5.66336L1.70082 0.364502L0.364258 1.70106L5.66311 6.99992L0.364258 12.2988L1.70082 13.6353L6.99967 8.33648L12.2985 13.6353L13.6351 12.2988L8.33624 6.99992L13.6351 1.70106Z" fill="black"/>
</svg>




    return(
        <>
<div className="graysection_container">
<div className="graysection_card">
    <div className="graysection_card_left">
        <img src="../page/camper.png"></img>
        <div className="graysection_card_left--header">Join the club</div>
        <div className="graysection_card_left--content">Subscribe and Get an Extra <b><u>25% Off</u></b> on your first purchase.</div>
        <input readOnly className="graysection_card_left--input" type="email" placeholder="Email adress"></input>
        <button className="graysection_card_left--button">Subscribe</button>
        <div className="graysection_card_left--privacy">By signing up, you agree to  <u>Privacy Policy</u> and <u>Terms of Use.</u></div>
    </div>
    <div className="graysection_card_right">
    <div className="graysection_card_icons cross">{cross()}</div>
    <div className="graysection_card_icons one">{lightningIcon()}  <b>Grow email list</b></div>
    <div className="graysection_card_icons two">{dollarIcon()} <b>Increase sales conversion</b></div>
    <div className="graysection_right_bottomText">Mediterranean Sneakers®</div>
    </div>
</div>
<div className="graysection_row">
    {textList.map((text,idx)=>
    <div key={idx}>
        <div className="graysection_header">{text[0]}</div>
        <div className="graysection_content">{text[1]}<br/>{text[2]}</div>
    </div>
    )}
    <div>Popupsmart meets <br/> all your business <br/>needs.</div>
</div>
</div>
</>
    )
}

export default Graysection