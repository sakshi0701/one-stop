import React from 'react'
import './reviews.css'

const Reviews = () => {
    return (
        <>
        <div className="review-title">Reviews.</div>
            <div className="reviews">

                <div className="review-card">
                    <div className="review-main">
                        <div className="review">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor eos eum recusandae voluptas sunt laboriosam explicabo commodi nostrum, soluta optio.
                    </div>
                        <div className="name">- Amay Roy</div>
                    </div>
                </div>

                <div className="review-card">
                    <div className="review-main">
                        <div className="review">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor eos eum recusandae voluptas sunt laboriosam explicabo commodi nostrum, soluta optio.
                    </div>
                        <div className="name">- Aneesa Grover</div>
                    </div>
                </div>

                <div className="review-card">
                    <div className="review-main">
                        <div className="review">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor eos eum recusandae voluptas sunt laboriosam explicabo commodi nostrum, soluta optio.
                    </div>
                        <div className="name">- Sushma Sharma</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reviews;
