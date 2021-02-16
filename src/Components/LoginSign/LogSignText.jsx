const InputsText = {
        loginInput : [
            {name:'username, phone number or email', useAs:'usephemail'},
            {name:'password', useAs:'password', type:'password'}
        ],
        signInput : [
            {name:'mobile Number', useAs:'number', type:'number' },
            {name:'email', useAs:'email', type:"email"},
            {name:'full Name', useAs:'fullName', type:'text'},
            {name:'username', useAs:'username', minLength:2, type:'text'},
            {name:'password', useAs:'password', minLength:5, type:'password'}
        ]
}

export {InputsText}