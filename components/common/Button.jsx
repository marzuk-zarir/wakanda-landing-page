export default function Button({ children, alt = false, ...props }) {
    return (
        <button className={alt ? 'btn-alt' : 'btn'} {...props}>
            {children}
        </button>
    )
}
