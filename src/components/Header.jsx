export default function Header(props) {
    return(
        <header className="container">
            <h1>{props.title}</h1>
            <span>{props.subtitle}</span>
        </header>
    );
}