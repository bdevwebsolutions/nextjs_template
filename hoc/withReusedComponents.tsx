import React from 'react'
import styled from 'styled-components'

//@ts-ignore
export const withHeaderHOC = WrappedComponent => props => {

    return (
        <>
            <Banner>BANNER</Banner>
            <WrappedComponent {...props}/>
        </>
    )

}

//@ts-ignore
export const withFooterHOC = WrappedComponent => props => {
    return(
        <>
            <WrappedComponent {...props}/>
            <Footer>FOOTER</Footer>
        </>
    )
}

//@ts-ignore
export const withFooterAndHeaderHOC = (WrappedComponent) => props => {
    return(
        <>
            <Banner>BANNER</Banner>
            <WrappedComponent {...props}/>
            <Footer>FOOTER</Footer>
        </>
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