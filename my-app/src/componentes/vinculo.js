import './vinculo.css'

function vinculo ({ children, texto, href }) {
    return (
        <a href={href} className="vinculo">
        {children}
        {texto && <span className='text' >{texto}</span>}
        </a>
    );
}

export default vinculo;