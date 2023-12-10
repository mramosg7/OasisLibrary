import { StyledButton } from '../styled-components/styled';

export default function PlaceholderLibros(){
    return(
        <>
             <div className="row alaing-items-center justify-content-center">
                {Array.from({ length: 10 }, (_, index) => (
                    <div className="col-auto" key={index}>
                    <div className="card mb-3" style={{ width: '400px' }} aria-hidden="true">
                        <div className="row g-0">
                            <div className="col-auto placeholder-glow" >
                            <span className="placeholder" style={{ height: '300px', width: '200px' }}></span>
                            </div>
                            <div className="col-auto" style={{ width: '49%' }}>
                                <div className="card-body h-100 d-flex flex-column">
                                    <h5 className="card-title placeholder-glow fw-lighter mb-3">
                                        <span className="placeholder col-6"></span>
                                    </h5>
                                    <p className="card-text">
                                        <span className="placeholder col-6"></span>
                                    </p>
                                    <StyledButton className="btn btn-dark disabled placeholder col-6 mt-auto" aria-disabled="true"></StyledButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
                
            </div>
        </>
    )
}