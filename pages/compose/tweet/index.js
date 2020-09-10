import Button from 'components/Button';
import useUser from 'hooks/useUser';
import { useState, useEffect } from 'react';
import Avatar from 'components/Avatar';
import { addBirdit, uploadImage } from 'firebase/client';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { colors } from 'styles/theme';

const COMPOSE_STATES = {
    USER_NOT_KNOWN: 0,
    LOADING: 1,
    SUCCESS: 2,
    ERROR: -1,
};

const DRAG_IMAGE_STATES = {
    ERROR: -1,
    NONE: 0,
    DRAG_OVER: 1,
    UPLOADING: 2,
    COMPLETE: 3,
};

export default function ComposeTweet() {
    const user = useUser();
    const router = useRouter();
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOWN);
    const [drag, setDrag] = useState(DRAG_IMAGE_STATES.NONE);
    const [task, setTask] = useState(null);
    const [imgURL, setImgURL] = useState(null);

    useEffect(() => {
        if (task) {
            const onProgress = () => {};
            const onError = () => {};
            const onComplete = () => {
                console.log('oncomplete');
                task.snapshot.ref.getDownloadURL().then(setImgURL);
            };
            task.on('state_changed', onProgress, onError, onComplete);
        }
    }, [task]);

    const handleChange = event => {
        const { value } = event.target;
        setMessage(value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        setStatus(COMPOSE_STATES.LOADING);
        addBirdit({
            avatar: user.avatar,
            content: message,
            userId: user.uid,
            username: user.username,
            img: imgURL,
        })
            .then(() => router.push('/home'))
            .catch(err => {
                console.error(err);
                setStatus(COMPOSE_STATES.ERROR);
            });
    };

    const handleDragEnter = event => {
        event.preventDefault();
        setDrag(DRAG_IMAGE_STATES.DRAG_OVER);
    };

    const handleDragLeave = event => {
        event.preventDefault();
        setDrag(DRAG_IMAGE_STATES.NONE);
    };

    const handleDrop = event => {
        event.preventDefault();
        setDrag(DRAG_IMAGE_STATES.NONE);
        const file = event.dataTransfer.files[0];
        const task = uploadImage(file);
        setTask(task);
    };

    const isButtonDisabled =
        !message.length || status === COMPOSE_STATES.LOADING;

    return (
        <>
            <Head>
                <title>Write a Birdit / Birdev</title>
            </Head>
            <section className="form-container">
                {user && (
                    <section className="avatar-container">
                        <Avatar src={user.avatar} alt={user.username} />
                    </section>
                )}
                <form onSubmit={handleSubmit}>
                    <textarea
                        onDragEnter={handleDragEnter}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        onChange={handleChange}
                        placeholder="What's going on?"
                        value={message}
                    ></textarea>
                    {imgURL && (
                        <section className="remove-img">
                            <button onClick={() => setImgURL(null)}>x</button>
                            <img src={imgURL} />
                        </section>
                    )}
                    <div>
                        <Button disabled={isButtonDisabled}>Bird it!</Button>
                    </div>
                </form>
            </section>
            <style jsx>{`
                div {
                    padding: 15px;
                }

                button {
                    background: rgba(0, 0, 0, 0.3);
                    color: ${colors.white};
                    position: absolute;
                    width: 32px;
                    height: 32px;
                    font-size: 24px;
                    border: 0;
                    border-radius: 999px;
                    top: 15px;
                    right: 15px;
                }

                .avatar-container {
                    padding-top: 20px;
                    padding-left: 10px;
                }

                .form-container {
                    display: flex;
                    align-items: flex-start;
                }

                .remove-img {
                    position: relative;
                }

                form {
                    padding: 10px;
                }

                img {
                    height: auto;
                    width: 100%;
                    border-radius: 10px;
                }

                textarea {
                    border: ${drag === DRAG_IMAGE_STATES.DRAG_OVER
                        ? '3px dashed #09f'
                        : '3px solid transparent'};
                    border-radius: 10px;
                    padding: 15px;
                    resize: none;
                    font-size: 21px;
                    width: 100%;
                    outline: 0;
                }
            `}</style>
        </>
    );
}
