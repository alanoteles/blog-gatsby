import React from "react"

import { Home } from '@styled-icons/boxicons-solid/Home'
import { Grid } from '@styled-icons/boxicons-solid/Grid'
import { SearchAlt2 as Search } from '@styled-icons/boxicons-regular/SearchAlt2'
import { UpArrowAlt as Arrow } from 'styled-icons/boxicons-regular'
import { Lightbulb as Light } from 'styled-icons/material-outlined'

import * as S from './styled'


const MenuBar = () => (
  <>

  <S.MenuBarWrapper>
    <S.MenuBarGroup>
      <S.MenuBarLink to="/" title="Go to Home">
        <S.MenuBarItem><Home /></S.MenuBarItem>
      </S.MenuBarLink>
      <S.MenuBarLink to="/search" title="Search">
        <S.MenuBarItem><Search /></S.MenuBarItem>
      </S.MenuBarLink>
    </S.MenuBarGroup>

    <S.MenuBarGroup>
      <S.MenuBarItem title="Mudar o tema"><Light /></S.MenuBarItem>
      <S.MenuBarItem title="Mudar visualização"><Grid /></S.MenuBarItem>
      <S.MenuBarItem title="Ir para o topo"><Arrow /></S.MenuBarItem>
    </S.MenuBarGroup>
  </S.MenuBarWrapper>
  </>
)

export default MenuBar