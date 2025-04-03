import Nav from "../components/Nav";

const Header = () => {
    return (
        <header
            style={{
                position: 'sticky',
                top: 0,
                width: '100%',
                zIndex: 1000,  
                backgroundColor: '#fff',  
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            }}
        >
            <Nav />
        </header>
    );
};

export default Header;
