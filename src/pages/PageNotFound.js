import React from "react";

const PageNotFound = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
      <h1 className="display-1 text-danger">404</h1>
      <h2 className="mb-3">Page Not Found</h2>
      <p className="text-muted">The page you are looking for doesn’t exist.</p>
      <a href="/" className="btn btn-primary mt-3">
        Go Back Home
      </a>
    </div>
  );
};

export default PageNotFound;
