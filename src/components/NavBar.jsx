import SearchInput from "./SearchInput";

function NavBar() {
    return (
        <div id="navbar">
            <div id="app-name"><strong><a href="#">Kanisa Digital</a></strong></div>
            <nav class="navbar">
                <SearchInput />
                <a class="navlinks" href="#about-us">About Us</a>
                <a class="navlinks" href="#contact-us">Contact Us</a>
            </nav>
        </div>
    );
}

export default NavBar;