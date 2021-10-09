import React from "react"

import Icons from "./Icons"
import * as S from "./styled"
import links from "./content"

const SocialLinks = () => (

  <S.SocialLinksWrapper>
    <S.SocialLinksList>
      { links.map((link, i) => {
        const Icon = Icons[link.label]

        return (<S.SocialLinksItem key={i}>
            <S.SocialLinksLink href={link.url} title={link.label} target="_blank" rel="noopener norefer">
              <S.IconWrapper>
                <Icon />
              </S.IconWrapper>
            </S.SocialLinksLink>
          </S.SocialLinksItem>
          )


      })}
    </S.SocialLinksList>
  </S.SocialLinksWrapper>
)

export default SocialLinks