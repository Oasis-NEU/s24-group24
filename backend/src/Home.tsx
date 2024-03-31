import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';

function Home() {
    return (
        <div>
            <body>
                <div className="header"> 
                    <div className="left-section">
                        <p>Welcome to grade calculator! Your current classes are listed below. Click "add class" to add a new class.</p>
                    </div>

                    <div className="middle-section">

                    </div>

                    <div className="right-section">
                        
                    </div>
                </div>
            </body>
        </div>
    );
}

export default Home;
ReactDOM.render(<Home />, document.getElementById('root'));