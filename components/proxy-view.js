import React, { useContext } from 'react'
import { ProxyContext } from '../context/proxy-context'

const style = {
    padding: 12
}

const ProxyView = () => {
    const [proxy] = useContext(ProxyContext)
    const { ipAddress, countryName, isProxy, proxyType } = proxy

    return (
        <div className="box center" style={style}>
            <div className="content">
                <ul>
                    <li>IP Address : {ipAddress} </li>
                    <li>Country : {countryName} </li>
                    <li>Proxy : {isProxy} </li>
                    <li>Proxy Type: {proxyType} </li>
                </ul>
            </div>
        </div>
    )
}

export default ProxyView
