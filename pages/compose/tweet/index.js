import AppLayout from 'components/AppLayout';
import Button from 'components/Button';
import useUser from 'hooks/useUser';
import { useState } from 'react';

import { addBirdit } from 'firebase/client';
import { useRouter } from 'next/router';

const COMPOSE_STATES = {
    USER_NOT_KNOWN: 0,
    LOADING: 1,
    SUCCESS: 2,
    ERROR: -1,
};

export default function ComposeTweet() {
    const user = useUser();
    const router = useRouter();
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOWN);
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
        })
            .then(() => router.push('/home'))
            .catch(err => {
                console.error(err);
                setStatus(COMPOSE_STATES.ERROR);
            });
    };

    const isButtonDisabled =
        !message.length || status === COMPOSE_STATES.LOADING;

    return (
        <>
            <AppLayout>
                <form onSubmit={handleSubmit}>
                    <textarea
                        onChange={handleChange}
                        placeholder="what's going on?"
                        value={message}
                    ></textarea>
                    <div>
                        <Button disabled={isButtonDisabled}>Bird it!</Button>
                    </div>
                </form>
            </AppLayout>
            <style jsx>{`
                div {
                    padding: 15px;
                }

                textarea {
                    border: 0;
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
