import React, { useState, useEffect } from 'react'
import './style.css'
import { Container } from '@material-ui/core'

import EntityInfo from './entityInfo/EntityInfo'
import ExternalInfo from './externalIdentifire/ExternalInfo'
import Module from './modules/Module'
import InitKyc from './initiateKYC/InitKyc'

const InitiateKYC = () => {

    const initKycData = {
        entityInfo: {
            isActive: false,
            refId : '',
            legalEntityName : '',
            country: ''
        },
        externalInfo: {
            isActive: false
        },
        moduleInfo: {
            isActive: false
        }
    }

    const [KycData, setKycData] = useState(initKycData)



    return (
        <Container className="init-kyc-container" >
            
            <div className="progresser">
                Progresser
            </div>

            <EntityInfo />
        </Container>
    )
}

export default InitiateKYC
