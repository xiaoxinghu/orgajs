import React from 'react'

export default (props) => {
    // const file = props.data.orga
    console.log(`>>>>> `, props)
    return (
	<h2>Hello</h2>
    )
}

// export const pageQuery = graphql`
//   query OrgaNodeById($nodeId: String!) {
//     orga( id: { eq: $nodeId }) {
//       id
//       content {
//         title
//       }
//     }
//   }
// `
