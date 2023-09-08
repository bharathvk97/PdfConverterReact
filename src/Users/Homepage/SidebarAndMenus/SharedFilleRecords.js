import React from 'react'

const SharedRecords = ({ data }) => {
  return (
    <table className="table-responsive">
      <thead>
        <tr style={{ color: '#f7403b' }}>
          <th scope="col" style={{ color: 'white' }}>
            File Name
          </th>
          <th scope="col" style={{ color: 'white' }}>
            Size
          </th>
          <th scope="col" style={{ color: 'white' }}>
            Shared Date
          </th>
          <th scope="col" style={{ color: 'white' }}>
            Shared With
          </th>
          <th scope="col" style={{ color: 'white' }}>
            Preview
          </th>
          <th scope="col" style={{ color: 'white' }}>
            Download
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr>
            <td style={{ color: 'white' }}>{item.title} </td>
            <td style={{ color: 'white' }}>{item.brand} </td>
            <td style={{ color: 'white' }}>{item.brand} </td>
            <td style={{ color: 'white' }}>{item.price} </td>
            <td style={{ color: 'white' }}>
              <a href="#" style={{ color: 'white' }}>
                Preview
              </a>
            </td>
            <td style={{ color: 'white' }}>
              <a href="#" style={{ color: 'white' }}>
                Download
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default SharedRecords
