import Head from 'next/head';
import { colors } from 'styles/theme';
import Button from 'components/Button';
import GitHub from 'components/Icons/GitHub';
import { loginWithGitHub } from 'firebase/client';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import useUser, { USER_STATES } from 'hooks/useUser';

export default function Home() {
    const user = useUser();
    const router = useRouter();

    useEffect(() => {
        user && router.replace('/home');
    }, [user]);

    const handleClick = () => {
        loginWithGitHub().catch(err => {
            console.log(err);
        });
    };

    return (
        <>
            <Head>
                <title>Birdev</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section>
                <img src="/bird.svg" alt="Logo"></img>
                <h1>
                    Bir<a href="https://nextjs.org">dev</a>
                </h1>
                <h2>Talk about development and IT</h2>
                <div>
                    {user === USER_STATES.NOT_LOGGED && (
                        <Button onClick={handleClick}>
                            <GitHub
                                width={24}
                                height={24}
                                fill={colors.white}
                            />
                            Login with GitHub
                        </Button>
                    )}
                    {user === USER_STATES.NOT_KNOWN && (
                        <img src="/loader.gif"></img>
                    )}
                </div>
            </section>

            <style jsx>{`
                div {
                    margin-top: 16px;
                }

                img {
                    width: 120px;
                }

                section {
                    display: grid;
                    height: 100%;
                    place-items: center;
                    place-content: center;
                }

                h1 {
                    color: ${colors.primary};
                    font-weight: 800;
                    margin-bottom: 16px;
                }

                h2 {
                    color: ${colors.secondary};
                    font-size: 21px;
                    margin: 0;
                }
            `}</style>
        </>
    );
}
