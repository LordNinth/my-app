import logo from './logo192.png';
export const Jumbotron = ()=>{
    return (
        <div className="jumbotron">
            <div className = "flexLeft">
                <div className="image"> 
                <img src={logo} className="App-logo" alt="logo" />
                </div>
 
            </div>
            <div className = "flexRight">
                <div className="title"> Lord Ninth</div>
                <div className="sub-title"> Lorem Ipsum asdf aafsda asdfa asdf aasdf {'\n'}
                aasdf asdfasd fadsfafadsf aadfasd fadfa s asdf asdf asdf</div>
            </div>
        </div>
    );
};