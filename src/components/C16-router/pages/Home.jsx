import React from 'react'
import { Link } from 'react-router-dom'
// con el componente Link ya la pagina no se recarga (SPA - Single Page Application)

export const Home = () => {
    return (
        <p>home</p>
        // <div>
        //     <h1>Home</h1>
        //     <nav>
        //         <ul>
        //             <li>
        //                 {/* ya no se ua el "a" sino el "Link" */}
        //                 {/* <a href="/">App</a> */}
        //                 <Link to="/">App</Link>
        //             </li>
        //             <li>
        //                 {/* <a href="/Home">Home</a> */}
        //                 <Link to="/Home">Home</Link>
        //             </li>
        //             <li>
        //                 <Link to="/RickAndMorty">1. RickAndMorty</Link>
        //             </li>
        //             <li>
        //                 <Link to="/UserApi">2. UseApi</Link>
        //             </li>
        //             <li>
        //                 <Link to="/posts">3. Posts</Link>
        //             </li>
        //             <li>
        //                 <Link to="/posts/123">3. Post detail</Link>
        //             </li>
        //         </ul>
        //     </nav>
        //</div>
    )
}
