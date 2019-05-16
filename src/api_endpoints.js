const urls = {
    LOGIN:process.env.API_URL+'login',
    REGISTER:process.env.API_URL+'register',
    LOGOUT:process.env.API_URL+'logout',
    SAVE_POST:process.env.API_URL+'posts/create',
    GET_POSTS:process.env.API_URL+'posts',
    GET_POST:process.env.API_URL+'posts/',
    EDIT_POST:process.env.API_URL+'posts/edit/',
    DELETE_POST:process.env.API_URL+'posts/delete/'
}

export default urls;