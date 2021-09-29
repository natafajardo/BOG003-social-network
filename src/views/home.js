

export const signOut = () => {
    return firebase.auth().signOut();
}


export const createHome = (posts) => `
<header class="header">
    <div class="menu">
        <div class="logo">
            <img src="../img/logotipofinal-home.png" alt="Logotipo">
        </div>
    </div>
</header>
<div>
    <nav class="nav">
        <a href="#"><img src="../img/home-muro.png" alt="home"></a>
        <a href="#"><img src="../img/paw-home.png" alt="perfil"></a>
        <button class="buttonLogOut" id="logout">
            <img src="../img/logout-home.png" alt="logout">
        </button>                
    </nav>
</div>
<div class="muroHome">
    <img class="userProfile" src="../img/usuariogato-home.png" alt="usuarioPrincipal">
    <form>
        <input class="inputHomeOne" type="text" placeholder="¿Qué quieres publicar hoy?">
    </form>
</div>
<section publicacionesHome>${posts}</section>
<footer class="footer">
</footer>
`;

export const createPost = (data) => `
<div class="postMuroOne">
        <div>
            <img class="UsuarioUno" src="../img/profile-dog-home.png" alt="usuarioamigoperro">
        </div>
        <div>
            <h3>${data.username}</h3>
            <img class="publico" src="../img/globo1.png" alt="publico">
            <div>
                <p>${data.texto}</p>
            </div>
        </div>
    </div>
        <div class="postMuroTwo">
            <p>El amor es una palabra de cuatro patas</p>
            <img class="fotoPublicacion" src="../img/post-home.png" alt="fotoPublicacion">
        </div>
    <div class="takePart">
        <a href="#"><img src="../img/Likes-muro.png" alt="like">  Me gusta</a>
        <a href="#"><img src="../img/comment.png" alt="comment">  Comentar</a>
        <a href="#"><img src="../img/share.png" alt="share">  Compartir</a> 
    </div>`;



export const homeView = async () => {
    let home = "";
    let posts = "";
    await firebase.firestore().collection("posts").get().then(async (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            posts += createPost(doc.data());
        });
        home = await createHome(posts);
    });
    return home;
}

