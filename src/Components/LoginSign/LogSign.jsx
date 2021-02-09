import React, { useEffect} from 'react';
import ImageSlider from '../ImageSlider/ImageSlider';
import TextBlock from '../TextBlock/TextBlock';
import TextBlockTexts from '../TextBlock/TextBlockText';
import Form from '../Form/Form';

function LogSign(props){

    useEffect(() => {
        facebookLogin();
    }, [])

    const facebookLogin = () => {
        if (window.FB) {
            window.FB.Event.subscribe('auth.login', (response) => {
                getData();
            });
        } else {
            setTimeout(() => facebookLogin(), 1000)
        }
    }

    const getData = () => {
        window.FB.api(
            '/me',
            'GET',
            {"fields":"id, name, email"},
            (response) => {
                fetchSQl(response)
            }
        )
    }

    const fetchSQl = (data) => {
        let formData = new FormData();
        for (let [key, value] of Object.entries(data)){
            formData.append(key, value)
        }
        fetch('http://localhost/backend/login/connectDatabase.php', {
            method:'POST',
            mode:'cors',
            body: formData
        }).then(response => response.text())
    }

    return(
        <div className='logSign' style={{padding:props.inputs === 'loginInput' ? '11.5rem 2rem' : '5.5rem 2rem'}}>
            {props.imageSlider === 'login' ? 
                <ImageSlider imageSlider='login'/>
            : null 
            }
            <div 
            className="logSign__Instagram">
                <div className='logSign__log'>
                    <TextBlock text={TextBlockTexts.textBlock1} />
                    <Form inputs={props.inputs}/>
                    <span className='logSign__divide'>OR</span>
                    <div className="fb-login-button logSign__facebook" data-width="278" data-size="large" data-button-type="continue_with" 
                    data-layout="default" data-auto-logout-link="true" data-use-continue-as="false" data-scope="email">
                    </div>
                    {props.question === 'login' ? 
                    <p className='logSign__bellowParagraph'>By signing up, you agree to our Terms. Any data submited will not be used against you and will be collected only for educational purpose of this project.</p>
                        : null    
                    } 
                </div>
                <TextBlock text={props.textBlock}/>
            </div>
        </div>
    )
}

export default LogSign

