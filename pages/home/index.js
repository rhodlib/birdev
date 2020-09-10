import { useState, useEffect } from 'react';
import Birdit from 'components/Birdit';
import { colors } from 'styles/theme';
import useUser from 'hooks/useUser';
import { fetchLatestBirdits } from 'firebase/client';
import Link from 'next/link';
import Create from 'components/Icons/Create';
import Home from 'components/Icons/Home';
import Search from 'components/Icons/Search';
import Head from 'next/head';

export default function HomePage() {
    const [timeline, setTimeline] = useState([]);
    const user = useUser();

    useEffect(() => {
        user && fetchLatestBirdits().then(setTimeline);
    }, [user]);

    return (
        <>
            <Head>
                <title>Home / Birdev</title>
            </Head>
            <header>
                <h2>Inicio</h2>
            </header>
            <section>
                {timeline.map(
                    ({
                        id,
                        img,
                        username,
                        avatar,
                        content,
                        userId,
                        createdAt,
                    }) => {
                        return (
                            <Birdit
                                avatar={avatar}
                                createdAt={createdAt}
                                id={id}
                                img={img}
                                key={id}
                                content={content}
                                username={username}
                                userId={userId}
                            />
                        );
                    }
                )}
            </section>
            <nav>
                <Link href="/compose/tweet">
                    <a>
                        <Home with={32} height={32} />
                    </a>
                </Link>
                <Link href="/compose/tweet">
                    <a>
                        <Search with={32} height={32} />
                    </a>
                </Link>
                <Link href="/compose/tweet">
                    <a>
                        <Create with={32} height={32} />
                    </a>
                </Link>
            </nav>
            <style jsx>{`
                header {
                    background: #ffffffaa;
                    backdrop-filter: blur(5px);
                    display: flex;
                    align-items: center;
                    height: 49px;
                    border-bottom: 1px solid #eee;
                    position: sticky;
                    top: 0;
                    width: 100%;
                }

                section {
                    flex: 1;
                }

                h2 {
                    font-size: 21px;
                    font-weight: 800;
                    padding-left: 15px;
                }

                nav {
                    background: ${colors.white};
                    bottom: 0;
                    display: flex;
                    border-top: 1px solid #eee;
                    height: 49px;
                    position: sticky;
                    width: 100%;
                }

                nav a {
                    align-items: center;
                    display: flex;
                    flex: 1 1 auto;
                    height: 100%;
                    justify-content: center;
                }

                nav a:hover {
                    background: radial-gradient(#0099ff22 15%, transparent 16%);
                    background-size: 180px 180px;
                    background-position: center;
                }
            `}</style>
        </>
    );
}
