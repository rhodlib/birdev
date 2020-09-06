export default function Avatar({ alt, src, text }) {
    return (
        <>
            <div>
                <img alt={alt} src={src} title={alt} />
                {text && <strong>{text}</strong>}
            </div>
            <style jsx>{`
                img {
                    border-radius: 9999px;
                    height: 49px;
                    width: 49px;
                }

                img + strong {
                    margin-left: 8px;
                }

                div {
                    display: flex;
                    align-items: center;
                }
            `}</style>
        </>
    );
}
