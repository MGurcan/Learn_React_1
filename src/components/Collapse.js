import React from "react";

const Collapse = (probs) => {
    console.log(probs)
    return (

        <div>

                <a className="btn btn-primary w-100" data-bs-toggle="collapse" href={"#".concat(probs.href)} role="button" aria-expanded="false" aria-controls="collapseExample">
                    Link with href
                </a>


            <div className="collapse show" id={probs.href}>
                {probs.children}
            </div>
        </div>
    );
};
export default Collapse;
