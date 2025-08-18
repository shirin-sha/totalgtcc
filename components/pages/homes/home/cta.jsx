import React from 'react';

const CtaArea = () => {
    return (
        <>
        <div className="cta__area">
            <div className="container">
                <div className="row cta__area-bg align-items-center">
                    <div className="col-xxl-5 col-xl-4">
                        <div className="cta__area-title">
                            <h2>Let’s Build Together</h2>
                            <span className="text-two">Trusted Solutions for Every Industry.</span>
                        </div>
                    </div>
                    <div className="col-xxl-7 col-xl-8 pr-0">
                        <div className="cta__area-form">
                            <form>
                                <div className="cta__area-form-item md-mb-30">
                                 
                                </div>
                                <div className="cta__area-form-item md-mb-30">
                               
                                </div>
                                <div className="cta__area-form-item">
                                    <button className="btn-four" type="submit">Contact Us<i className="far fa-chevron-double-right"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>            
        </>
    );
};

export default CtaArea;