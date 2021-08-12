import { AlertStatus, useToast, Wrap } from '@chakra-ui/react'
import React, { useEffect } from 'react'

interface Props {
    title:string
    description:string
    status: AlertStatus
}

export const ToastNotification = ({ title,description,status}: Props) => {
    const toast = useToast()
    useEffect(() => {
        toast({
            title: title,
            description: description,
            isClosable: true,
            status: status,
            duration: 2000,
            position: "top-right",
        })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
            <Wrap>
            </Wrap>
    )
}
