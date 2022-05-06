import './Main.css';

const Main = () => {
    return (
        <div className='container'>
            <div className='main_container_inner'>
                <div className='main_header-content'>Player</div>
                <div className='main_app-content'>
                    <div className='main_app-logo'/>
                    <p className='main_app-info'>Improve your english playing games</p>
                </div>
                <div className='main_route-block'>
                    <div className='main_route-item_block'>
                        <div className='main_route-item' style={{'background-color' : '#00B586'}}>
                            <div className='main-play-icon'/>
                            <h3 className='class-text'>Emotions 1</h3>
                        </div>
                        <div className='main_route-item' style={{'background-color' : '#FE6BC7'}}>
                            <div className='main-play-icon'/>
                            <h3 className='class-text'>Emotions 2</h3>
                        </div>
                    </div>
                    <div className='main_route-item_block'>
                        <div className='main_route-item' style={{'background-color' : '#FFE603'}}>
                            <div className='main-play-icon'/>
                            <h3 className='class-text'>Actions</h3>
                        </div>
                        <div className='main_route-item' style={{'background-color' : '#8856C7'}}>
                            <div className='main-play-icon'/>
                            <h3 className='class-text'>Sentences</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;