import React from 'react';
import { StyledLink, Wrapper} from './Drawer.styles';

export function Drawer({ close }) {
    return (
        <Wrapper>
            <StyledLink to="/home" onClick={() => close(false)}>Home</StyledLink>
            <StyledLink to="/gallery" onClick={() => close(false)}>Gallery</StyledLink>
            <StyledLink to="/projects" onClick={() => close(false)}>Projects</StyledLink>
            <StyledLink to="/certificates" onClick={() => close(false)}>Certificates</StyledLink>
            <StyledLink to="/contact" onClick={() => close(false)}>Contacts</StyledLink>
        </Wrapper>
    )
}
