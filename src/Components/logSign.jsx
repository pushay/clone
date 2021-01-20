import React from 'react';
import transparentPhone from '../Assets/transparentPhone.png'

function LogSign(props){
    return(
        <div className='logSign'>
            {
            props.login
            ? 
            <div className=''>
                <img src={transparentPhone} alt=""/>
            </div>
            :
            null
            }
        </div>
    )
}

export default LogSign

// <main 
//     class="login__main">
//         <article 
//         class="login__article">
//             <div 
//             class="login__imageContainer">
//                 <img src="/instagram/content/images/takephoto.jpg" 
//                 alt="niagaraphoto"
//                 class="login__image"
//                 >
//             </div>
//             <div class="login__logContainer">
//             <div
//             class="login__logToInstagram">
//                 <h1 class="login__header">Instagram</h1>
//                 <div
//                 class="login__formContainer">
//                     <form class="login__form">
//                         <input name="username"
//                         class="login__input"
//                         placeholder="username">
//                         <input name="password"
//                         class="login__input"
//                         placeholder="password">
//                         <button
//                         class="login__button">
//                             Log in
//                         </button>
//                     </form>
//                     <div
//                     class="login__facebookContainer">
//                         <button class="login__facebook">
//                         PUT HERE LOGIN TO FACEBOOK
//                         </button>
//                     </div>
//                 </div> 
//             </div>
//             <div
//             class="login__logToInstagram login__logToInstagram--checkAccount">
//                 <p class="login__paragraph"> Don't have a account?</p>
//                 <a class="login__link"
//                 href="#">Sign up</a>
//             </div>
//             </div>
//         </article>
//     </main>
// </section>
// <?php include $_SERVER['DOCUMENT_ROOT'].'/instagram/view/templates/footer.php';?>
