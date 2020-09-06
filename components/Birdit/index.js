import Avatar from 'components/Avatar';

export default function Birdit({
    avatar,
    username,
    id,
    content,
    userId,
    createdAt,
}) {
    return (
        <>
            <article key={id}>
                <div>
                    <Avatar src={avatar} alt={username} />
                </div>
                <section>
                    <header>
                        <strong>{username}</strong>
                        <span> . </span>
                        <date>{createdAt}</date>
                    </header>
                    <p>{content}</p>
                </section>
            </article>
            <style jsx>{`
                article {
                    border-bottom: 1px solid #eee;
                    display: flex;
                    padding: 10px 15px;
                }

                div {
                    padding-right: 10px;
                }

                p {
                    line-height: 1.3125;
                    margin: 0;
                }

                date {
                    color: #555;
                    font-size: 12px;
                }
            `}</style>
        </>
    );
}
