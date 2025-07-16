const TestBootstrap = () => {
    return (
        <div className="container mt-5">
            <div className="alert alert-success" role="alert">
                ✅ Bootstrap CSS is working!
            </div>
            
            <button className="btn btn-primary me-2">Primary Button</button>
            <button className="btn btn-secondary">Secondary Button</button>
            
            <div className="card mt-3" style={{width: '18rem'}}>
                <div className="card-body">
                    <h5 className="card-title">Test Card</h5>
                    <p className="card-text">If this card looks styled, Bootstrap is working!</p>
                </div>
            </div>
        </div>
    );
};

export default TestBootstrap;