import { Link } from "react-router-dom";
import { StyledNav } from "../styled-components/styled";

export default function Header() {
    return (
        <>
            <StyledNav className="navbar navbar-expand-lg text-light" aria-label="Thirteenth navbar example">
                <div className="container-fluid">
                    <div className="d-lg-flex" id="navbarsExample11">
                        <Link className="text-decoration-none" to="/">
                            <h2 className="navbar-brand col-lg-3 me-0 text-light fs-2" >Oasis Libray</h2>
                        </Link>
                        
                    </div>
                </div>
            </StyledNav>
        </>
    )
} 