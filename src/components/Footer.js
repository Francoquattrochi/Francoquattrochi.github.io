function Footer(){
    const currYear = new Date().getFullYear()
    return(
        <p className='footer'>copyright @ {currYear}</p>
    )
}
export default Footer;