import styles from '@/styles/subscribe-cta.comp.module.scss';
import { useState } from 'react';
import { PropagateLoader } from 'react-spinners';
import { Button } from './Button';
import { InlineForm } from './InlineForm';
import { Input } from './Input';
import { Section } from './Section';
import { event } from 'nextjs-google-analytics';

export const SubscribeCta = () => {
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);
    const [loading, setLoading] = useState(false);

    // Subscribe the user
    const sub = async () => {
        if (!email || email.length < 4) return;
        setLoading(true);
        setError('');

        try {
            const res = await fetch('/api/subscribe', {
                body: JSON.stringify({ email }),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST',
            });

            // If there is an error throw.
            const { error } = await res.json();
            if (error) throw new Error();

            // Track the event
            event('submit_form', {
                category: 'Subscribe',
                label: `New Subscriber: ${email} `,
            });

            setSubscribed(true);
        } catch (err) {
            setError(
                'Failed to subscribe. Double check your email and try again.'
            );
        }

        setLoading(false);
    };

    return (
        <Section>
            <div className={styles.sub_cta}>
                <h1>Subscribe Now!</h1>
                <p style={{ maxWidth: '650px', textAlign: 'center' }}>
                    Stay ahead with our exclusive updates on cutting-edge
                    projects, insightful blogs, and everything you need to know
                    about the world of development.
                </p>
                {!loading ? (
                    <>
                        {!subscribed ? (
                            <InlineForm>
                                <Input
                                    type="email"
                                    placeholder="Enter your email address."
                                    value={email}
                                    onChange={(v: string) => setEmail(v)}
                                />
                                <Button id="black-btn" onClick={() => sub()}>
                                    Subscribe!
                                </Button>
                            </InlineForm>
                        ) : (
                            <p>Congratulations! You are now subscribed.</p>
                        )}
                        {error && <p>{error}</p>}
                    </>
                ) : (
                    <PropagateLoader />
                )}
            </div>
        </Section>
    );
};
