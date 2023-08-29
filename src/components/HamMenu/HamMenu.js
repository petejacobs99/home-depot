export default function HamMenu() {

    const handleClick = () => {
        console.log('Clicked!')
    }

    return (
        <ul>
            <li>
                { user ? 
                    <ul>
                        <li onClick={handleClick}>MY ACCOUNT</li>
                        <li onClick={handleClick}>WISHLIST</li>
                        <li onClick={handleClick}>ORDER HISTORY</li>
                        <li onClick={handleClick}>LOGOUT</li>
                    </ul>
                    :
                    <p>SIGN IN / SIGN UP</p>
                }
            </li>
            <li>
                <ul>
                    <li onClick={handleClick}>FAQ</li>
                    <li onClick={handleClick}>ABOUT US</li>
                </ul>
            </li>
        </ul>
    );
}