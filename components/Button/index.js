import { colors } from '../../styles/theme';

export default function Button({ children, onClick }) {
    return (
        <>
            <button onClick={onClick}>{children}</button>
            <style jsx>{`
                button {
                    align-items: center;
                    display: flex;
                    background: ${colors.black};
                    border: 0;
                    color: ${colors.white};
                    font-size: 16px;
                    cursor: pointer;
                    font-weight: 800;
                    border-radius: 9999px;
                    padding: 8px 24px;
                    transition: opacity 0.3s ease;
                    outline: none;
                }

                button > :global(svg) {
                    margin-right: 8px;
                }

                button:hover {
                    opacity: 0.7;
                }
            `}</style>
        </>
    );
}
