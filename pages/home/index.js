import AppLayout from 'components/AppLayout';
import { useState, useEffect } from 'react';
import Birdit from 'components/Birdit';
import { colors } from 'styles/theme';
import useUser from 'hooks/useUser';
import { fetchLatestBirdits } from 'firebase/client';

export default function HomePage() {
    const [timeline, setTimeline] = useState([]);
    const user = useUser();

    useEffect(() => {
        user && fetchLatestBirdits().then(setTimeline);
    }, [user]);

    return (
        <>
            <AppLayout>
                <header>
                    <h2>Inicio</h2>
                </header>
                <section>
                    {timeline.map(
                        ({
                            id,
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
                                    key={id}
                                    content={content}
                                    username={username}
                                    userId={userId}
                                />
                            );
                        }
                    )}
                </section>
                <nav></nav>
            </AppLayout>
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

                h2 {
                    font-size: 21px;
                    font-weight: 800;
                    padding-left: 15px;
                }

                nav {
                    background: ${colors.white};
                    bottom: 0;
                    border-top: 1px solid #eee;
                    height: 49px;
                    position: sticky;
                    width: 100%;
                }
            `}</style>
        </>
    );
}
