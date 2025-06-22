"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  const reload = () => {
    startTransition(async () => {
      router.refresh();
      reset();
    });
  };
  return (
    <>
      <div className="main">
        <div className="error-container">
          {/* Error Icon and Code */}
          <div className="error-icon-section">
            <div className="error-icon-wrapper">
              <svg
                className="error-icon"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            </div>
          </div>

          {/* Error Title  */}
          <h1 className="error-title">{error.name}</h1>

          {/* Error Message */}
          <p className="error-message">
            The page you are looking for might have been removed, had its name changed, or is
            temporarily unavailable.
          </p>

          {/* Action Buttons */}
          <div className="action-buttons">
            <Link href="/" className="btn btn-primary">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9,22 9,12 15,12 15,22"></polyline>
              </svg>
              Go Home
            </Link>
            <button onClick={reload} className="btn btn-secondary">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m3 12 2-2m0 0 7-7 7 7M5 10v10a1 1 0 0 0 1 1h3m10-11 2 2m-2-2v10a1 1 0 0 1-1 1h-3m-6 0a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1m-6 0h6" />
              </svg>
              Try Again
            </button>
            <button className="btn btn-tertiary">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              Contact Support
            </button>
          </div>

          {/*  Help Section   */}
          <div className="help-section">
            <h3 className="help-title">Need Help?</h3>
            <p className="help-text">
              If you continue to experience issues, please don`t hesitate to reach out to our
              support team.
            </p>
            <div className="help-links">
              <a href="#" className="help-link">
                Documentation
              </a>
              <a href="#" className="help-link">
                FAQ
              </a>
              <a href="#" className="help-link">
                Status Page
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
