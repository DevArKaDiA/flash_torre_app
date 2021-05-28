
function DevType(){
    return(
        <div className="container-fluid">
            <div className="row">           
                <div className="row">
                    <div>
                        Now select your specialty
                    </div>
                    <div className="col-3 bg-warning">
                        <h2>LOGO</h2>
                    </div>
                    <div className="col-9 bg-secondary">
                        <div className="row">           
                            <h2 className="col">Back-End</h2>           
                            <h2 className="col">Front-End</h2>           
                        </div>
                        <input type="range" name="" id="" className="form-range" />
                        <h2 className="col">FullStack</h2>
                    </div>
                </div>
                <div className="row">                    
                    <button className="col">Back</button>
                    <button className="col">Next</button>
                </div>
            </div>
        </div>
    );
}

export default DevType;