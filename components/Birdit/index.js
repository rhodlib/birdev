import Avatar from 'components/Avatar';

export default function Birdit({ avatar, username, name, id, message }) {
    return (
        <>
            <article key={id}>
                <div>
                    <Avatar src={avatar} alt={username} />
                </div>
                <section>
                    <strong>{username}</strong>
                    <p>{message}</p>
                </section>
            </article>
            <style jsx>{`
                article {
                    border-bottom: 1px solid #eaf7ff;
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
            `}</style>
        </>
    );
}
