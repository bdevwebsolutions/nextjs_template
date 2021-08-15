import { useRouter } from 'next/dist/client/router';
import React from 'react'
import { StoreContext } from '../context/store'

//@ts-ignore
export const withAuthHOC = WrappedComponent => props =>{

    const {connected} = React.useContext(StoreContext);   
    const Router = useRouter();

    React.useEffect(() => {
        if(!connected){
            Router.replace('/login')
        }
    }, [connected])

    if(connected){
        return <WrappedComponent {...props}/>
    } else {
        return null;
    }
    
}

