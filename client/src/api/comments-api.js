import requester from "./requester";

const BASE_URL = "http://localhost:3030/jsonstore/games";
const buildURL = (gameId) => `${BASE_URL}/${gameId}/comments`;

// http://localhost:3030/jsonstore/games/53437bdf-3e3f-40c5-b8b0-12e54f5331c5/comments

const create = async (gameId, username, text) => requester.post(buildURL(gameId), { username, text });




const getAll = async (gameId)=>{
  const result = await requester.get(buildURL(gameId))
  
  const comments = Object.values(result);

  return comments;
}

const commentsApi = {
    create,
    getAll,
}

export default commentsApi;
