import './PreLogin.css';

const PreLogin = () => {
    return (
        <div className='container'>
            <div className='container_inner'>
                <div className='app-logo_block'>
                    <div className='app-logo'/>
                </div>
                <div className='playing-mode_block'>
                    <div className='app-content_block'>
                        <div>
                            <h1 className='app-title'>Hello!</h1>
                        </div>
                        <div>
                            <p className='app-content'>Improve your english playing <br/>
                                Base English game</p>
                        </div>
                    </div>
                    <div className='playing-mode_routings'>
                        <div className='without-login'>
                            <button className='withoutBtn'>PLAY WITHOUT LOGIN</button>
                        </div>
                        <div className='with-login'>
                            <button className='withBtn'>LOGIN</button>
                        </div>
                        <div className='signup'>
                            <button className='signBtn'>SIGNUP</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreLogin;