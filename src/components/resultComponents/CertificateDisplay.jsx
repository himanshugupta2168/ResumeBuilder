import React from 'react'

function CertificateDisplay({Certificates}) {
    // console.log(Certificates)
  return (
    <div>
        <div className="certificate">
            <a href={`${Certificates.certificate_1_url}`}>
                <p>{Certificates.certificate_1_name}</p>
            </a>
        </div>
        <div className="certificate">
            <a href={`${Certificates.certificate_2_url}`}>
                <p>{Certificates.certificate_2_name}</p>
            </a>
        </div>
        <div className="certificate">
            <a href={`${Certificates.certificate_3_url}`}>
                <p>{Certificates.certificate_3_name}</p>
            </a>
        </div>
    </div>
  )
}

export default CertificateDisplay