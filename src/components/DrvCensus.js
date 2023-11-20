import React from 'react'
import { Button } from 'reactstrap'

function DrvCensus() {
  return (
    <div>
      <h1> Drv Census  </h1>
        <Button color="primary" >Add Census</Button>{' '}
        <Button color="secondary">View Census</Button>{' '}
        <Button color="success">Edit Census</Button>{' '}
        <Button color="info">Delete Census</Button>{' '}
        <Button color="warning">Refresh</Button>{' '}
    </div>
  )
}

export default DrvCensus
