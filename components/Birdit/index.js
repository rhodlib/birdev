import Avatar from 'components/Avatar';
import useTimeAgo from 'hooks/useTimeAgo';

export default function Birdit({
    avatar,
    username,
    img,
    id,
    content,
    createdAt,
}) {
    const timeago = useTimeAgo(createdAt);
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
                        <date>{timeago}</date>
                    </header>
                    <p>{content}</p>
                    {img && <img src={img} />}
                </section>
            </article>
            <style jsx>{`
                article {
                    border-bottom: 1px solid #eee;
                    display: flex;
                    padding: 10px 15px;
                }

                img {
                    width: 100%;
                    height: auto;
                    margin-top: 10px;
                    border-radius: 10px;
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
