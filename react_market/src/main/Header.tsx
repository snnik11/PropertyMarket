import logo from "./logo.jpg";

//props
type Args = {
    subtitle : string
} 

//function component
//subtitle destructured
const Header = ({subtitle}: Args) => {
    return (
        <header className= "row mb-4">
            <div className = "col-5">
                <img src= {logo} className="logo" alt = "logo"/>
            </div>
            <div className="col-7 mt-5 subtitle">{subtitle}</div>
        </header>
    )
}

export default Header;