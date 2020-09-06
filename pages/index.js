import Head from 'next/head';
import AppLayout from 'components/AppLayout';
import { colors } from 'styles/theme';
import Button from 'components/Button';
import GitHub from 'components/Icons/GitHub';
import { loginWithGitHub, onAuthStateChanged } from 'firebase/client';
import { useState, useEffect } from 'react';
import Avatar from 'components/Avatar';

export default function Home() {
    const [user, setUser] = useState(undefined);

    useEffect(() => {
        onAuthStateChanged(setUser);
    }, []);

    const handleClick = () => {
        loginWithGitHub()
            .then(user => {
                setUser(user);
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <>
            <Head>
                <title>Birdev</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <AppLayout>
                <section>
                    <img src="/bird.svg" alt="Logo"></img>
                    <h1>
                        Bir<a href="https://nextjs.org">dev</a>
                    </h1>
                    <h2>Talk about development and IT</h2>
                    <div>
                        {user === null && (
                            <Button onClick={handleClick}>
                                <GitHub
                                    width={24}
                                    height={24}
                                    fill={colors.white}
                                />
                                Login with GitHub
                            </Button>
                        )}
                        {user && user.avatar && (
                            <div>
                                <Avatar
                                    src={user.avatar}
                                    alt={user.username}
                                    text={user.username}
                                />
                            </div>
                        )}
                    </div>
                </section>
            </AppLayout>

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
