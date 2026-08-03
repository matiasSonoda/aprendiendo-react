import "./App.css"
export function TwitterFollowCard({username, name, isfollowing}) {
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
                    <span className="tw-followCard-infoUsername">@{username}</span>
                </div>
            </header>
            <aside>
                <button className="tw-followCard-Button">
                    {isfollowing}
                </button>
            </aside>
        </article>
    )
}