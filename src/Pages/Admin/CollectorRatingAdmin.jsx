//*  Imported Libraries
import React from 'react'
import { Row, Col, Table } from 'react-bootstrap'

// * Imported Components
import Sidebar from '../../components/sidebar'
import Topbar1 from '../../components/topbar'

const CollectorRatingAdmin = () => {
  return (
    <>
    <Topbar1 />
      <Row>
        <Col md={3}>
          <Sidebar />
        </Col>
        <Col
          md={9}
          style={{
            marginLeft: '290px',
            marginTop:'35px',
            marginTop: '10px',
          }}
        >
          <br />
          <h1>Rating </h1>
          <br />
          <br />
          <Table striped bordered hover>
            <thead style={{
          
          backgroundColor:'#62fcaf',
          
        }}>
              <tr>
                <th>User</th>
                <th colSpan={2} style={{textAlign:'center'}}>Order Details</th>
                <th colSpan={2} style={{textAlign:'center'}}>Ratings</th>
              </tr>
              <tr>
                <th>User no.</th>
                <th>Order no.</th>
                <th>Producer</th>
                <th>Rating</th>
                <th>Message</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>

              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  )
}

export default CollectorRatingAdmin
