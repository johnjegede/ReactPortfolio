function Footer() {
    let styles = {
        textAlign: "center"
    }
    return (
        <>
        <footer className="footer mt-auto py-3 bg-dark fixed-bottom"  style={styles}>
            <div className="container">
            <span className="text-muted">John Jegede 2021.</span>
            </div>
        </footer>
        </>
    );
}

export default Footer;