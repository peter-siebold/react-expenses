import React from "react";
import ReactDOM from "react-dom";


const Info = (props) => (
    <div>
        <h3>Info</h3>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private Info, please don't share</p>}
            <WrappedComponent {...props} />
        </div>
    );
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                <p>Please log in to see the info</p>
            )}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info="just some details" />, document.getElementById("app"))
// ReactDOM.render(<AdminInfo isAdmin={true} info="just some details" />, document.getElementById("app"))