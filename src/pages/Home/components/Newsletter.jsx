import React from 'react';
import '../../../assets/styles/Newsletter.css';

export default function NewsletterSection() {
    return (
        <section className="newsletter-wrapper">
            <div className="newsletter-content">
                <h1 className="newsletter-title">Join Our Newsletter</h1>
                <p className="newsletter-description">
                    Sign up for deals, new products and promotions
                </p>
                <div className="newsletter-form-container">
                    <div className="input-wrapper">
                        <svg
                            className="email-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </svg>
                        <input
                            type="email"
                            placeholder="Email address"
                            className="email-input"
                        />
                    </div>
                    <button className="signup-button">
                        Signup
                    </button>
                </div>
            </div>
        </section>
    );
}