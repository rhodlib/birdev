import AppLayout from 'components/AppLayout';
import { useState, useEffect } from 'react';
import Birdit from 'components/Birdit';

export default function HomePage() {
    const [timeline, setTimeline] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/statuses/home_timeline')
            .then(res => res.json())
            .then(setTimeline);
    }, []);

    return (
        <>
            <AppLayout>
                <header>
                    <h2>Inicio</h2>
                </header>
                <section>
                    {timeline.map(birdit => {
                        return (
                            <Birdit
                                avatar={birdit.avatar}
                                id={birdit.id}
                                key={birdit.id}
                                message={birdit.message}
                                username={birdit.username}
                            />
                        );
                    })}
                </section>
                <nav></nav>
            </AppLayout>
            <style jsx>{`
                header {
                    display: flex;
                    align-items: center;
                    height: 49px;
                    border-bottom: 1px solid #ccc;
                    position: sticky;
                    top: 0;
                    width: 100%;
                }

                h2 {
                    font-size: 21px;
                    font-weight: 800;
                }

                section {
                    padding-top: 49px;
                }

                nav {
                    bottom: 0;
                    border-top: 1px solid #ccc;
                    height: 49px;
                    position: fixed;
                    width: 100%;
                }
            `}</style>
        </>
    );
}
