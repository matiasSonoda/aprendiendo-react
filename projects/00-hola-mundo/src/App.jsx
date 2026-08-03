import './App.css';
import { TwitterFollowCard } from "./TwitterFollorCard";

const users = [
  {
    username: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    username: 'pheralb',
    name: 'Pablo H.',
    isFollowing: false
  },
  {
    username: 'PacoHdezs',
    name: 'Paco Hdez',
    isFollowing: true
  },
  {
    username: 'TMChein',
    name: 'Tomas',
    isFollowing: false
  }
]

export function App () {
    const formatUsername = (username) => `@${username}`;

    return (
        <section className='App'>
            {
                users.map(({username,name,isFollowing}) => (
                    <TwitterFollowCard
                        key={username}
                        formatUsername={formatUsername}
                        username={username}
                        name={name}
                        isFollowing={isFollowing}
                    ></TwitterFollowCard>
                ))
            }
        </section>
    )
} 