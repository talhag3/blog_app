const urls = {
    LOGIN:process.env.API_URL+'login',
    REGISTER:process.env.API_URL+'register',
    LOGOUT:process.env.API_URL+'logout',
    SAVE_POST:process.env.API_URL+'posts/create',
    GET_POSTS:process.env.API_URL+'posts',
    GET_POST:process.env.API_URL+'posts/',
    EDIT_POST:process.env.API_URL+'posts/edit/',
    DELETE_POST:process.env.API_URL+'posts/delete/',
    LIKE_POST:process.env.API_URL+'post_like/',
    UNLIKE_POST:process.env.API_URL+'post_unlike/',
    GET_THREADS:process.env.API_URL+'threads',
    GET_THREAD_MESSAGES:process.env.API_URL+'thread-messages',
    SEND_MESSAGE:process.env.API_URL+'send-message',
}

export default urls;