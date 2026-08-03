import "./App.css";
import {useState} from 'react';

export function TwitterFollowCard({formatUsername,username, name}) {
    const [isFollowing, setIsFollowing] = useState(false);
    const handleClick = () => {
        setIsFollowing(!isFollowing);
    };
    const text = isFollowing ? 'siguiendo' : 'seguir';
    const buttonClassname = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';
    const imageSrc = `https://unavatar.io/x/${username}`;
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                    <img
                        className="tw-followCard-avatar" 
                        alt="avatar de una carita feliz" 
                        src={imageSrc}/>
                <div className="tw-followCard-info">
                    <strong>{name}</strong>
                    <span className="tw-followCard-infoUsername">{formatUsername(username)}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassname} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}