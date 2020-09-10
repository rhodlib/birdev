import Avatar from 'components/Avatar';
import useTimeAgo from 'hooks/useTimeAgo';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Birdit({
    avatar,
    username,
    img,
    id,
    content,
    createdAt,
}) {
    const timeago = useTimeAgo(createdAt);
    const router = useRouter();

    const handleArticleClick = event => {
        event.preventDefault();
        router.push('status/[id]', `/status/${id}`);
    };

    return (
        <>
            <article onClick={handleArticleClick}>
                <div>
                    <Avatar src={avatar} alt={username} />
                </div>
                <section>
                    <header>
                        <strong>{username}</strong>
                        <span> . </span>
                        <Link href={`/status/[id]`} as={`/status/${id}`}>
                            <a>
                                <time>{timeago}</time>
                            </a>
                        </Link>
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

                article:hover {
                    background: #f5f8fa;
                    cursor: pointer;
                }

                img {
                    width: 100%;
                    height: auto;
                    margin-top: 10px;
                    border-radius: 10px;
                }

                a {
                    color: #555;
                    font-size: 14px;
                    text-decoration: none;
                }

                a:hover {
                    text-decoration: underline;
                }

                div {
                    padding-right: 10px;
                }

                p {
                    line-height: 1.3125;
                    margin: 0;
                }

                time {
                    color: #555;
                    font-size: 12px;
                }
            `}</style>
        </>
    );
}
