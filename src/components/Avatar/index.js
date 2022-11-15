import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from './styled'

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`{
  avatarImage: file(relativePath: {eq: "profile.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 60, height: 60, layout: FIXED)
    }
  }
}`
  )

  return <S.AvatarWrapper fixed={avatarImage.childImageSharp.gatsbyImageData} />;
}

export default Avatar