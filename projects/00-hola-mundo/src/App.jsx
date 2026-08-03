import './App.css';
import { TwitterFollowCard } from "./TwitterFollorCard";

export function App () {
    const formatUsername = (username) => `@${username}`;

    return (
        <section className='App'>
            <TwitterFollowCard  formatUsername={formatUsername}  username="midudev" name="Miguel Angel"/>
            <TwitterFollowCard  formatUsername={formatUsername}  username="sky" name="Cielo de barril"/>
            <TwitterFollowCard  formatUsername={formatUsername}  username="sonodetha" name="Matias Sonoda"/>
            <TwitterFollowCard  formatUsername={formatUsername}  username="oplakase" name="ola k ase 11"/>
            <TwitterFollowCard  formatUsername={formatUsername}  username="traductorTeAmA" name="el tradu"/>
        </section>
    )
} 