import {
   Alert,
   AlertDescription,
   AlertIcon,
   AlertTitle,
} from '@chakra-ui/react'
import React from 'react'

interface Props {
   status: any
   title: string
   description: string
}

export const AlertMessage = ({ status, title, description }: Props) => {
   return (
      <Alert status={status}>
         <AlertIcon />
         <AlertTitle mr={2}>{title}</AlertTitle>
         <AlertDescription>{description}</AlertDescription>
      </Alert>
   )
}
