import { fonts, colors, breakpoints } from 'styles/theme';
import { addOpacityToColor } from 'styles/utils';

const backgroundColor = addOpacityToColor(colors.primary, 0.3);

export default function AppLayout({ children }) {
    return (
        <>
            <div>
                <main>{children}</main>
            </div>
            <style jsx>{`
                div {
                    display: grid;
                    height: 100vh;
                    place-items: center;
                }

                main {
                    overflow-y: auto;
                    position: relative;
                    background-color: ${colors.white};
                    border-radius: 10px;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
                    height: 100%;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                }

                @media (min-width: ${breakpoints.mobile}) {
                    main {
                        width: ${breakpoints.mobile};
                        height: 90vh;
                    }
                }
            `}</style>
            <style jsx global>{`
                html,
                body {
                    background-image: radial-gradient(
                            ${backgroundColor} 1px,
                            transparent 1px
                        ),
                        radial-gradient(${backgroundColor} 1px, transparent 1px);
                    background-position: 0 0, 25px 25px;
                    background-size: 50px 50px;
                    padding: 0;
                    margin: 0;
                    font-family: ${fonts.base};
                    overflow: hidden;
                }

                a {
                    color: inherit;
                    text-decoration: none;
                }

                * {
                    box-sizing: border-box;
                }

                textarea,
                input {
                    font-family: ${fonts.base};
                }
            `}</style>
        </>
    );
}
