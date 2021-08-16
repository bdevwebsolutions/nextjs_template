import React from 'react'
import styled from 'styled-components'
import { BodyContainer } from '../components'

//@ts-ignore
export const withHeaderHOC = WrappedComponent => props => {

    return (
        <BodyContainer>
            <Banner>BANNER</Banner>
            <WrappedComponent {...props}/>
        </BodyContainer>
    )

}

//@ts-ignore
export const withFooterHOC = WrappedComponent => props => {
    return(
        <BodyContainer>
            <WrappedComponent {...props}/>
            <Footer>FOOTER</Footer>
        </BodyContainer>
    )
}

//@ts-ignore
export const withFooterAndHeaderHOC = (WrappedComponent) => props => {
    return(
        <BodyContainer>
            <Banner>BANNER</Banner>
            <WrappedComponent {...props}/>
            <Footer>FOOTER</Footer>
        </BodyContainer>
    )

}


const Banner = styled.div`
    color: ${props => props.theme.color.secondary};
    background-color: ${props => props.theme.color.primary};
`

const Footer = styled.div`
    color: ${props => props.theme.color.secondary};
    background-color: ${props => props.theme.color.primary};
`