import {  useState } from "react"

import { useParams, useResolvedPath } from "react-router-dom";
import commentsApi from "../../api/comments-api";
import { useGetOneGames } from "../../hooks/useGames";

export default function Details() {
    const { gameId } = useParams();
    const [game, setGame] = useGetOneGames(gameId);
    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');






    //Refactors coming
    const commentSubmitHanlder = async (e) => {
        e.preventDefault();

        const newComment = await commentsApi.create(gameId, username, comment);
        
        setGame(prevState => ({
            ...prevState,
            comments: {
                ...prevState.comments,
                [newComment._id]: newComment,
            }
        }))

        setUsername('');
        setComment('');

    }



    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src="images/MineCraft.png" />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">
                    {game.description}
                </p>

                <div className="details-comments">
                    <h2>Comments:</h2>

                    <ul>
                    </ul>


                    {Object.keys(game.comments || {}).length > 0
                        ? Object.values(game.comments).map(comment => (
                            <li key={comment._id} className="comment">
                                <p>{comment.username}: {comment.text}</p>
                            </li>


                        )) :
                        <p className="no-comment">No comments.</p>

                    }


                </div>

                {/* <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div> */}
            </div>

            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={commentSubmitHanlder}>
                    <input
                        type="text"
                        placeholder="Pesho"
                        name="username"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}

                    />

                    <textarea
                        name="comment"
                        placeholder="Comment......"
                        onChange={(e) => setComment(e.target.value)}
                        value={comment}>
                    </textarea>

                    <input
                        className="btn submit"
                        type="submit"
                        value="Add Comment" />
                </form>
            </article>

        </section>

    )
}