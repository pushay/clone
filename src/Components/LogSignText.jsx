const InputsText = {
        loginInput : [
            {name:'username, phone number or email', type:'all'},
            {name:'password', type:'password'}
        ],
        signInput : [
            {name:'Mobile Number', type:'number'},
            {name:'Email', type:'email'},
            {name:'Full Name', type:'fullName'},
            {name:'Username', type:'username'},
            {name:'Password', type:'password'}
        ]
}

const LogSignTexts = {
    login:{
        question : {
            question: 'Have an account?',
            link:'/',
            linkText:'Log in'
        }
    },
    signup : {
        headingText:'Sign up to see photos and videos from fake people.',
        question : {
            question:"Don't have an account?",
            link:'/SignUp',
            linkText:'Sign in'
        },
        belowText:'By signing up, you agree to our Terms. Any data submited will not be used against you and will be collected only for educational purpose of this project.'
    }
}

export {InputsText, LogSignTexts}